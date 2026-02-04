<?php
// contato.php
// Backend de envio de e-mail (equivalente ao server.js)

// -------- CONFIGURAÇÕES --------
$SMTP_HOST   = 'mail.ibvrd.com.br';
$SMTP_PORT   = 465;
$SMTP_SECURE = true; // true = SSL
$SMTP_USER   = 'ibvrd@ibvrd.com.br';
$SMTP_PASS   = 'Thi@go46'; // depois podemos mover isso para fora do arquivo

$DESTINO     = 'ibvrd@ibvrd.com.br';

// -------- HEADERS --------
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

// -------- SOMENTE POST --------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Método não permitido']);
    exit;
}

// -------- LER JSON --------
$input = json_decode(file_get_contents('php://input'), true);

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');

// -------- LOG SIMPLES (DEBUG) --------
error_log("Nova tentativa de envio: $name ($email)");

// -------- VALIDAÇÃO --------
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Todos os campos são obrigatórios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'E-mail inválido.']);
    exit;
}

// -------- MONTA O E-MAIL --------
$subject = 'Contato pelo site - IBVRD';

$bodyText = "
Nova mensagem recebida pelo site IBVRD!

Nome: $name
E-mail: $email

Mensagem:
$message
";

$bodyHtml = "
<div style='font-family: Arial, sans-serif; padding:20px; color:#333;'>
  <h2 style='color:#D4AF37;'>Nova mensagem recebida pelo site IBVRD</h2>
  <p><strong>Nome:</strong> {$name}</p>
  <p><strong>E-mail:</strong> {$email}</p>
  <br>
  <p><strong>Mensagem:</strong></p>
  <p style='background:#f9f9f9; padding:15px; border-left:4px solid #D4AF37;'>
    " . nl2br(htmlspecialchars($message)) . "
  </p>
</div>
";

// -------- HEADERS SMTP --------
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: IBVRD <{$SMTP_USER}>\r\n";
$headers .= "Reply-To: {$email}\r\n";

// -------- ENVIO --------
$enviado = mail(
    $DESTINO,
    $subject,
    $bodyHtml,
    $headers
);

// -------- RESPOSTA --------
if ($enviado) {
    http_response_code(200);
    echo json_encode(['message' => 'Mensagem enviada com sucesso!']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Erro ao enviar mensagem.']);
}
