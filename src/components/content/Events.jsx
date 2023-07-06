import { useEffect } from "react";
import $ from "jquery"


function Events() {

    useEffect(() => {
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
    })

    return (
        <section className="content__events" id="events">
            <h2>Eventos</h2>
            <hr />
            <div className="content__events__text">
                <div className="example" style={{"padding": "10px"}}>
                    <div className="example__content">
                        <p className="redText">$(selector).on('event', callback)</p>
                    </div>
                </div>
                <h3>Eventos del mouse</h3>
                <div className="content__events__display">
                    <div className="content__events__box">
                        <div id="events-box"></div>
                        <p>A todos los botones se le aplicará el método .css con diferentes valores.</p>
                    </div>
                    <div id="events-example" className="displayNone">
                        <div className="example" style={{"paddingTop": "5px"}}>
                            <div className="example__content">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="content__events__buttons">
                        <button id="btnClick">Click</button>
                        <button id="btndblClick">Double Click</button>
                        <button id="btnMouseEnter">Mouse enter</button>
                        <button id="btnMouseLeave">Mouse leave</button>
                        <button id="btnMouseOut">Mouse out</button>
                        <button id="btnMouseOver">Mouse over</button>
                        <button id="btnMouseDown">Mouse down</button>
                        <button id="btnMouseUp">Mouse up</button>
                    </div>
                </div>
                <h3>Eventos del teclado</h3>
                <div className="content__events__display2">
                    <div className="content__events__box">
                        <div id="events-box2"></div>
                        <p>A todos los inputs se le aplicará el método .css con diferentes valores.</p>
                    </div>
                    <div className="content__events__box2">
                        <input type="text" placeholder="Key up" id="inputText"></input>
                        <input type="text" placeholder="Key down" id="inputText1"></input>
                        <input type="text" placeholder="Key press" id="inputText2"></input>
                    </div>
                    <div id="events-example2" className="displayNone">
                        <div className="example" style={{"paddingTop": "5px"}}>
                            <div className="example__content">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list">
                <h3>Eventos de Formulario</h3>
                <ul>
                    <li>submit <span className="lightGreenCalloutText">-solo con el elemento form</span></li>
                    <li>change <span className="lightGreenCalloutText">-solo puede utilizarse con los elementos: input,
                        textarea y select</span></li>
                    <li>focus</li>
                    <div className="example" style={{"padding": "10px"}}>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>(selector).<span
                                className="redCalloutText">focus</span>(<span
                                    className="blueCalloutText">function</span>()&#123;
                            </p>
                            <p style={{"paddingLeft": "30px"}} className="greyText">function</p>
                            <p>&#125;);</p> <br />
                            <p className="greyText">Al hacer click.</p>
                            <p className="greyText">Al seleccionar con TAB.</p>
                        </div>
                    </div>
                    <li>blur</li>
                    <div className="example" style={{"padding": "10px"}}>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>(selector).<span
                                className="redCalloutText">blur</span>(<span
                                    className="blueCalloutText">function</span>()&#123;
                            </p>
                            <p style={{"paddingLeft": "30px"}} className="greyText">function</p>
                            <p>&#125;);</p> <br />
                            <p className="greyText">Al deseleccionar el elemento con TAB.</p>
                            <p className="greyText">Cuando pierda el foco.</p>
                        </div>
                    </div>

                </ul>
            </div>
            <div className="list">
                <h4>Eventos del documento</h4>
                <ul>
                    <li>load</li>
                    <li>unload</li>
                    <li>resize</li>
                    <li>scroll</li>
                </ul>
            </div>
            <h3>Hover</h3>
            <div className="example">
                <div className="example__content">
                    <p><span className="redCalloutText">$</span>(selector).<span
                        className="redCalloutText">hover</span>(<span className="blueCalloutText">function</span>() &#123;
                    </p>
                    <p style={{"paddingLeft": "30px"}} className="greyText">function in</p>
                    <p>&#125;, <span className="blueCalloutText">function</span>() &#123;</p>
                    <p style={{"paddingLeft": "30px"}} className="greyText">function out</p>
                    <p>&#125;);</p>
                </div>
            </div>
            <h3>On</h3>
            <p>Agregar uno o varios eventos dentro del mismo evento.</p>
            <div className="example">
                <div className="example__content">
                    <p className="greyText"><b>Un solo evento</b></p>
                    <p><span className="redCalloutText">$</span>(selector).<span className="redCalloutText">on</span>(<span
                        className="greenCalloutText">'evento'</span>, <span
                            className="blueCalloutText">function</span>()&#123;
                    </p>
                    <p style={{"paddingLeft": "30px"}} className="greyText">function</p>
                    <p>&#125;);</p> <br />
                    <p className="greyText"><b>Múltiples eventos</b></p>
                    <p><span className="redCalloutText">$</span>(selector).<span className="redCalloutText">on</span>(&#123;</p>
                    <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">evento</span>:<span
                        className="blueCalloutText"> function</span> () &#123;</p>
                    <p style={{"paddingLeft": "60px"}} className="greyText">function</p>
                    <p style={{"paddingLeft": "30px"}}>&#125;,</p>
                    <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">evento</span>:<span
                        className="blueCalloutText"> function</span> () &#123;</p>
                    <p style={{"paddingLeft": "60px"}} className="greyText">function</p>
                    <p style={{"paddingLeft": "30px"}}>&#125;,</p>
                    <p> &#125;);</p>
                </div>
            </div>
        </section>
    )
}

export default Events;