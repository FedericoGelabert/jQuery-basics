import { useEffect } from "react";
import $ from 'jquery'

function Effects() {

    useEffect(() => {
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
                $('#effects-box2').animate({ "width": "100%" }, 5000)
                $('#effects-box2').animate({ "width": "170px" }, 5000)
                $('.effects-pw').hide()
                $('#effects-example2').removeClass("displayNone")
                $('#effects-example2 p').html('<b>Animation in process.</b>')
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
    })

    return (
        <section className="content__effects" id="effects">
                <h2>Efectos</h2>
                <hr/>
                <div>
                    <div className="example" style={{"padding": "10px"}}>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>(selector).<span
                                    className="redCalloutText">effect</span>(speed<span className="greyText">, (optional)
                                    callback</span>)</p>
                        </div>
                    </div>
                    <div className="content__effects__display">
                        <div className="content__effects__box">
                            <div id="effects-box"></div>
                        </div>
                        <div id="effects-example" className="displayNone">
                            <div className="example" style={{"paddingTop": "5px"}}>
                                <div className="example__content">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="content__effects__buttons">
                            <button id="btnHide">Hide</button>
                            <button id="btnShow">Show</button>
                            <button id="btnToggle">Toggle</button>
                            <button id="btnFadeIn">fadeIn</button>
                            <button id="btnFadeOut">fadeOut</button>
                            <button id="btnFadeToggle">fadeToggle</button>
                            <button id="btnFadeTo">fadeTo</button>
                            <button id="btnSlideDown">slideDown</button>
                            <button id="btnSlideUp">slideUp</button>
                            <button id="btnSlideToggle">slideToggle</button>
                        </div>
                    </div>
                    <div className="list">
                        <h4>Explicación:</h4>
                        <ul>
                            <li><b>.hide()</b>: desaparece un elemento del DOM.</li>
                            <li><b>.show()</b>: aparece un elemento del DOM.</li>
                            <li><b>.toggle()</b>: desaparece y aparece un elemento del DOM.</li>
                            <li><b>.fadeIn()</b>: aparece un elemento de manera suave.</li>
                            <li><b>.fadeOut()</b>: desaparece un elemento de manera suave.</li>
                            <li><b>.fadeToggle()</b>: efecto que permite hacer fadeIn y fadeOut.</li>
                            <li><b>.fadeTo()</b>: Igual a un fadeIn() pero permite cambiar la opacidad.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">fadeTo</span>(speed, opacity, callback)</p>
                                </div>
                            </div>
                            <li><b>.slideDown</b>: efecto que descomprime el objeto hacía abajo.</li>
                            <li><b>.slideUp</b>: efecto que comprime el objeto hacía arriba.</li>
                            <li><b>.slideToggle</b>: efecto que permite hacer slideUp y slideDown.</li>
                        </ul>
                        <div className="callout">
                            <div className="callout__icon">
                                <span><i className="fa-solid fa-fire-flame-curved"></i></span>
                            </div>
                            <div className="callout__text">
                                <p>A cada método de efecto se le puede agregar como parámetro la velocidad del mismo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>Animation</h3>
                    <div className="list">
                        <ul>
                            <li><b>.animate()</b>: Permite animar un elemento, indicando que atributos se le darán y el
                                tiempo en reproducir la animación.</li>
                        </ul>
                    </div>
                    <div className="example" style={{"padding": "10px"}}>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>(selector).<span
                                    className="redCalloutText">animate</span>(&#123;params&#125;, speed, callback)</p>
                        </div>
                    </div>
                    <div className="example">
                        <h4>Ejemplo:</h4>
                        <div className="example" style={{"padding": "10px"}}>
                            <div className="example__content">
                                <p><span className="redCalloutText">$</span>(selector).<span
                                        className="redCalloutText">on</span>(<span className="greenCalloutText">'click'</span>,
                                    <span className="blueCalloutText">function</span>()&#123;
                                </p>
                                <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">$</span>(selector).<span
                                        className="redCalloutText">animate</span>(&#123;<span> 'margin-left': '100px'</span></p>
                                <p style={{"paddingLeft": "60px"}}>&#125;, 1000,</p>
                                <p style={{"paddingLeft": "30px"}}><span className="blueCalloutText">function</span>() &#123;</p>
                                <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">$</span>(selector).<span
                                        className="redCalloutText">animate</span>(&#123;<span> 'margin-right': '100px'</span></p>
                                <p style={{"paddingLeft": "60px"}}>&#125;, 1000)</p>
                                <p style={{"paddingLeft": "30px"}}>&#125;)</p>
                                <p>&#125;);</p>
                            </div>
                        </div>
                    </div>
                    <div className="callout">
                        <div className="callout__icon">
                            <span><i className="fa-solid fa-fire-flame-curved"></i></span>
                        </div>
                        <div className="callout__text">
                            <p>Si se quiere cambiar de <span className="redText">color</span> se necesita un <a
                                    href="#plugins">PLUGIN</a>.</p>
                        </div>
                    </div>
                    <h3>Detener Animación</h3>
                    <div className="example" style={{"padding": "10px"}}>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>(selector).<span
                                    className="redCalloutText">stop</span>(stopAll, goToEnd)</p>
                        </div>
                    </div>
                    <div className="content__effects__display2">
                        <div className="content__effects__box2">
                            <div id="effects-box2"></div>
                        </div>
                        <p className="effects-pw">Se aplicarán 2 animaciones: 1. <b>width: 100%;</b> 2. volverá a su estado
                            <b>original</b>.
                        </p>
                        <div id="effects-example2" className="displayNone">
                            <div className="example" style={{"paddingTop": "5px"}}>
                                <div className="example__content">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="content__effects__buttons">
                            <button id="btnStopAnimation">Animation</button>
                            <button id="btnStop">Stop</button>
                            <button id="btnStopAll">Stop All</button>
                            <button id="btnGoToEnd">Go To End</button>
                        </div>
                    </div>
                    <div className="list">
                        <h4>Explicación:</h4>
                        <ul>
                            <li><b>stop</b>: Detener la animación actual y continua si hay otra animación.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">stop</span>()</p>
                                </div>
                            </div>
                            <li><b>stopAll</b>: Detener todas las animaciones.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">stop</span>(true, false)</p>
                                </div>
                            </div>
                            <li><b>goToEnd</b>: Ir al final de la animacióna actual y continua si hay otra animación.
                            </li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">stop</span>(false, true)</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Effects;