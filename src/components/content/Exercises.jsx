import { useEffect } from "react";
import Swal from 'sweetalert2';
import $ from 'jquery';

function Exercises() {

    useEffect(() => {

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

        $('form input').on('focusin', function () {
            $(this).addClass("selected-input")
        })

        $('form input').on('focusout',function () {
            $(this).removeClass("selected-input")
        })

        $('#inputPassword').on('focusout',function () {
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

        $('#inputConfirmPassword').on('focusout',function () {
            if ($('#inputConfirmPassword').val() !== $('#inputPassword').val()) {
                $('#confirmPassword').html("<strong style='color: red;'>La constraseña no coincide.</strong>")
            }
            else if ($('#inputConfirmPassword').val() === $('#inputPassword').val()) {
                $('#confirmPassword').html("<strong style='color: green;'>La constraseña coincide.</strong>")
            }
        })

        /* On Off */

        function slideToggleFn() {
            $('#onOffCaja div').slideToggle()
        }

        $("#btnOn").on('click', function () {
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

        $('.hover-div').on('mouseenter', function () {
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


        /* Sweet Alert exercises code */


        $('#btnHTMLFirstExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código HTML:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
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
                </pre>`
              })
        })
    
        $('#btnSCSSFirstExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código SCSS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
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
                </pre>`
              })
        })
    
        $('#btnJSFirstExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código JS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
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
                </pre>`
              })
        })
    
        $('#btnHTMLSecondExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código HTML:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                    &lt;div id="form"&gt;
                        &lt;form&gt;
                            &lt;h2&gt;Registrate&lt;/h2&gt;
                            &lt;p&gt;Name: &lt;input type="text" placeholder="Name" id="inputName"&gt;&lt;/p&gt;
                            &lt;p&gt;Email: &lt;input type="email" placeholder="Email" id="inputEmail"&gt;&lt;/p&gt;
                            &lt;p&gt;Password: &lt;input type="password" placeholder="Password" id="inputPassword"&gt;
                            &lt;span id="max"&gt;(Máximo 8 caracteres)&lt;/span&gt;&lt;/p&gt;
                            &lt;p&gt;Confirm password: &lt;input type="password" placeholder="Confirm password" id="inputConfirmPassword"&gt;
                            &lt;span id="confirmPassword"&gt;&lt;/span&gt;&lt;/p&gt;
                            &lt;p&gt;&lt;input type="submit" placeholder="Name" value="Submit" id="inputSubmit"&gt;&lt;/p&gt;
                        &lt;/form&gt;
                    &lt;/div&gt;
                </code>
                </pre>`
              })
        })
    
        $('#btnJSSecondExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código JS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
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
                        $('#max').html(
                            "<strong style='color: red;'>Contraseña muy corta.</strong>"
                            )
                    }
            
                    else if ($(this).val().length > 3 && $(this).val().length <= 8) {
                        $('#max').html(
                            "<strong style='color: green;'>Contraseña válida.</strong>"
                            )
                    }
                    else if ($(this).val().length > 8) {
                        $('#max').html(
                            "<strong style='color: red;'>Contraseña muy larga.</strong>"
                            )
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
                </pre>`
              })
        })
    
        $('#btnHTMLThirdExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código HTML:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
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
                </pre>`
              })
        })
    
        $('#btnSCSSThirdExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código SCSS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
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
                </pre>`
              })
        })
    
        $('#btnJSThirdExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código JS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                function slideToggleFn() {
                    $('.container-caja div').slideToggle()
                }
                
                $("#btnOn").on('click', function(){
                    $("#btn").on("click").addClass("selected-button")
                    .removeClass("unselected-button")
                    .text("Botón activado")
                    $("#btn").on('click', slideToggleFn)
                })
                
                $("#btnOff").on('click', function () {
                    $("#btn").off("click").removeClass("selected-button")
                    .addClass("unselected-button")
                    .text("Botón desactivado")
                })
                </code>
                </pre>`
              })
        })
    
        $('#btnHTMLFourthExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código HTML:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                    &lt;div class="container"&gt;
                        &lt;div class="hover-container"&gt;
                            &lt;div class="hover-div"&gt;1&lt;/div&gt;
                            &lt;div class="hover-div"&gt;2&lt;/div&gt;
                            &lt;div class="hover-div"&gt;3&lt;/div&gt;
                            &lt;div class="hover-div"&gt;4&lt;/div&gt;
                            &lt;div class="hover-div"&gt;5&lt;/div&gt;
                        &lt;/div&gt;
                        &lt;div&gt;
                            &lt;p class="hover-results"&gt;Resultado: 
                            &lt;strong&gt;Pending&lt;/strong&gt;&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                </code>
                </pre>`
              })
        })
    
        $('#btnSCSSFourthExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código SCSS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                .hover-container {
                    display: flex;
        
                    .hover-div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        height: 50px;
                        background-color: black;
                        margin: 10px;
                    }
                }
        
                .hover-results {
                    padding-top: 30px;
                }
                </code>
                </pre>`
              })
        })
    
        $('#btnJSFourthExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código JS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                let parent = $('.hover-container')
                let divs = parent.children()
                parent.append(divs.splice(
                    Math.floor(Math.random() * divs.length), 1)[0])
        
                $('.hover-div').hover(function () {
                    if ($(this).text() === "3") {
                        $('.hover-results strong')
                        .text("¡Has Ganado!")
                    }
                    $(this).css('color', 'white')
                })
                </code>
                </pre>`
              })
        })
    
        $('#btnHTMLFifthExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código HTML:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                    &lt;div class="container"&gt;
                        &lt;div class="main-images"&gt;
                            &lt;img src="url" alt=""&gt;
                            &lt;img src="url" alt=""&gt;
                            &lt;img src="url" alt=""&gt;
                        &lt;/div&gt;
                        &lt;div class="other-images"&gt;
                            &lt;img src="url" alt=""&gt;
                            &lt;img src="url" alt=""&gt;
                            &lt;img src="url" alt=""&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                </code>
                </pre>`
              })
        })
    
        $('#btnSCSSFifthExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código SCSS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                .main-images img {
                    width: 350px;
                    height: 95%;
                    object-fit: cover;
                }
                
                .other-images img {
                    margin-top: 15px;
                    width: 80px;
                    height: 80%;
                    display: inline-block;
                }
        
                .selected-img {
                    border: 3px solid red;
                  }
                </code>
                </pre>`
              })
        })
    
        $('#btnJSFifthExercise').on('click', function () {
            Swal.fire({
                title: '<span class="redText">Código JS:</span>',
                html: `
                <pre>
                <code class="code codeBlack">
                let allImages = $('.other-images img')
                allImages.eq(0).addClass('selected-img')
                $('.main-images img:eq(0)').nextAll().hide()
                
                allImages.on('click', function () {
                    let indice = $(this).index()
                    allImages.removeClass('selected-img')
                    $(this).addClass('selected-img')
                
                    $('.main-images img').eq(indice)
                    .show().siblings().hide()
                })
                </code>
                </pre>`
              })
        })

    })

    return (
        <section className="content__exercises" id="exercises">
            <h2>Ejercicios</h2>
            <hr />
            <div className="content__exercises__info">
                <div className="content__exercises__first">
                    <h3>Div Desplegable - Toca la flecha</h3>
                    <p>Pon en práctica lo aprendido y trata de realizar este ejercicio sin observar el código. Si no
                        puedes realizarlo con éxito, no te preocupes. Siempre que quieras puedes ver el código.</p>
                    <div className="content__exercises__arrow">
                        <div className="arrowDownUp">
                            <img className="arrowDown"
                                src="https://res.cloudinary.com/federicog/image/upload/v1687290987/jquery-basics/downArrow_q5xrar.png"
                                alt="Down Arrow"></img>
                            <img className="arrowUp"
                                src="https://res.cloudinary.com/federicog/image/upload/v1687290987/jquery-basics/upArrow_uhpjkp.png"
                                alt="Up Arrow"></img>
                        </div>
                        <div className="arrowContainer">
                            <div>
                                <p>Has dado clic en la flecha.</p>
                            </div>
                        </div>
                    </div>
                    <div className="content__exercises__used">
                        <p>Los métodos/selectores utilizados son: :visible, .is(), hide() y show().</p>
                    </div>
                    <div className="content__exercises__buttons">
                        <button id="btnHTMLFirstExercise">Ver HTML</button>
                        <button id="btnSCSSFirstExercise">Ver SCSS</button>
                        <button id="btnJSFirstExercise">Ver JS</button>
                    </div>
                </div>
                <br /><br />
                <div className="content__exercises__second">
                    <h3>Formulario</h3>
                    <p>Pon en práctica lo aprendido y trata de realizar este ejercicio sin observar el código. Si no
                        puedes realizarlo con éxito, no te preocupes. Siempre que quieras puedes ver el código.</p>
                    <div id="form">
                        <form>
                            <p>Name: <input type="text" placeholder="Name" id="inputName"></input></p>
                            <p>Email: <input type="email" placeholder="Email" id="inputEmail"></input></p>
                            <p>Password: <input type="password" placeholder="Password" id="inputPassword"></input><span
                                id="max">(Máximo 8
                                caracteres)</span></p>
                            <p>Confirm password: <input type="password" placeholder="Confirm password"
                                id="inputConfirmPassword"></input><span id="confirmPassword"></span></p>
                            <p><input type="submit" placeholder="Name" value="Submit" id="inputSubmit"></input></p>
                        </form>
                    </div>
                    <div className="content__exercises__used">
                        <p>Los métodos/selectores utilizados son: this, .addclassName(), .removeclassName(), .val(),
                            .lenght,
                            .html().</p>
                    </div>
                    <div className="content__exercises__buttons">
                        <button id="btnHTMLSecondExercise">Ver HTML</button>
                        <button id="btnJSSecondExercise">Ver JS</button>
                    </div>
                </div>
                <br /><br />
                <div className="content__exercises__third">
                    <h3>On & Off button</h3>
                    <p>Pon en práctica lo aprendido y trata de realizar este ejercicio sin observar el código. Si no
                        puedes realizarlo con éxito, no te preocupes. Siempre que quieras puedes ver el código.</p>
                    <div className="content__exercises__onOff">
                        <div className="onOff-container">
                            <div id="onOffCaja">
                                <div></div>
                            </div>
                            <div className="content__effects__buttons">
                                <button id="btnOnOff">Botón</button>
                                <button id="btnOn">On</button>
                                <button id="btnOff">Off</button>
                            </div>
                        </div>
                    </div>
                    <div className="content__exercises__used" style={{ "marginTop": 0 }}>
                        <p>Los métodos/selectores utilizados son: slideToggle(), .on(), .off(), .addclassName(),
                            .removeclassName(), .text().</p>
                    </div>
                    <div className="content__exercises__buttons">
                        <button id="btnHTMLThirdExercise">Ver HTML</button>
                        <button id="btnSCSSThirdExercise">Ver SCSS</button>
                        <button id="btnJSThirdExercise">Ver JS</button>
                    </div>
                </div>
                <br /><br />
                <div className="content__exercises__fourth">
                    <h3>Encuentra el div con el número 3</h3>
                    <p>Pon en práctica lo aprendido y trata de realizar este ejercicio sin observar el código. Si no
                        puedes realizarlo con éxito, no te preocupes. Siempre que quieras puedes ver el código.</p>
                    <div className="content__exercises__hover-game">
                        <div className="hover-container">
                            <div className="hover-div">1</div>
                            <div className="hover-div">2</div>
                            <div className="hover-div">3</div>
                            <div className="hover-div">4</div>
                            <div className="hover-div">5</div>
                        </div>
                        <div>
                            <p className="hover-results">Resultado: <strong>Pending</strong></p>
                        </div>
                    </div>
                    <div className="content__exercises__used" style={{ "marginTop": "10px" }}>
                        <p>Los métodos/selectores utilizados son: .children(), .append(), .splice(),
                            Math.floor/Math.random, .length, .hover(), this, .text(), .css().</p>
                    </div>
                    <div className="content__exercises__buttons">
                        <button id="btnHTMLFourthExercise">Ver HTML</button>
                        <button id="btnSCSSFourthExercise">Ver SCSS</button>
                        <button id="btnJSFourthExercise">Ver JS</button>
                    </div>
                </div>
                <br /><br />
                <div className="content__exercises__fifth">
                    <h3>Visualización de imágenes</h3>
                    <p>Pon en práctica lo aprendido y trata de realizar este ejercicio sin observar el código. Si no
                        puedes realizarlo con éxito, no te preocupes. Siempre que quieras puedes ver el código.</p>
                    <div className="content__exercises__images">
                        <div className="main-images">
                            <img src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape3_atsldu.jpg"
                                alt="Landscape 1"></img>
                            <img src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape1_yw5ija.jpg"
                                alt="Landscape 2"></img>
                            <img src="https://res.cloudinary.com/federicog/image/upload/v1687372901/jquery-basics/landscape2_vtsvpp.jpg"
                                alt="Landscape 3"></img>
                        </div>
                        <div className="other-images">
                            <img src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape3_atsldu.jpg"
                                alt="Landscape 1"></img>
                            <img src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape1_yw5ija.jpg"
                                alt="Landscape 2"></img>
                            <img src="https://res.cloudinary.com/federicog/image/upload/v1687372901/jquery-basics/landscape2_vtsvpp.jpg"
                                alt="Landscape 3"></img>
                        </div>
                    </div>
                    <div className="content__exercises__used" style={{ "marginTop": "10px" }}>
                        <p>Los métodos/selectores utilizados son: eq, this, .addclassName(), .nextAll(), .hide(),
                            .on('click'), .index(), .removeclassName(), .show(), .siblings().</p>
                    </div>
                    <div className="content__exercises__buttons">
                        <button id="btnHTMLFifthExercise">Ver HTML</button>
                        <button id="btnSCSSFifthExercise">Ver SCSS</button>
                        <button id="btnJSFifthExercise">Ver JS</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exercises;