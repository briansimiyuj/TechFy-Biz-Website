<?php
    $name = $_POST['name']
    $visitor_email = $_POST['email']
    $message = $_Post['message']


    $email_from = 'info@techfybiz.co.ke';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                   "User Email: $visitor_email. \n".
                     "User Message: $message. \n";


    $to = "enter-your-email-here-where-to-receive-messages@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: contact.html");

?>