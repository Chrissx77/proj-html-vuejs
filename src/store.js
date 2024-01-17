import {reactive} from "vue";

export const store = reactive({

// funzione per animazione di elementi specifici
        transformElement: (elementoSpecifico) => {
        // altezza ElementoFacts singolo dove si attiverà la transizione viene messa in un oggetto
        var elementRect = elementoSpecifico.getBoundingClientRect();
       // console.log(elementRect);
       // valore per farlo comparire prima
        elementRect.y -= 500;
        // parte con classe scompari 
        window.addEventListener("scroll", function () {
            // quando i px della  finestra sono di piu rispetto al posizionamento dell elemento rimuove la classe scompari e aggiunge la transizione
            // messo seconda condizione se no scompariva il componente quando lo scroll era 0 essendo che l'animazione partiva quando lo scrol è maggiore dell'altezza di dove si trova l'elemento
            console.log(this.window.scrollY);
            if (window.scrollY > elementRect.y || window.scrollY < 120 ) {
                elementoSpecifico.classList.remove("scompari");
              elementoSpecifico.classList.add("transizione-scroll");
            }
             else{
                elementoSpecifico.classList.add("scompari")
            }
          });
        },

});

