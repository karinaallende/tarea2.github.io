/* Navbar */
//Al hacer scroll se crea una clase nueva.
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo", this.window.scrollY > 0);
})
/* Navbar */

/* Producto */
$(document).ready(function () {
    //Funcion cambio texto en botones
    $('.boton-compra').click(function () {

        var cambio = $(this).attr('class');

        if (!cambio.indexOf('botonasiento') > -1) {
            $(this).addClass('botonasiento')
            $(this).text('Agregado al carrito')
        }
        if (cambio.indexOf('botonasiento') > -1){
            $(this).removeClass('botonasiento')
            $(this).text('Agregar al carrito')
        }
    })

    //color cuadrados asientos
    $('.asi-traye').click(function(){
        var className = $(this).attr('class');

        if (!className.indexOf("colazero") > -1){
            $(this).addClass('colazero')
        }

        if (className.indexOf("colazero") > -1){
            $(this).removeClass('colazero')
        }
    })

    $('.asi-cap').click(function(){
        var className = $(this).attr('class');

        if (!className.indexOf("colaseg") > -1){
            $(this).addClass('colaseg')
        }

        if (className.indexOf("colaseg") > -1){
            $(this).removeClass('colaseg')
        }
    })

    $('.robot').click(function(){
        var className = $(this).attr('class');

        if (!className.indexOf("colatres") > -1){
            $(this).addClass('colatres')
        }

        if (className.indexOf("colatres") > -1){
            $(this).removeClass('colatres')
        }
    })

    $('.duoc').click(function(){
        var className = $(this).attr('class');

        if (!className.indexOf("colacua") > -1){
            $(this).addClass('colacua')
        }

        if (className.indexOf("colacua") > -1){
            $(this).removeClass('colacua')
        }
    })

    $('.turi').click(function(){
        var className = $(this).attr('class');

        if (!className.indexOf("colaqin") > -1){
            $(this).addClass('colaqin')
        }

        if (className.indexOf("colaqin") > -1){
            $(this).removeClass('colaqin')
        }
    })
});
/* Producto */