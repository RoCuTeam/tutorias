
function presentacion(){
  var cont = '<h2>Guía para el autoestudio y validación de pares de los Programas Institucionales de Tutoría.</h2>'+
              '<article class="">'+
                '<p>'+
                  'Dentro de las principales acciones para lograr los objetivos de las Instituciones de Educación Superior (IES), los Programas de Institucionales de Tutoría (PIT) representan un eje importante a considerar; aspectos tales como el rezago educativo, la deserción escolar, la adherencia al programa, el sano desarrollo emocional y sobre todo la calidad académica tienen en la tutoría una base sólida. Una forma de lograr que las IES tengan estos programas en desarrollo y con los mejores estándares de calidad, son los procesos de mejora continua.'+
                '</p>'+
                '<p>'+
                  'El proceso de autoevaluación consiste en el llenado de un formulario diseñado bajo una metodología de investigación – acción; es decir, con fines netamente de generar reflexiones sobre las condiciones actuales que tienen específicamente los PIT, con miras a implementar, actualizar y corregir aquellas áreas que pudieran ser susceptibles de una mejora continua.'+
                '</p>'+
                '<p>'+
                  'El diseño de este modelo se basa en los fundamentos de los Sistemas de Gestión de Calidad (SGC) propiamente de los modelos ISO 9001 y sobre aplicado a las experiencias en el ambiente educativo (Buendía, 2013; Díaz, 2013 y Montes, 2002).'+
                '</p>'+
                '<p>'+
                  'La estructura del documento se base en siete ejes con un total de 33 rubros a analizar distribuidos de la siguiente forma:'+
                '</p>'+
              '</article>'+
              '<img src="img/ejes.png" alt="Ejes autoevaluación PIT" title="Ejes autoevaluacion PIT" width="500px" height="auto">';

  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}

function eje1(){
  var cont="";
  cont += "<h2>Fundamentos y condiciones de operación</h2>";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";
  cont += "        <!--Agregar form-->";
  cont += "        <section class=\"formulario\" id=\"formulario1.1\">";
  cont += "          <h4 class=\"subeje obligatorio\">1.1 Entendimiento de la IES y su contexto</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"1.1.a.1\">Describa la ubicación y zona geográfica: </label>";
  cont += "          <textarea name=\"ubicacion\" id=\"1.1.a.1\" placeholder=\"Zona geográfica...\"></textarea>";
  cont += "          <label for=\"1.1.a.2\">Caracter: </label>";
  cont += "          <select class=\"\" name=\"caracter\" id=\"1.1.a.2\">";
  cont += "            <option value=\"Público\">Público</option>";
  cont += "            <option value=\"Privado\">Privado</option>";
  cont += "          </select>";
  cont += "          <label for=\"1.1.a.3\">Antigüedad de la IES: </label>";
  cont += "          <input type=\"number\" name=\"antiguedad\" id=\"1.1.a.3\" value=\"\" placeholder=\"0\"><span class=\"complemento\"> Años</span>";
  cont += "          <label for=\"1.1.a.4\">Misión: </label>";
  cont += "          <textarea name=\"descripcion\" id=\"1.1.a.4\" placeholder=\"Misión...\"></textarea>";
  cont += "          <label for=\"1.1.a.5\">Visión: </label>";
  cont += "          <textarea name=\"descripcion\" id=\"1.1.a.5\" placeholder=\"Visión...\"></textarea>";
  cont += "          <label for=\"1.1.a.6\">Valores: </label>";
  cont += "          <textarea name=\"descripcion\" id=\"1.1.a.6\" placeholder=\"Valores...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"1.1.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"1.1.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"1.1.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"1.1.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "";
  cont += "        <section class=\"formulario\" id=\"formulario1.2\">";
  cont += "          <h4 class=\"subeje obligatorio\">1.2 Entendimiento de la IES y su contexto (Parte 2)</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"1.2.a.1\">¿Cómo le llaman al programa en la institución? </label>";
  cont += "          <textarea name=\"nombreProg\" id=\"1.2.a.1\" placeholder=\"Nombre del programa...\"></textarea>";
  cont += "          <label for=\"1.2.a.2\">¿Por qué le llaman así? </label>";
  cont += "          <textarea name=\"explicacionNom\" id=\"1.2.a.2\" placeholder=\"Razón...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"1.2.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"1.2.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"1.2.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"1.2.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "";
  cont += "        <section class=\"formulario\" id=\"formulario1.3\">";
  cont += "          <h4 class=\"subeje obligatorio\">1.3 Cobertura </h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"1.3.a.1\">Número de alumnos: </label>";
  cont += "          <input type=\"number\" name=\"numAlumnos\" id=\"1.3.a.1\" value=\"\" placeholder=\"0\"><span class=\"complemento\"> Alumnos</span>";
  cont += "          <label for=\"1.3.a.2\">Número de tutores en la IES: </label>";
  cont += "          <input type=\"number\" name=\"numTutores\" id=\"1.3.a.2\" value=\"\" placeholder=\"0\"><span class=\"complemento\"> Tutores</span>";
  cont += "          <label for=\"1.3.a.3\">Proporción de alumnos atendidos por tutor: </label>";
  cont += "          <input type=\"number\" name=\"proporcionAluTut\" id=\"1.3.a.3\" value=\"\" placeholder=\"0\"><span class=\"complemento\"> %</span>";
  cont += "          <label for=\"1.3.a.4\">Porcentaje de alumnos atendidos: </label>";
  cont += "          <input type=\"number\" name=\"porcentajeAlum\" id=\"1.3.a.4\" value=\"\" placeholder=\"0\"><span class=\"complemento\"> %</span>";
  cont += "          <label for=\"1.3.a.5\">De acuerdo a los datos obtenidos describa si la cobertura de alumnos en su IES en qué medida es suficiente y por qué. </label>";
  cont += "          <textarea name=\"coberturaAlum\" id=\"1.3.a.5\" placeholder=\"Suficiente cobertura de alumnos...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"1.3.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"1.3.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"1.3.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"1.3.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "";
  cont += "        <section class=\"formulario\" id=\"formulario1.4\">";
  cont += "          <h4 class=\"subeje opcional\">1.4 Opcional </h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"1.4.a.1\">Describa si existe algún otro elemento importante que describa el contexto de la IES: </label>";
  cont += "          <textarea name=\"elementoIES\" id=\"1.4.a.1\" placeholder=\"Información Adicional...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"1.4.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"1.4.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"1.4.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"1.4.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";

  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}

