import {reactive} from "vue";

export const store = reactive({

// funzione per animazione di elementi specifici
        saluta: (YElemento,elementoSpecifico) => {
        //   console.log(`Ciao, sono!`);
        window.addEventListener("scroll", function () {
            // quando i px della  finestra sono di piu rispetto al posizionamento dell elemento rimuove la classe scompari e aggiunge la transizione
            if (window.scrollY > YElemento) {
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

