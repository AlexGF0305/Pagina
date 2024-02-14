function scrollToElement(elementSelector, instance = 0){
//Selecciona todos los elementos 

const elements = document.querySelectorAll(elementSelector);
//comprobar si hay elementos que coincidan con el selector si la instancia solicitada existe
 if(elements.length > instance){
    //desplácese hasta la instancia especificada del elemento
    elements[instance].scrollIntoView({ behavior: 'smooth' });

    }

}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');

})

link2.addEventListener('click', () => {
    //scrool al 2do elemento con header class
    scrollToElement('.header' , 1 );

})

link3.addEventListener('click', () => {
    scrollToElement('.column');

})