<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$whatever = $_POST ['whatever'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$activities = $_POST['user_text'];
$text = $_POST['user_activities']; 

// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'testipotsmt'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'SaSHa19875'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('testipotsmt@yandex.ru'); // Ваш Email
$mail->addAddress('info@odobrenieipoteki.ru'); // Email получателя
$mail->addAddress('mebeland.by@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов
  for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }   
       


// Письмо
$mail->isHTML(true); 
$mail->Subject = 'odobrenieipoteki.ru';
$mail->Body    = "
    Пользователь оставил свои данные <br> 
    Форма: $whatever   <br>
    Имя: $name  <br>
    Телефон: $phone  <br>
    Почта: $email  <br> ";
// Текст письма

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>