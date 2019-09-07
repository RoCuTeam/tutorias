
function login (){
  var formulario = "<form action=''>"+
                      "<h2> Login </h2>"+
                      "<input type='text' placeholder='&#128272; Usuario' name='usuario'>"+
                      "<input type='password' placeholder='&#128272; Contraseña' name='clave'>"+
                      "<input type='submit' value='Ingresar'>"+
                      "<a class='misspass' href='#'>¿Olvidaste tu contraseña?</a>"+
                    "</form>";

  document.getElementById("over-content").innerHTML = formulario;
  document.getElementById("over-content").style.opacity = "1";
}
