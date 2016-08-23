<?php 

$secret="6LfhBR4TAAAAAIxtvNNmh1Ds4P6kPMyAqE6f9dg5";
$ip=$_SERVER['REMOTE_ADDR'];
$captcha=$_POST['g-recaptcha-response'];
$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?$secret&captcha=$captcha&remoteip$ip");
//$array=json_decode($response,TRUE);

 if(isset($_POST['txtNombre']) && $_POST['txtCorreo'] != "" && $_POST['g-recaptcha-response']){  
        $mensaje =  "Formulario web \nNombre: ".$_POST['txtNombre']." \nCorreo: "
        .$_POST['txtCorreo']." \nMensaje: ".$_POST['txtMensaje']." \n ";
         $mensaje2 =  "Gracias por su mensaje, estaremos contactándonos con usted lo más pronto posible";
                        
         $header = "From: "."Todo Móvil <contactotm@todomovil.hn>".";\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";
        mail("contactotm@todomovil.hn", "Formulario web",$mensaje, $header);
        mail($_POST['txtCorreo'], "Confirmación",$mensaje2, $header);
         echo "<script>alert('Mensaje enviado, por favor revisa tu correo para confirmar');</script>";
        echo "<script>setTimeout(\"location.href = './';\",500);</script>";
    }
     else{
     	echo "<script>alert('Su Mensaje no fue enviado, Por Favor revise que haya llenado todos los datos');</script>";;
     	echo "<script>setTimeout(\"location.href = './#contact';\",100);</script>";
     }
?>

