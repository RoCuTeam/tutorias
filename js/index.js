
function login (){
  var formulario = "<div class='login'>"+
                      "<h2> Login </h2>"+
                      "<input class='btn-data' type='text' placeholder='&#128272; Usuario' name='usuario' id='username'>"+
                      "<input class='btn-data' type='password' placeholder='&#128272; Contraseña' name='clave'>"+
                      "<a onClick='menu()'><input class='btn-submit' type='submit' value='Ingresar'></a>"+
                      "<a class='misspass' href='resetPassword.html'>¿Olvidaste tu contraseña?</a>"+
                    "</div>";

  document.getElementById("over-content").innerHTML = formulario;
  document.getElementById("over-content").style.opacity = "1";
}

function menu(){
  var usuario = $('#username').val();
  var opcion = confirm("Está a punto de ingresar al sistema \n             ¿Desea continuar?");
  if (opcion == true && usuario == "administrador") {
    location.href = "administrador/home.html";
	}
  else if (opcion == true && usuario == "coordinador") {
    location.href = "coordinador/home.html";
	}
  else if (opcion == true && usuario == "evaluador") {
    location.href = "evaluador/home.html";
	}
  else if (opcion == true && usuario == "responsable") {
    location.href = "home.html";
	}
  else {

	}
}

function autoEv(){
  location.href = "autoevaluacion.html";
}

function visita(){
  location.href = "infoVisita.html";
}

function dictamen(){
  location.href = "resultados.html";
}

function checkEvaluador(){
  location.href = "checkEvaluador.html";
}
