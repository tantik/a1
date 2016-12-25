<?php
    /**
     * Created by PhpStorm.
     * User: godson
     * Date: 8/24/16
     * Time: 22:04
     */

    $to = "meral@hellochava.com";

    $subject = "Message from site";
    $message = "
    First Name: {$_REQUEST['firstname']}\n
    Last Name: {$_REQUEST['lastname']}\n
    From: {$_REQUEST['email']}\n
    Phone: {$_REQUEST['phone']}\n
    Message: {$_REQUEST['message']}";

    mail($to, $subject, $message);

    header("Location: ".$_SERVER['HTTP_REFERER']."?form=sent#contact-box");