function eje2(){
  var cont="";
  cont += "<h2>Gobierno y liderazgo</h2>";
  cont += "        <!--Agregar form-->";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";
  cont += "        <section class=\"formulario\" id=\"formulario2.1\">";
  cont += "          <h4 class=\"subeje obligatorio\">2.1 Roles, responsabilidades y autoridades</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"2.1.a.1\">Describa desde donde opera el programa institucional de tutoria: </label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.1.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "          <label for=\"2.1.a.2\">En donde se integra en el organigrama de la institución: </label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.1.a.2\" placeholder=\"Respuesta...\"></textarea>";
  cont += "          <label for=\"2.1.a.3\">Detalle los roles y responsabilidades de la alta dirección  (consejo universitario, consejo directivo, dirección general, junta de gobierno o rectoría) así como de la secretaría académica, planeación o estructuras similares.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.1.a.3\" placeholder=\"Roles...\"></textarea>";
  cont += "          <label for=\"2.1.a.4\">¿Cómo opera a nivel de las entidades académicas y con qué otras áreas se coordina para operar en cada programa educativo?</label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.1.a.4\" placeholder=\"Respuesta...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"2.1.b.1\"><i class=\"far fa-file-alt\"></i> Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"2.1.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"2.1.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"2.1.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario2.2\">";
  cont += "          <h4 class=\"subeje obligatorio\">2.2 Marco normativo</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"2.2.a.1\">Indicar los marcos de referencia formales que dan sustento al PIT en su institución tanto, nacionales, estatales o locales (Modelo educativo, modelo académico, guías de diseño o rediseño curricular, normatividad institucional, plan de desarrollo, reglamentos, planes institucionales, políticas nacionales, estatales, etcétera).</label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.2.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"2.2.b.1\"><i class=\"far fa-file-alt\"></i> Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"2.2.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"2.2.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"2.2.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario2.3\">";
  cont += "          <h4 class=\"subeje obligatorio\">2.3 Politicas de calidad</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"2.3.a.1\">Describir como miden la efectividad del programa de tutoría.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.3.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"2.3.b.1\"><i class=\"far fa-file-alt\"></i> Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"2.3.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"2.3.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"2.3.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario2.4\">";
  cont += "          <h4 class=\"subeje obligatorio\">2.4 Finanzas</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"2.4.a.1\">Mencione si existe un presupuesto asignado especialmente para la operación del programa de tutorías tanto a nivel central como en las entidades académicas y en qué medida este es suficiente para operar el programa. </label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.4.a.1\" placeholder=\"Respuesta...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"2.4.b.1\"><i class=\"far fa-file-alt\"></i> Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"2.4.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"2.4.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"2.4.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario2.5\">";
  cont += "          <h4 class=\"subeje opcional\">2.5 Opcional</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"2.4.a.1\">Describa si existe algún otro elemento importante que detalle la forma de gobierno y liderazgo.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"2.4.a.1\" placeholder=\"Respuesta...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"2.4.b.1\"><i class=\"far fa-file-alt\"></i> Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"2.4.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"2.4.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"2.4.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";

  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}

