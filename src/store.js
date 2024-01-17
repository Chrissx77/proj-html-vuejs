import {reactive} from "vue";

export const store = reactive({

// funzione per animazione di elementi specifici
        transformElement: (elementoSpecifico) => {
        // altezza ElementoFacts singolo dove si attiverà la transizione
        var elementRect = elementoSpecifico.getBoundingClientRect();
       // console.log(elementRect);
       // valore per farlo comparire prima
        elementRect.y -= 500;
        // parte con classe scompari 
        // elementoSpecifico.classList.add("scompari")
        window.addEventListener("scroll", function () {
            // quando i px della  finestra sono di piu rispetto al posizionamento dell elemento rimuove la classe scompari e aggiunge la transizione
            if (window.scrollY > elementRect.y) {
                elementoSpecifico.classList.remove("scompari");
              elementoSpecifico.classList.add("transizione-scroll");
            } else{
                elementoSpecifico.classList.add("scompari")
            }
          });
        },

});

