jQuery(function () {

    $('#btnClick').on('click', function(){
        $('#events-box').css('background-color', 'blue')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Click</b>')
    })

    $('#btndblClick').on('dblclick', function(){
        $('#events-box').css('background-color', 'yellow')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Double click</b>')
    })

    $('#btnMouseEnter').on('mouseenter', function(){
        $('#events-box').css('background-color', 'green')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse enter</b>')
    })

    $('#btnMouseLeave').on('mouseleave', function(){
        $('#events-box').css('background-color', 'grey')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse leave</b>')
    })

    $('#btnMouseOut').on('mouseout', function(){
        $('#events-box').css('background-color', 'pink')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse out</b>')
    })

    $('#btnMouseOver').on('mouseover', function(){
        $('#events-box').css('background-color', 'orange')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse over</b>')
    })

    $('#btnMouseDown').on('mousedown', function(){
        $('#events-box').css('background-color', 'black')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse down</b> <span class="lightGreenCalloutText">-todos los bótones del mouse</span>')
    })

    $('#btnMouseUp').on('mouseup', function(){
        $('#events-box').css('background-color', 'brown')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse up</b> <span class="lightGreenCalloutText">-todos los bótones del mouse</span>')
    })

    $('#inputText').on('keyup', function(){
        $('#events-box2').css('background-color', 'blue')
        $('#events-example2').removeClass('displayNone')
        $('#events-example2 p').html('Evento actual: <b>Key up</b>')
    })

    $('#inputText1').on('keydown', function(){
        $('#events-box2').css('background-color', 'orange')
        $('#events-example2').removeClass('displayNone')
        $('#events-example2 p').html('Evento actual: <b>Key down</b>')
    })

    $('#inputText2').on('keypress', function(){
        $('#events-box2').css('background-color', 'cyan')
        $('#events-example2').removeClass('displayNone')
        $('#events-example2 p').html('Evento actual: <b>Key press</b>')
    })

    $('#btnHide').on('click', function(){
        $('#effects-box').hide()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Hide</b>')
    })

    $('#btnShow').on('click', function(){
        $('#effects-box').show()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Show</b>')
    })

    $('#btnToggle').on('click', function(){
        $('#effects-box').toggle()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Toggle</b>')
    })

    $('#btnFadeIn').on('click', function(){
        $('#effects-box').fadeIn()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade In</b>')
    })

    $('#btnFadeOut').on('click', function(){
        $('#effects-box').fadeOut()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade Out</b>')
    })

    $('#btnFadeToggle').on('click', function(){
        $('#effects-box').fadeToggle()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade Toggle</b>')
    })

    $('#btnFadeTo').on('click', function(){
        $('#effects-box').fadeTo(1000, 0.3)
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade To</b>')
    })

    $('#btnSlideDown').on('click', function(){
        $('#effects-box').slideDown()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Slide Down</b>')
    })

    $('#btnSlideUp').on('click', function(){
        $('#effects-box').slideUp()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Slide Up</b>')
    })

    $('#btnSlideToggle').on('click', function(){
        $('#effects-box').slideToggle()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Slide Toggle</b>')
    })

    $('#btnStopAnimation').on('click', function(){{
        $('#effects-box2').animate({"width": "100%"}, 5000)
        $('#effects-box2').animate({"width": "170px"}, 5000)
        $('.effects-pw').hide()
        $('#effects-example2').removeClass("displayNone")
        $('#effects-example2 p').html('<b>Animation in process.</b>')
    }})

    $('#btnStop').on('click', function(){
        $('#effects-box2').stop()
        $('.effects-pw').hide()
        $('#effects-example2').removeClass("displayNone")
        $('#effects-example2 p').html('Animación detenida con el método <b>stop</b>')
    })

    $('#btnStopAll').on('click', function(){
        $('#effects-box2').stop(true, false)
        $('.effects-pw').hide()
        $('#effects-example2').removeClass("displayNone")
        $('#effects-example2 p').html('Animación detenida con el método <b>stopAll</b>')
    })

    $('#btnGoToEnd').on('click', function(){
        $('#effects-box2').stop(false, true)
        $('.effects-pw').hide()
        $('#effects-example2').removeClass("displayNone")
        $('#effects-example2 p').html('Animación detenida con el método <b>goToEnd</b>')
    })
    

})