function eje3(){
  var cont="";
  cont += "<h2>Planificación</h2>";
  cont += "        <!--Agregar form-->";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";
  cont += "        <section class=\"formulario\" id=\"formulario3.1\">";
  cont += "          <h4 class=\"subeje obligatorio\">3.1 Acciones para la determinación de factores de riesgo y de oportunidades</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"3.1.a.1\">Describa si cuenta con un proceso para diagnosticar las necesidades, para operar el PIT y las necesidades de los estudiantes que permitan planear las metas y acciones para mejorar el rendimiento y la eficiencia terminal de sus estudiantes. </label>";
  cont += "          <textarea name=\"procesoDiag\" id=\"3.1.a.1\" placeholder=\"Describir proceso...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"3.1.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"3.1.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"3.1.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"3.1.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "";
  cont += "        <section class=\"formulario\" id=\"formulario3.2\">";
  cont += "          <h4 class=\"subeje obligatorio\">3.2 Objetivos y planes para alcanzarlos</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"descripcion\" style=\"width:100%;\"> Describa los siguientes aspectos que inciden en su programa de tutorias: <br/></label>";
  cont += "          <label for=\"3.2.a.1\">Ejes estratégicos: </label>";
  cont += "          <textarea name=\"ejesEstra\" id=\"3.2.a.1\" placeholder=\"Ejes estratégicos...\"></textarea>";
  cont += "          <label for=\"3.2.a.2\">Programas estratégicos: </label>";
  cont += "          <textarea name=\"programasEstra\" id=\"3.2.a.2\" placeholder=\"Programas estratégicos...\"></textarea>";
  cont += "          <label for=\"3.2.a.3\">Objetivos: </label>";
  cont += "          <textarea name=\"objetivos\" id=\"3.2.a.3\" placeholder=\"Objetivos...\"></textarea>";
  cont += "          <label for=\"3.2.a.4\">Metas: </label>";
  cont += "          <textarea name=\"metas\" id=\"3.2.a.4\" placeholder=\"Metas...\"></textarea>";
  cont += "          <label for=\"3.2.a.5\">Acciones: </label>";
  cont += "          <textarea name=\"acciones\" id=\"3.2.a.5\" placeholder=\"Acciones...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"3.2.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"3.2.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"3.2.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"3.2.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "";
  cont += "        <section class=\"formulario\" id=\"formulario3.3\">";
  cont += "          <h4 class=\"subeje deseable\">3.3 Planificación de cambios</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"descripcion\" style=\"width:100%;\"> Describa si han implementado los aspectos siguientes para apoyar el desarrollo de competencias genéricas y específicas para el ejercicio de la tutoría: <br/></label>";
  cont += "          <label for=\"3.3.a.1\">Nuevos enfoques para el acompañamiento tutorial de los estudiantes: </label>";
  cont += "          <textarea name=\"enfoquesTut\" id=\"3.3.a.1\" placeholder=\"Enfoques...\"></textarea>";
  cont += "          <label for=\"3.3.a.2\">Cambios en la normatividad de estudiantes y profesores: </label>";
  cont += "          <textarea name=\"normatividad\" id=\"3.3.a.2\" placeholder=\"Normatividad...\"></textarea>";
  cont += "          <label for=\"3.3.a.3\">Cambios en su programa de capacitación, formación y actualización de tutores: </label>";
  cont += "          <textarea name=\"cambiosTutores\" id=\"3.3.a.3\" placeholder=\"Cambios realizados...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"3.3.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"3.3.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"3.3.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"3.3.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "";
  cont += "        <section class=\"formulario\" id=\"formulario3.4\">";
  cont += "          <h4 class=\"subeje opcional\">3.4 Opcional </h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"3.4.a.1\">Describa si existe algún otro aspecto importante relacionado con planificación. <br/>Por ejemplo, si han incluido tendencias relacionadas con Responsabilidad Social Universitaria, Cultura de la legalidad, enfoque a grupos vulnerables, cuidado del medio ambiente o sustentabilidad.</label>";
  cont += "          <textarea name=\"aspectoPlan\" id=\"3.4.a.1\" placeholder=\"Información Adicional...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"3.4.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"3.4.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"3.4.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"3.4.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";

  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}

