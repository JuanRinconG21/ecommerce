<!DOCTYPE html>
<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

?>
<html lang="en">
	<head>
		<title>Contacto</title>
		<meta charset="utf-8">
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
		<meta name = "format-detection" content = "telephone=no" />
		<link rel="icon" href="images/favicon.ico">
		<link rel="shortcut icon" href="images/favicon.ico" />
		<link rel="stylesheet" href="css/form.css">
		<link rel="stylesheet" href="css/style.css">
		<script src="js/jquery.js"></script>
		<script src="js/jquery-migrate-1.1.1.js"></script>
		<script src="js/script.js"></script> 
		<script src="js/jquery.ui.totop.js"></script>
		<script src="js/superfish.js"></script>
		<script src="js/jquery.equalheights.js"></script>
		<script src="js/jquery.mobilemenu.js"></script>
		<script src="js/jquery.easing.1.3.js"></script>
		<script src="js/TMForm.js"></script>
		<script>
			$(document).ready(function(){
				$().UItoTop({ easingType: 'easeOutQuart' });
			}) 
		</script>
		<!--[if lt IE 8]>
		<div style=' clear: both; text-align:center; position: relative;'>
			<a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode">
				<img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
			</a>
		</div>
		<![endif]-->
		<!--[if lt IE 9]>
			<script src="js/html5shiv.js"></script>
			<link rel="stylesheet" media="screen" href="css/ie.css">
		<![endif]-->
	
        
        </head>
	<body class="" id="top">
<!--==============================header=================================-->
		<header>
			<div class="clear"></div>
			<div class="container_12">
					<div class="grid_12">
					<h1>
						<a href="index.html">
							<img src="images/ffe.png" alt="Your Happy Family">
						</a>
					</h1>
					<div class="menu_block">
						<nav class="horizontal-nav full-width horizontalNav-notprocessed">
							<ul class="sf-menu">
								<li ><a href="index.html">Inicio</a>
									
								</li>
								
								<li ><a href="index-2.html">Proyectos</a></li>
                                                                
								<li class="current"><a href="index-4.html">Contacto</a></li>
							</ul>
						</nav>
						<div class="clear"></div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</header>
		<div class="main">
<!--==============================Content=================================-->
			<div class="content"><div class="ic"></div>
				<div class="container_12">
					
                                    <div class="grid_12">
                                        <h3><b>Comunícate con nosotros...</b> ¡Forjemos Esperanza!</h3>
                                    </div>
					<div class="grid_4">
						<h3></h3>
						<div class="map">
							<address>
								<dl>


									
									<dd><span>Teléfonos: </span>+57 320 770 49 75</dd>
									<dd><span></span>+57 316 4317927</dd>
									<br>
									<dd>E-mail: <a href="#" class="col1">forjandoesperanza@hotmail.com</a></dd>
									
								</dl>
							</address>
							
						</div>
					</div>
					<div class="grid_8">
						
						<form id="form" action="#" method="post">
							<div class="success_wrapper">
								<div class="success-message">Formulario enviado correctamente</div>
							</div>
							<label class="name">
								<input type="text" name="nombre" placeholder="Nombre:" required="" data-constraints="@Required @JustLetters" />
								<span class="empty-message">*Este campo es obligatorio</span>
								<span class="error-message">*No es un nombre valido</span>
							</label>
							<label class="email">
								<input type="text" name="email" placeholder="E-mail:" required="" data-constraints="@Required @Email" />
								<span class="empty-message">*Este campo es obligatorio</span>
								<span class="error-message">*No es un email valido</span>
							</label>
							<label class="phone">
								<input type="text" name="telefono" placeholder="Teléfono:" required="" data-constraints="@Required @JustNumbers"/>
								<span class="empty-message">*Este campo es obligatorio</span>
								<span class="error-message">*No es un teléfono valido</span>
							</label>
							<label class="message">
								<textarea placeholder="Mensaje:" name="mensaje" required="" data-constraints='@Required @Length(min=20,max=999999)'></textarea>
								<span class="empty-message">*Este campo es obligatorio</span>
								<span class="error-message">*No es un Mensaje valido</span>
							</label>
							<div>
								<div class="clear"></div>
								<div class="btns">
                                                                    <input type="submit" name="submit"  onclick="ocultarform()" id="enviar" value="enviar">
									
								</div>
							</div>
						</form>   
                                            
                                            <?php
 
if(isset($_POST['submit']))
 

{
$nombre=$_POST['nombre'];
$telefono=$_POST['telefono'];
$email = $_POST['email'];
$mensaje=$_POST['mensaje'];



require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
 
$mail = new PHPMailer(true);                            
try {
    //$mail->SMTPDebug = 4;                               // Habilitar el debug
 
    $mail->isSMTP();                                      // Usar SMTP
    $mail->Host = 'smtp.office365.com';  // Especificar el servidor SMTP reemplazando por el nombre del servidor donde esta alojada su cuenta
    $mail->SMTPAuth = true;                               // Habilitar autenticacion SMTP
    $mail->Username = 'forjandoesperanza@hotmail.com';                 // Nombre de usuario SMTP donde debe ir la cuenta de correo a utilizar para el envio
    $mail->Password = 'infancia2004';                           // Clave SMTP donde debe ir la clave de la cuenta de correo a utilizar para el envio
    $mail->SMTPSecure = 'STARTTLS';                            // Habilitar encriptacion
    $mail->Port = 587;                                    // Puerto SMTP                     
    $mail->Timeout       =   30;
    $mail->AuthType = 'LOGIN';
 $mail->Priority = 1;
 $mail->CharSet = 'UTF-8';
    //Recipients   
 
    $mail->setFrom('forjandoesperanza@hotmail.com');     //Direccion de correo remitente (DEBE SER EL MISMO "Username")
    $mail->addAddress('forjandoesperanza@hotmail.com');     // Agregar el destinatario
    $mail->addReplyTo('forjandoesperanza@hotmail.com');     //Direccion de correo para respuestas     
 
    //Content
    $mail->isHTML(true);                                  
    $mail->Subject  = "Mensaje página web"; //Asunto del correo
    $mail->Body = '<p>Nombre: ' .$nombre.'<br> Teléfono: '. $telefono.'<br> Email: '.$email.'<br> Mensaje: '.$mensaje.'</p>';
     
    $mail->send();
    
    echo '<br><br>
        <center>
        
<div class="success_wrapper">
								<div class="success-message">Formulario enviado correctamente</div>
							</div> </center>' ;
 
} catch (Exception $e) {
    echo 'El mensaje no pudo ser enviado. Mailer Error: ', $mail->ErrorInfo;
}

?>
                                            <script type="text/javascript">
function ocultarform()
{
document.getElementById("enviar").display="none";
}
</script>
                                            <?php
}
?>

					</div>
				</div>
			</div>
<!--==============================footer=================================-->
			<footer>
				<div class="hor bg3"></div>
				<div class="container_12">
					<div class="grid_12 ">
						<div class="socials">
							<a href="https://www.facebook.com/people/Fundaci%C3%B3n-Forjando-Esperanza/100062955834563/"></a>
							
                                                        <div class="clear"></div>
						</div>
						<div class="copy">
							<strong>Fundación Forjando Esperanza</strong>   &copy; <span id="copyright-year"></span> | <a href="#">Privacy Policy</a><br>
							Website designed by <a href="http://www.templatemonster.com/" rel="nofollow">TemplateMonster.com</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>

