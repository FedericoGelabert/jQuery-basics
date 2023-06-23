/* Div Desplegable */

$('.arrowDown').on('click', function () {
    $(this).hide()
    $('.arrowUp').show()
    $('.arrowContainer div').show()
})

$('.arrowUp').on('click', function () {
    if ($(this).is(':visible')) {
        $(this).hide()
        $('.arrowContainer div').hide()
        $('.arrowDown').show()
    }
})

/* Form */ 

$('form').on('submit', function (e) {
    e.preventDefault()
})

$('form input').focusin(function () {
    $(this).addClass("selected-input")
})

$('form input').focusout(function () {
    $(this).removeClass("selected-input")
})

$('#inputPassword').focusout(function () {
    if ($(this).val().length > 0 && $(this).val().length <= 3) {
        $('#max').html("<strong style='color: red;'>Contraseña muy corta.</strong>")
    }

    else if ($(this).val().length > 3 && $(this).val().length <= 8) {
        $('#max').html("<strong style='color: green;'>Contraseña válida.</strong>")
    }
    else if ($(this).val().length > 8) {
        $('#max').html("<strong style='color: red;'>Contraseña muy larga.</strong>")
    }
})

/* On Off */

function slideToggleFn() {
    $('#onOffCaja div').slideToggle()
}

$("#btnOn").on('click', function(){
    $("#btnOnOff").on("click").addClass("selected-button").removeClass("unselected-button").text("Botón activado")
    $("#btnOnOff").on('click', slideToggleFn)
})

$("#btnOff").on('click', function () {
    $("#btnOnOff").off("click").removeClass("selected-button").addClass("unselected-button").text("Botón desactivado")
})

/* Encuentra el número 3 */

let parent = $('.hover-container')
let divs = parent.children()
parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0])

$('.hover-div').hover(function () {
    if ($(this).text() === "3") {
        $('.hover-results strong').text("¡Has Ganado!")
    }
    $(this).css('color', 'white')
})


/* Visualización de imágenes */

let allImages = $('.other-images img')
allImages.eq(0).addClass('selected-img')
$('.main-images img:eq(0)').nextAll().hide()

allImages.on('click', function () {
    let indice = $(this).index()
    allImages.removeClass('selected-img')
    $(this).addClass('selected-img')

    $('.main-images img').eq(indice).show().siblings().hide()
})