function eje4(){
  var cont="";
  cont += "<h2>Soporte</h2>";
  cont += "        <!--Agregar form-->";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";
  cont += "";
  cont += "        <section class=\"formulario\" id=\"formulario4.1\">";
  cont += "          <h4 class=\"subeje obligatorio\">4.1 Recursos humanos: Perfil</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"4.1.a.1\">Describa cual es el perfil y las principales funciones de los tutores que operan el PIT</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.1.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "          <label for=\"4.1.a.2\">Describa cómo eligen a los tutores y si este proceso garantiza contar con el personal adecuado para operar el programa y los alcances establecidos por su institución.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.1.a.2\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"4.1.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"4.1.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"4.1.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"4.1.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario4.2\">";
  cont += "          <h4 class=\"subeje obligatorio\">4.2 Recursos humanos: Formación</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"4.2.a.1\">Describa las acciones para realizar la inducción, formación, sensibilización y capacitación de los tutores enfocados a la acción tutorial y en qué momento se realizan.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.2.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "          <label for=\"4.2.a.2\">Indique si existe un mecanismo de evaluación de la formación de los tutores y cómo opera.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.2.a.2\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"4.2.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"4.2.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"4.2.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"4.2.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario4.3\">";
  cont += "          <h4 class=\"subeje obligatorio\">4.3 Infraestructura</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"4.3.a.1\">Describa si la institución cuenta con espacios destinados especialmente para la tutoría y si estos son suficientes para la adecuada operación del programa.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.3.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"4.3.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"4.3.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"4.3.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"4.3.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario4.4\">";
  cont += "          <h4 class=\"subeje obligatorio\">4.4 Tecnología y comunicación</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"4.4.a.1\">Describa el uso de medios tradicionales y electrónicos enfocados a tareas de registro documentación y consulta de información de la acción tutorial del PIT en su institución para el seguimiento, evaluación, indicadores de calidad y toma de decisiones</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.4.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "          <label for=\"4.4.a.2\">Mencione qué medios se utilizan y cómo se realiza la comunicación entre los diferentes actores y niveles del PIT resaltando la comunicación con los alumnos.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.4.a.2\" placeholder=\"Descripción...\"></textarea>";
  cont += "          <label for=\"4.4.a.3\">Mencioné las innovaciones implementadas en los últimos años en cuanto a tecnología y comunicación y si en qué medida han aportado mejoras al PIT.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.4.a.3\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"4.4.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"4.4.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"4.4.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"4.4.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario4.5\">";
  cont += "          <h4 class=\"subeje obligatorio\">4.5 Documentación</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"4.5.a.1\">Mencione los recursos y materiales de apoyo para el trabajo con estudiantes y el tutor; formatos que dan cuenta del proceso en la trayectoria escolar y la función del tutor y otros actores del PIT. Si es el caso, el diseño cuadernillos, manuales, etcétera.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.5.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"4.5.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"4.5.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"4.5.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"4.5.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario4.6\">";
  cont += "          <h4 class=\"subeje deseable\">4.6 Innocación</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"4.6.a.1\">Mencione si la IES ha realizado algún proceso de innovación que revolucione el programa de tutoría en el último año; por ejemplo, la incorporación de nuevas actividades relacionadas con las megatendencias, grandes cambios sociales, económico o culturales.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.6.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "          <label for=\"4.6.a.2\">Si existe alguna política al respecto y cómo ha impactado en la mejora continua del programa.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.6.a.2\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"4.6.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"4.6.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"4.6.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"4.6.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "        <section class=\"formulario\" id=\"formulario4.7\">";
  cont += "          <h4 class=\"subeje deseable\">4.7 Soporte</h4>";
  cont += "          <h5 >A) Descripción</h5>";
  cont += "          <label for=\"4.7.a.1\">Describa si existe algún otro aspecto relevante a mencionar en cuanto a soporte del programa de tutoría.</label>";
  cont += "          <textarea name=\"descripcion\" id=\"4.7.a.1\" placeholder=\"Descripción...\"></textarea>";
  cont += "";
  cont += "          <h5 >B) Documentos</h5>";
  cont += "          <label class=\"lab-documentos\" for=\"4.7.b.1\">Añadir documentos en caso de existir</label>";
  cont += "          <input class=\"documentos\" type=\"file\" name=\"documentos\" id=\"4.7.b.1\" value=\"\">";
  cont += "";
  cont += "          <h5 >C) Información adicional</h5>";
  cont += "          <label for=\"4.7.c.1\">Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de pares.</label>";
  cont += "          <textarea name=\"adicional\" id=\"4.7.c.1\" placeholder=\"Información adicional...\"></textarea>";
  cont += "        </section>";
  cont += "";
  cont += "        <div class=\"botones-save\">";
  cont += "          <button type=\"button\" name=\"button\" class=\"btn btn-save\"><i class=\"fas fa-save\"></i> Guardar</button>";
  cont += "        </div>";

  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}

function eje5(){
  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}

function eje6(){
  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}

function eje7(){
  var contenido = document.getElementById("contenido");
  contenido.innerHTML = cont;
}
