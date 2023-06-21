jQuery(function () {


    $('#btnViewDimensions').on('click', function () {
        let boxWidth = $('.dimensions__box').width()
        let boxHeight = $('.dimensions__box').height()
        let boxInnerWidth = $('.dimensions__box').innerWidth()
        let boxInnerHeight = $('.dimensions__box').innerHeight()
        let boxOuterWidth = $('.dimensions__box').outerWidth()
        let boxOuterHeight = $('.dimensions__box').outerHeight()
        let boxOuterWidthTrue = $('.dimensions__box').outerWidth(true)
        let boxOuterHeightTrue = $('.dimensions__box').outerHeight(true)

        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Dimensiones</span>',
            content: `
                Width: ${boxWidth} <br> 
                Height: ${boxHeight} <br> 
                Width + padding: ${boxInnerWidth} <br>
                Height + padding: ${boxInnerHeight} <br>
                Width + padding + border: ${boxOuterWidth} <br>
                Height + padding + border: ${boxOuterHeight} <br>
                Width + padding + border + margin: ${boxOuterWidthTrue} <br>
                Height + padding + border + margin: ${boxOuterHeightTrue} 
            `,
        });
    })

    $('#inputConfirmPassword').focusout(function () {
        if ($('#inputConfirmPassword').val() != $('#inputPassword').val()) {
            $('#confirmPassword').html("<strong style='color: red;'>La constraseña no coincide.</strong>")
        }
        else if ($('#inputConfirmPassword').val() === $('#inputPassword').val()) {
            $('#confirmPassword').html("<strong style='color: green;'>La constraseña coincide.</strong>")
        }
    })


    $('#btnClick').on('click', function () {
        $('#events-box').css('background-color', 'blue')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Click</b>')
    })

    $('#btndblClick').on('dblclick', function () {
        $('#events-box').css('background-color', 'yellow')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Double click</b>')
    })

    $('#btnMouseEnter').on('mouseenter', function () {
        $('#events-box').css('background-color', 'green')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse enter</b>')
    })

    $('#btnMouseLeave').on('mouseleave', function () {
        $('#events-box').css('background-color', 'grey')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse leave</b>')
    })

    $('#btnMouseOut').on('mouseout', function () {
        $('#events-box').css('background-color', 'pink')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse out</b>')
    })

    $('#btnMouseOver').on('mouseover', function () {
        $('#events-box').css('background-color', 'orange')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse over</b>')
    })

    $('#btnMouseDown').on('mousedown', function () {
        $('#events-box').css('background-color', 'black')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse down</b> <span class="lightGreenCalloutText">-todos los bótones del mouse</span>')
    })

    $('#btnMouseUp').on('mouseup', function () {
        $('#events-box').css('background-color', 'brown')
        $('#events-example').removeClass('displayNone')
        $('#events-example p').html('Evento seleccionado: <b>Mouse up</b> <span class="lightGreenCalloutText">-todos los bótones del mouse</span>')
    })

    $('#inputText').on('keyup', function () {
        $('#events-box2').css('background-color', 'blue')
        $('#events-example2').removeClass('displayNone')
        $('#events-example2 p').html('Evento actual: <b>Key up</b>')
    })

    $('#inputText1').on('keydown', function () {
        $('#events-box2').css('background-color', 'orange')
        $('#events-example2').removeClass('displayNone')
        $('#events-example2 p').html('Evento actual: <b>Key down</b>')
    })

    $('#inputText2').on('keypress', function () {
        $('#events-box2').css('background-color', 'cyan')
        $('#events-example2').removeClass('displayNone')
        $('#events-example2 p').html('Evento actual: <b>Key press</b>')
    })

    $('#btnHide').on('click', function () {
        $('#effects-box').hide()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Hide</b>')
    })

    $('#btnShow').on('click', function () {
        $('#effects-box').show()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Show</b>')
    })

    $('#btnToggle').on('click', function () {
        $('#effects-box').toggle()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Toggle</b>')
    })

    $('#btnFadeIn').on('click', function () {
        $('#effects-box').fadeIn()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade In</b>')
    })

    $('#btnFadeOut').on('click', function () {
        $('#effects-box').fadeOut()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade Out</b>')
    })

    $('#btnFadeToggle').on('click', function () {
        $('#effects-box').fadeToggle()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade Toggle</b>')
    })

    $('#btnFadeTo').on('click', function () {
        $('#effects-box').fadeTo(1000, 0.3)
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Fade To</b>')
    })

    $('#btnSlideDown').on('click', function () {
        $('#effects-box').slideDown()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Slide Down</b>')
    })

    $('#btnSlideUp').on('click', function () {
        $('#effects-box').slideUp()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Slide Up</b>')
    })

    $('#btnSlideToggle').on('click', function () {
        $('#effects-box').slideToggle()
        $('#effects-example').removeClass('displayNone')
        $('#effects-example p').html('Efecto seleccionado: <b>Slide Toggle</b>')
    })

    $('#btnStopAnimation').on('click', function () {
        {
            $('#effects-box2').animate({ "width": "100%" }, 5000)
            $('#effects-box2').animate({ "width": "170px" }, 5000)
            $('.effects-pw').hide()
            $('#effects-example2').removeClass("displayNone")
            $('#effects-example2 p').html('<b>Animation in process.</b>')
        }
    })

    $('#btnStop').on('click', function () {
        $('#effects-box2').stop()
        $('.effects-pw').hide()
        $('#effects-example2').removeClass("displayNone")
        $('#effects-example2 p').html('Animación detenida con el método <b>stop</b>')
    })

    $('#btnStopAll').on('click', function () {
        $('#effects-box2').stop(true, false)
        $('.effects-pw').hide()
        $('#effects-example2').removeClass("displayNone")
        $('#effects-example2 p').html('Animación detenida con el método <b>stopAll</b>')
    })

    $('#btnGoToEnd').on('click', function () {
        $('#effects-box2').stop(false, true)
        $('.effects-pw').hide()
        $('#effects-example2').removeClass("displayNone")
        $('#effects-example2 p').html('Animación detenida con el método <b>goToEnd</b>')
    })

    $('#btnHTMLFirstExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código HTML:</span>',
            content: `
            <pre>
            <code class="code">
                &lt;div class="container"&gt;
                    &lt;div class="img-container"&gt;
                        &lt;img src="url" alt="" id="flechaArriba"&gt;
                        &lt;img src="url" alt="" id="flechaAbajo"&gt;
                    &lt;/div&gt;
                    &lt;div class="div-display"&gt;
                        &lt;div&gt;
                            &lt;p&gt;Has dado clic en la flecha.&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            </code>
            </pre>`,
        });
    })

    $('#btnSCSSFirstExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código SCSS:</span>',
            content: `
            <pre>
            <code class="code">
            .container{
                display: flex;
                align-items: center;
                flex-direction: column;
        
                .div-display {
                    width: 90%;
                    font-size: 20px;
                    height: 150px;
                    text-align: center;
                    
                    div {
                        display: none;
                        background-color: rgba(128, 128, 128, 0.214);
                        height: 100%;
                
                        p {
                            padding-top: 75px;
                            font-size: 1.1rem;
                        }
                    }
                }
                
                .img-container {
                    padding: 20px;
                
                    #flechaAbajo {
                        width: 80px;
                    }
                
                    #flechaArriba {
                        width: 80px;
                        display: none;
                    }
                }
            }
            </code>
            </pre>`,
        });
    })

    $('#btnJSFirstExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código JS:</span>',
            content: `
            <pre>
            <code class="code">
            $('#flechaAbajo').on('click', function () {
                $(this).hide()
                $('#flechaArriba').show()
                $('.div-display div').show()
            })
        
            $('#flechaArriba').on('click', function () {
                if ($(this).is(':visible')) {
                    $(this).hide()
                    $('#flechaAbajo').show()
                    $('.div-display div').hide()
                }
            })
            </code>
            </pre>`,
        });
    })

    $('#btnHTMLSecondExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código HTML:</span>',
            content: `
            <pre>
            <code class="code">
                &lt;div id="form"&gt;
                    &lt;form&gt;
                        &lt;h2&gt;Registrate&lt;/h2&gt;
                        &lt;p&gt;Name: &lt;input type="text" placeholder="Name" id="inputName"&gt;&lt;/p&gt;
                        &lt;p&gt;Email: &lt;input type="email" placeholder="Email" id="inputEmail"&gt;&lt;/p&gt;
                        &lt;p&gt;Password: &lt;input type="password" placeholder="Password" id="inputPassword"&gt;&lt;span id="max"&gt;(Máximo 8
                            caracteres)&lt;/span&gt;&lt;/p&gt;
                        &lt;p&gt;Confirm password: &lt;input type="password" placeholder="Confirm password" id="inputConfirmPassword"&gt;&lt;span
                            id="confirmPassword"&gt;&lt;/span&gt;&lt;/p&gt;
                        &lt;p&gt;&lt;input type="submit" placeholder="Name" value="Submit" id="inputSubmit"&gt;&lt;/p&gt;
                    &lt;/form&gt;
                &lt;/div&gt;
            </code>
            </pre>`,
        });
    })

    $('#btnJSSecondExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código JS:</span>',
            content: `
            <pre>
            <code class="code">
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
        
            $('#inputConfirmPassword').focusout(function () {
                if ($('#inputConfirmPassword').val() != $('#inputPassword').val()) {
                    $('#confirmPassword').html("<strong style='color: red;'>La constraseña no coincide.</strong>")
                }
                else if ($('#inputConfirmPassword').val() === $('#inputPassword').val()) {
                    $('#confirmPassword').html("<strong style='color: green;'>La constraseña coincide.</strong>")
                }
            })
        
            </code>
            </pre>`,
        });
    })

    $('#btnHTMLThirdExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código HTML:</span>',
            content: `
            <pre>
            <code class="code">
                &lt;div class="container"&gt;
                    &lt;div class="container-caja"&gt;
                        &lt;div&gt;&lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class="botones"&gt;
                        &lt;button id="btn"&gt;Botón&lt;/button&gt;
                        &lt;button id="btnOn"&gt;On&lt;/button&gt;
                        &lt;button id="btnOff"&gt;Off&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            </code>
            </pre>`,
        });
    })

    $('#btnSCSSThirdExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código SCSS:</span>',
            content: `
            <pre>
            <code class="code">
            .container {
                .container-caja {
                    margin-top: 10px;
                    width: 100%;
                    height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(128, 128, 128, 0.214);
            
                    div {
                        width: 170px;
                        height: 60%;
                        background-color: red;
                    }
                }
            }

            .selected-button {
                border: green solid 3px;
                background-color: greenyellow;
              }
            
            .unselected-button {
                border: red solid 3px;
                background-color: #f17777;
              }
            </code>
            </pre>`,
        });
    })

    $('#btnJSThirdExercise').on('click', function () {
        $.alert({
            title: '<span class="redText" style="text-decoration:underline;">Código JS:</span>',
            content: `
            <pre>
            <code class="code">
            function slideToggleFn() {
                $('.container-caja div').slideToggle()
            }
            
            $("#btnOn").on('click', function(){
                $("#btn").on("click").addClass("selected-button").removeClass("unselected-button").text("Botón activado")
                $("#btn").on('click', slideToggleFn)
            })
            
            $("#btnOff").on('click', function () {
                $("#btn").off("click").removeClass("selected-button").addClass("unselected-button").text("Botón desactivado")
            })
            </code>
            </pre>`,
        });
    })
  

})