
function login (){
  var formulario = "<div class='login'>"+
                      "<h2> Login </h2>"+
                      "<input class='btn-data' type='text' placeholder='&#128272; Usuario' name='usuario'>"+
                      "<input class='btn-data' type='password' placeholder='&#128272; Contraseña' name='clave'>"+
                      "<a onClick='menu()'><input class='btn-submit' type='submit' value='Ingresar'></a>"+
                      "<a class='misspass' href='resetPassword.html'>¿Olvidaste tu contraseña?</a>"+
                    "</div>";

  document.getElementById("over-content").innerHTML = formulario;
  document.getElementById("over-content").style.opacity = "1";
}

function menu(){
  var opcion = confirm("Esta a punto de ingresar al sistema");
    if (opcion == true) {
        location.href = "home.html";
	} else {

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
