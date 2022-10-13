(() => {
  const App = {
    htmlElements: {
      // interacion con lo que interactuar en el html
      formText: document.getElementById("form-text"),
      letter: document.getElementById("letter"),
      responseLetter: document.getElementById("response-letter"),
    },

    init: () => {
      // inicia la ejecucion dee funciones cuando se cumpla la condicion
      App.htmlElements.formText.addEventListener(
        "submit",
        App.handlers.calcularLetter
      );
      App.htmlElements.formText.addEventListener(
        "reset",
        App.htmlElements.handlers.calcularLetter
      );
      
    },

    handlers: {
      //maneja el orden del codigo para que se ejecute de manera correcta
      calcularLetter: (event) => {
        event.preventDefault();
        palabra = App.htmlElements.letter.value;
        letrasContadas = App.utils.cantidadLetter(palabra.toLowerCase()); // cuenta las letras
        estiloLetras = App.templates.letras(letrasContadas); // acomoda las letras para presentarlas de manera correcta
        App.htmlElements.responseLetter.innerHTML = estiloLetras;
      },
      resetLetter: (event) => {
        event.preventDefault();
        App.htmlElements.responseLetter.innerHTML = "";
      },
    },

    utils: {
      // contiene las funciones que se utilizaran para calculos
      cantidadLetter: (palabra) => {
        palabraArray = palabra.split("");
        letrasContadas = [[], []]; // letras,cantidad
        // letras contadas [0] == letra
        // letras contadas [1] == cantidad
        for (let i = 0; i < palabraArray.length; i++) {
          encontrada = letrasContadas[0].findIndex(
            (e) => e === palabraArray[i]
          );
          //verifica si la letra existe dentro de la matriz de letras contadas
          if (encontrada >= 0) {
            letrasContadas[1][encontrada]++;
          } else {
            // añade la letra matriz
            letrasContadas[0].push(palabraArray[i]);
            letrasContadas[1].push(1);
          }
        }

        return letrasContadas;
      },
    },
    templates: { 
      // nuevo codigo html por mostrar
      letras: (letrasContadas) => {
        newLetrasContadas = letrasContadas[0].map((letra, index) => `${letra}: ${letrasContadas[1][index]}`);
        return `
        <h2>Letras</h2>
        <p>
            ${newLetrasContadas.join("<br>")}
        </p>
        `

      },
    },
  };

  App.init();
})();
