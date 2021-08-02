<?php


// несколько получателей
$to = 'office@wakeapp.com';

// тема письма
$subject = 'Mail from wakeapp.com';

// текст письма
$message = 'User: ' . $_POST['name'] . ' sent you a message:<br />' . $_POST['message'] . '<br />
You can connect with him by email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>' . '<br />
or by phone <a href="tel:' . $_POST['phone'] . '">' . $_POST['phone'] . '</a>';


// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Отправляем
mail($to, $subject, $message, $headers);

