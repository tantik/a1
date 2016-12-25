<?php
    /**
     * Created by PhpStorm.
     * User: godson
     * Date: 8/24/16
     * Time: 22:04
     */

    $to = "meral@hellochava.com";

    $subject = "Subscribe from site";
    $message = "\n
    Name: {$_REQUEST['name']}\n    
    Email: {$_REQUEST['email']}";

    mail($to, $subject, $message);

    header("Location: ".$_SERVER['HTTP_REFERER']);