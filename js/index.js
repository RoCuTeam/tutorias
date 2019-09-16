
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
  location.href = "home.html";
}
