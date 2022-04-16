const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Pregunta 1?",
    respuestas: {
      a: "Respuesta 1",
      b: "Respuesta 2",
      c: "Respuesta 3",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Pregunta 2?",
    respuestas: {
      a: "Respuesta 1",
      b: "Respuesta 2",
      c: "Respuesta 3",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. Pregunta 3",
    respuestas: {
      a: "Respuesta 1",
      b: "Respuesta 2",
      c: "Respuesta 3",
      d: "Respuesta 4",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "Pregunta 4?",
    respuestas: {
      a: "Respuesta 1",
      b: "Respuesta 2",
      c: "Respuesta 3",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. Pregunta 5?",
    respuestas: {
      a: "Pregunta 1",
      b: "Pregunta 2",
      c: "Pregunta 3",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. Pregunta 6?",
    respuestas: {
      a: "R1",
      b: "R2",
      c: "R3",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7. Pregunta 7?",
    respuestas: {
      a: "R1",
      b: "R2",
      c: "R3",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. Pregunta 8?",
    respuestas: {
      a: "R1",
      b: "R2",
      c: "R3",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. Pregunta 9?",
    respuestas: {
      a: "R1",
      b: "R2",
      c: "R3",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. Pregunta 10?",
    respuestas: {
      a: "R1",
      b: "R2",
      c: "R3",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <br/><input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
      <br/>
          <div class="respuestas"> ${respuestas.join("")}</div>
          <br/>
          <br/>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;
  let promedio = 0;
  let mensaje = "";

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });
  promedio = (respuestasCorrectas/10)*10;
  if(promedio>=9){
    mensaje="Felcicidades has aprovado. `<br/>` Continua al siguiente nivel."
}
else{
    mensaje="Aun tienes que repasar las clases para que puedas avanzar al siguiente nivel."
}
  `<div class= "mensajeResultado">${resultadoTest.innerHTML ="Su promedio es de: "+promedio+
    `<br>`+"Con " +
    respuestasCorrectas +
    " aciertos." +`<br/>`+ mensaje}//+
    //preguntas.length;}</div>`

}


botonRes.addEventListener("click", mostrarResultado);