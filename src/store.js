import {reactive} from "vue";

export const store = reactive({

// funzione per animazione di elementi specifici
        saluta: (elementoSpecifico) => {
        // altezza ElementoFacts singolo dove si attiverà la transizione
        var elementRect = elementoSpecifico.getBoundingClientRect();
       // console.log(elementRect);
       // valore per farlo comparire prima
        elementRect.y -= 350;
        //   console.log(`Ciao, sono!`);
        window.addEventListener("scroll", function () {
            // quando i px della  finestra sono di piu rispetto al posizionamento dell elemento rimuove la classe scompari e aggiunge la transizione
            if (window.scrollY > elementRect.y) {
                elementoSpecifico.classList.remove("scompari");
              elementoSpecifico.classList.add("transizione-scroll");
            } else {
              // else la toglie a prescindere
              elementoSpecifico.classList.add("scompari");
            }
            // console.log('ciao sono ');
          });
        },

});

