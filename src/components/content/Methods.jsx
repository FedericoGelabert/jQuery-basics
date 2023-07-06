import { useEffect } from "react";
import Swal from 'sweetalert2';
import $ from 'jquery';


function Methods() {

    useEffect(() => {
        $('#btnViewDimensions').on('click', function () {
            let boxWidth = $('.dimensions__box').width()
            let boxHeight = $('.dimensions__box').height()
            let boxInnerWidth = $('.dimensions__box').innerWidth()
            let boxInnerHeight = $('.dimensions__box').innerHeight()
            let boxOuterWidth = $('.dimensions__box').outerWidth()
            let boxOuterHeight = $('.dimensions__box').outerHeight()
            let boxOuterWidthTrue = $('.dimensions__box').outerWidth(true)
            let boxOuterHeightTrue = $('.dimensions__box').outerHeight(true)
    
            Swal.fire({
                title: '<span class="redText" style="text-decoration:underline;">Dimensiones</span>',
                html: `
                <div class="codeBlack">
                Width: ${boxWidth}. <br> 
                Height: ${boxHeight}. <br> 
                Width + padding: ${boxInnerWidth}. <br>
                Height + padding: ${boxInnerHeight}. <br>
                Width + padding + border: ${boxOuterWidth}. <br>
                Height + padding + border: ${boxOuterHeight}. <br>
                Width + padding + border + margin: ${boxOuterWidthTrue}. <br>
                Height + padding + border + margin: ${boxOuterHeightTrue}.
                </div>
            `
              })
        })
    })


    return (
        <section className="content__methods" id="methods">
                <h2>Métodos</h2>
                <hr/>
                <div>
                    <div className="list">
                        <ul>
                            <li><b>.addClass</b>: agregar una clase a un elemento del DOM.</li>
                            <li><b>.removeClass</b>: remover una clase de un elemento del DOM.</li>
                            <li><b>.toggleClass</b>: agregar o remover una clase de un elemento del DOM.</li>
                            <li><b>.text()</b>: obtener el texto sin HTML (<b>GET</b>). Cambiar el texto (<b>SET</b>).
                            </li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p className="greyText">GET</p>
                                    <p><span className="redCalloutText">alert</span>( <span
                                            className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#p'</span>).<span
                                            className="redCalloutText">text</span>()
                                        )</p>
                                    <p className="greyText">Esto es un texto con negritas en un párrafo.</p> <br/>
                                    <p className="greyText">SET</p>
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#p'</span>).<span
                                            className="redCalloutText">text</span>(<span className="greenCalloutText">'Un texto
                                            aleatorio.'</span>)</p>
                                </div>
                            </div>
                            <li><b>.html()</b>: obtener el texto HTML (<b>GET</b>). Cambiar el texto con etiquetas HTML
                                (<b>SET</b>).</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p className="greyText">GET</p>
                                    <p><span className="redCalloutText">alert</span>( <span
                                            className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#p'</span>).<span
                                            className="redCalloutText">html</span>()
                                        )</p>
                                    <p className="greyText">Esto es un texto con &lt;b&gt;negritas&lt;/b&gt; en un
                                        párrafo.
                                    </p> <br/>
                                    <p className="greyText">SET</p>
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#p'</span>).<span
                                            className="redCalloutText">html</span>(<span
                                            className="greenCalloutText">'&lt;b&gt;Un
                                            texto aleatorio.&lt;/b&gt;'</span>)</p>
                                </div>
                            </div>
                            <li><b>.val()</b>: obtener el valor de un elemento manipulable (<b>GET</b>). Establecer un
                                valor
                                (<b>SET</b>).</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p className="greyText">GET</p>
                                    <p><span className="redCalloutText">alert</span>( <span
                                            className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#p'</span>).<span
                                            className="redCalloutText">val</span>()
                                        )</p> <br/>
                                    <p className="greyText">SET</p>
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#input'</span>).<span
                                            className="redCalloutText">val</span>(<span
                                            className="greenCalloutText">'Nombre'</span>)</p>
                                </div>
                            </div>
                            <li><b>.append()</b>: agregar elementos al final de una etiqueta.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#container'</span>).<span
                                            className="redCalloutText">append</span>( <span
                                            className="greenCalloutText">'&lt;p&gt;Hola, soy el último.&lt;/p&gt;'</span>)
                                    </p>
                                </div>
                            </div>
                            <li><b>.prepend()</b>: agregar elementos al principio de una etiqueta.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'#container'</span>).<span
                                            className="redCalloutText">prepend</span>( <span
                                            className="greenCalloutText">'&lt;p&gt;Hola, soy el primero.&lt;/p&gt;'</span>)
                                    </p>
                                </div>
                            </div>
                            <li><b>.after()</b>: agregar elementos ("por fuera") después de un elemento.</li>
                            <li><b>.before()</b>: agregar elementos ("por dentro") después de un elemento.</li>
                            <li><b>.css()</b>: obtener valores / agregar atributos a etiquetas del DOM.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">on</span>(<span
                                            className="greenCalloutText">'click'</span>,
                                        <span className="blueCalloutText">function</span>()&#123;
                                    </p>
                                    <p style={{"paddingLeft": "30px"}}><span className="blueCalloutText">let </span>prop =
                                        <span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">css</span>(<span className="greenCalloutText">
                                             'background-color' </span>)
                                    </p>
                                    <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">alert</span>(prop) <span
                                            className="greyText">rgb(255, 0, 0)</span></p>
                                    <p>&#125;)</p> <br/>
                                    <p className="greyText">Dar atributos</p>
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">css</span>(<span className="greenCalloutText">
                                            'background-color', 'red'</span>)</p> <br/>
                                    <p className="greyText">Dar múltiples atributos</p>
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">css</span>(&#123;<span className="greenCalloutText">
                                            'background-color': 'red'</span>, <span className="greenCalloutText">'color':
                                            'white'</span>&#125;)</p>
                                    <p></p>
                                </div>
                            </div>
                            <li><b>.remove()</b>: elimina del DOM cualquier etiqueta seleccionada.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'button'</span>).<span
                                            className="redCalloutText">remove</span>();</p>
                                </div>
                            </div>
                            <li><b>.empty()</b>: vacía los elementos (<b>no se eliminan</b>) del DOM.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'button'</span>).<span
                                            className="redCalloutText">empty</span>();</p>
                                </div>
                            </div>
                            <li><b>.attr</b>: ver el valor de un atributo definido o cambiar el atributo de una etiqueta
                                del
                                DOM.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p className="greyText">Ver el valor del atributo ya definido</p>
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'img'</span>).<span
                                            className="redCalloutText">attr</span>(<span
                                            className="greenCalloutText">'src'</span>)
                                    </p>
                                    <br/>
                                    <p className="greyText">Agregar 1 solo atributo</p>
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'img'</span>).<span
                                            className="redCalloutText">attr</span>(<span className="greenCalloutText">'src',
                                            '.foto1.jpg'</span>)</p>
                                </div>
                            </div>
                            <li><b>.removeAttr()</b>: eliminar el atributo de un etiqueta del DOM.</li>
                            <li><b>.scrollTop()</b>: Obtener la posición vertical de la barra de desplazamiento con
                                respecto
                                a un elemento.</li>
                            <li><b>.offset()</b>: permite retornar lsa coordenadas del <b>eje </b><span
                                    className="redText">x</span> y <b>eje </b><span className="redText">y</span> de un
                                determinado
                                objeto del DOM.</li>
                            <li><b>.is()</b>: permite verificar si un objeto es visible o no, dentro del DOM.</li>
                            <li><b>.delay()</b>: agregar delay a un método/efecto.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">on</span>(<span
                                            className="greenCalloutText">'click'</span>,
                                        <span className="blueCalloutText">function</span>()
                                        &#123;
                                    </p>
                                    <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">$</span>(selector).<span
                                            className="redCalloutText">delay</span>(1000).
                                        <span className="redCalloutText"> fadeToggle</span>
                                    </p>
                                    <p>&#125;);</p>
                                </div>
                            </div>
                            <li><b>.filter()</b>: filtrar y encontrar elementos por selector. No puede encontrar
                                elementos
                                children si su selector no se especifica.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">'ul
                                            li'</span>).<span className="redCalloutText">filter</span>(selector);</p>
                                </div>
                            </div>
                            <li><b>.find()</b>: encontrar elementos por selector <b>parent &gt; children</b>. A <span
                                    className="redText">diferencia del filter</span>, find se encarga de encontrar bajo una
                                condición los elementos children de un parent.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'ul'</span>).<span
                                            className="redCalloutText">find</span>("li")</p>
                                </div>
                            </div>
                            <li><b>.children</b>: se encarga de retornar a los <span className="redText">hijos
                                    directos</span>
                                de un elemento. Jerarquía <b>parent &gt; children</b>.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">'ul'</span>).<span
                                            className="redCalloutText">children</span>() <span className="greyText">Los li
                                            dentro
                                            de ul.</span></p>
                                </div>
                            </div>
                            <li><b>.sibligns()</b>: retorna la lista de hermanos de un elemento parent.</li>
                            <li><b>.next()</b>: acceder al siguiente elemento después de un elemento del DOM.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">next</span>()</p>
                                </div>
                            </div>
                            <li><b>.nextAll()</b>: acceder a los siguientes elementos después de un elemento del DOM.
                            </li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">nextAll</span>()</p>
                                </div>
                            </div>
                            <li><b>.prev()</b>: acceder al anterior elemento después de un elemento del DOM.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">prev</span>()</p>
                                </div>
                            </div>
                            <li><b>.prevAll()</b>: acceder a los anteriores elementos después de un elemento del DOM.
                            </li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">prevAll</span>()</p>
                                </div>
                            </div>
                            <li><b>.closest()</b>: acceder directamente al elemento más cercano con respecto a otro
                                mediante
                                una condición.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">closest</span>(selector)</p>
                                </div>
                            </div>
                            <li><b>.has()</b>: verificar si un elemento se encuentra dentro de otro elemento del DOM.
                            </li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">has</span>(selector)</p>
                                </div>
                            </div>
                            <li><b>.hasClass()</b>: verificar si un elemento del DOM tiene una determinada clase.
                                Devuelve
                                <b>true</b> or <b>false</b>.
                            </li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">hasClass</span>(clase del selector)</p>
                                </div>
                            </div>
                            <li><b>.on()</b>: habilitar un evento que se encuentra en un elemento del DOM.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">on</span>(evento)</p>
                                </div>
                            </div>
                            <li><b>.off()</b>: deshabilitar un evento que se encuentra en un elemento del DOM.</li>
                            <div className="example" style={{"padding": "10px"}}>
                                <div className="example__content">
                                    <p><span className="redCalloutText">$</span>(<span
                                            className="greenCalloutText">selector</span>).<span
                                            className="redCalloutText">off</span>(evento)</p>
                                </div>
                            </div>
                            <div className="inArray">
                                <h3>Método $.inArray</h3>
                                <p>Retorna el número de índice de un elemento en un Array.</p>
                                <div className="example" style={{"padding": "10px 0 5px 0"}}>
                                    <div className="example__content">
                                        <p>$.<span className="redCalloutText">inArray(</span><span
                                                className="greenCalloutText">'elemento'</span>, nombreDelArray)</p>
                                    </div>
                                </div>
                                <div className="example" style={{"padding": "10px 0 5px 0"}}>
                                    <div className="example__content">
                                        <p><span className="blueCalloutText">let </span>paises = [<span
                                                className="greenCalloutText">'Argentina', 'Ecuador', 'México',
                                                'Colombia'</span>]</p>
                                        <p>console.<span className="redCalloutText">log</span>($.<span
                                                className="redCalloutText">inArray</span>(<span
                                                className="greenCalloutText">'México'</span>, paises)) <span
                                                className="greyText">
                                                Devuelve el índice 2.</span></p>
                                        <p>console.<span className="redCalloutText">log</span>($.<span
                                                className="redCalloutText">inArray</span>(<span className="greenCalloutText">
                                                'Honduras' </span>, paises)) <span className="greyText">Devuelve el
                                                índice -1.</span></p>
                                    </div>
                                </div>
                                <div className="example" style={{"padding": "10px 0 5px 0"}}>
                                    <div className="example__content">
                                        <p><b>Si no se encuentra el elemento dentro del Array devuleve <span
                                                    className="redText">-1</span></b>.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="now">
                                <h3>Método $.now</h3>
                                <p>Retorna el tiempo actual en mili segundos, o también llamado <b>Epoch Time</b>.</p>
                                <div className="example" style={{"padding": "10px 0 5px 0"}}>
                                    <div className="example__content">
                                        <p className="greyText">Ambos métodos retornar el mismo resultado.</p>
                                        <p>$.<span className="redCalloutText">now</span>()</p>
                                        <p>(<span className="blueCalloutText">new </span><span
                                                className="redCalloutText">Date</span>).<span
                                                className="redCalloutText">getTime</span>()</p>
                                    </div>
                                </div>
                            </div>
                            <div className="each">
                                <h3>Estructura Iterativa (each)</h3>
                                <p>Similar a <b>for of</b>, se le pasan dos parámetros (index y value), el índice y el
                                    valor.</p>
                                <div className="example" style={{"padding": "10px 0 5px 0"}}>
                                    <div className="example__content">
                                        <p><span className="blueCalloutText">let </span>nums = [<span>10, 20, 30, 40,
                                                50</span>]
                                        </p>
                                        <p>$.<span className="redCalloutText">each</span>(nums, <span
                                                className="blueCalloutText">function</span>(<b>index</b>, <b>value</b>) &#123;
                                        </p>
                                        <p style={{"paddingLeft": "30px"}}><span
                                                className="redCalloutText">alert</span>(<b>index</b> + " - " + <b>value</b>)
                                        </p>
                                        <p>&#125;)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="length">
                                <h3>Propiedad Length</h3>
                                <p>Obtiene la cantidad de elementos con respecto a la etiqueta seleccionada.</p>
                                <div className="example" style={{"padding": "10px 0 5px 0"}}>
                                    <div className="example__content">
                                        <p><span className="blueCalloutText">let</span> size = <span
                                                className="redCalloutText">$</span>(<span
                                                className="greenCalloutText">'li'</span>).length;</p>
                                        <p><span className="redCalloutText">alert</span>(size) <span className="greyText">
                                                ejemplo: 5</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="dimensions">
                                <h3>Dimensiones</h3>
                                <p className="dimensions__desc">Obtener las <span className="redText">dimensiones</span> de los
                                    <span className="redText">elementos</span>.
                                </p>
                                <div className="dimensions__example">
                                    <div className="dimensions__box"></div>
                                    <button id="btnViewDimensions">Ver dimensiones</button>
                                </div>
                                <div className="list">
                                    <ul>
                                        <li><b>.width()</b>: el ancho de un elemento.</li>
                                        <li><b>.height()</b>: el alto de un elemento.</li>
                                        <li><b>.innerWidth()</b>: el ancho total de un elemento (width + padding).</li>
                                        <li><b>.innerHeight()</b>: el alto total de un elemento (height + padding).</li>
                                        <li><b>.outerWidth()</b>: el ancho total de un elemento (width + padding +
                                            border).
                                        </li>
                                        <li><b>.outerHeight()</b>: el alto total de un elemento (heigth + padding +
                                            border).
                                        </li>
                                        <li><b>.outerWidth(<span className="greenCalloutText">true</span>)</b>: el ancho
                                            total
                                            de un elemento (width + padding + border + margin).</li>
                                        <li><b>.outerHeight(<span className="greenCalloutText">true</span>)</b>: el alto
                                            total
                                            de un elemento (width + padding + border + margin).</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="jquery">
                                <h3>Obtener versión jQuery</h3>
                                <div className="example" style={{"padding": "10px 0 5px 0"}}>
                                    <div className="example__content">
                                        <p><span className="blueCalloutText">let</span> v = <span
                                                className="redCalloutText">$</span>().jquery</p>
                                        <p><span className="redCalloutText">alert</span>(<span
                                                className="greenCalloutText">"Tienes
                                                la versión "</span> + v) <span className="greyText">ejemplo: 3.7.0</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Methods;