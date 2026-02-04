const path = require('path');

// 1. Carregar as variáveis de ambiente PRIMEIRO
// Isso garante que o Node encontre o arquivo .env mesmo em ambientes como cPanel
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

// 2. Debug inicial para verificar se o .env foi carregado
console.log('==================== DOTENV DEBUG ====================');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_SECURE:', process.env.SMTP_SECURE);
console.log('SMTP_USER:', process.env.SMTP_USER);
// Verifica se a senha foi carregada sem exibir o valor por segurança
console.log('SMTP_PASS carregada:', process.env.SMTP_PASS ? 'SIM' : 'NÃO');
console.log('====================================================');

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
// Serve os arquivos estáticos do React (pasta build)
app.use(express.static(path.join(__dirname, 'build')));

// --- ROTA DE ENVIO DE E-MAIL ---
app.post('/api/contato', async (req, res) => {
    console.log('REQ.BODY =>', req.body);
  const { name, email, message } = req.body;

  console.log(`[${new Date().toISOString()}] Nova tentativa de envio: ${name} (${email})`);

  // 1. Validação
  if (!name || !email || !message) {
    console.warn('Erro de validação: Campos faltando.');
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // 2. Verificação de variáveis de ambiente antes de criar o Transporter
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('ERRO CRÍTICO: Variáveis de ambiente de e-mail não encontradas.');
    return res.status(500).json({ message: 'Erro de configuração do servidor.' });
  }

  try {
    // 3. Configuração do Transporter (Nodemailer)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,     // mail.ibvrd.com.br
      port: Number(process.env.SMTP_PORT), // 465
      secure: process.env.SMTP_SECURE === 'true', // true para SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,   // Usando a variável corrigida
      },
      debug: true, // Ativa logs detalhados do Nodemailer no terminal
    });

    console.log('Tentando conectar ao servidor SMTP...');

    // 4. Configuração do E-mail
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'ibvrd@ibvrd.com.br',
      replyTo: email,
      subject: 'Contato pelo site - IBVRD',
      text: `
        Nova mensagem recebida pelo site IBVRD!

        Nome: ${name}
        E-mail: ${email}

        Mensagem:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #D4AF37;">Nova mensagem recebida pelo site IBVRD</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <br />
          <p><strong>Mensagem:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37;">
            ${message.replace(/\n/g, '<br />')}
          </p>
        </div>
      `,
    };

    // 5. Envio
    await transporter.sendMail(mailOptions);
    console.log('✅ E-mail enviado com sucesso!');
    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });

  } catch (error) {
    // Log detalhado do erro para debug
    console.error('❌ Erro ao enviar e-mail:', error.code, error.message);
    
    return res.status(500).json({ 
      message: 'Erro ao enviar mensagem. Verifique os logs do servidor.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
});

// --- Rota Fallback (Para o React Router funcionar) ---
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});