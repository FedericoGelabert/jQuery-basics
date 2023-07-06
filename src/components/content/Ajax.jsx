
function Ajax() {

    return (
        <section className="content__ajax" id="ajax">
                <h2>Ajax</h2>
                <hr/>
                <div className="content__ajax__info">
                    <p className="content__ajax__desc"><b>AJAX</b> (Asynchronous JavaScript and XML) es una técnica de
                        desarrollo web que, al combinar una serie de tecnologías
                        independientes, nos permite <span className="redText">intercambiar información entre el servidor y
                            el
                            cliente</span> (un navegador web) de forma
                        asíncrona.</p>
                    <img src="https://res.cloudinary.com/federicog/image/upload/v1687273358/jquery-basics/js-tree_whst12.png"
                        alt="Ajax tree"></img>
                    <div className="list">
                        <ul>
                            <li><b>XMLHttpRquest</b>: Intercambio asíncrono.</li>
                            <li><b>XML</b>: Manipulación e intercambio de información.</li>
                            <li><b>JSON</b>: Alternativa de XML.</li>
                            <li><b>DOM</b>: Document Object Model.</li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Ventajas</h4>
                        <ul>
                            <li>Puede ser utilizada en cualquier plataforma y navegador.</li>
                            <li>Menor transferencia de datos cliente/servidor.</li>
                            <li>Optimización de recursos.</li>
                            <li>Portabilidad y usabilidad.</li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Desventajas</h4>
                        <ul>
                            <li>Tiempos de respuesta del servidor en momentos determinados.</li>
                            <li>Algunas funciones típicas del navegador pueden fallar.</li>
                            <li>Sin jQuery se debe escribir código para cada uno de los navegadores que serán
                                utilizados.
                            </li>
                        </ul>
                    </div>
                    <h3>Funciones</h3>
                    <div className="list">
                        <ul>
                            <li><b>$.get()</b>: Obtener un dato local (<b>.txt, .json, .xml, etc</b>) o de un servidor.
                            </li>
                            <div className="example">
                                <div className="example__content">
                                    <p className="greyText"><b>Data</b>: La información que se encuentre dentro del
                                        archivo/servidor.</p>
                                    <p className="greyText"><b>textStatus</b>: El estado de el llamado (success, pending,
                                        fail).</p>
                                    <p className="greyText"><b>jqXHR</b>: Métodos y datos.</p>
                                </div>
                            </div>
                            <div className="example" style={{"paddingTop": "10px"}}>
                                <div className="example__content">
                                    <p>$.<span className="redCalloutText">get</span>(<span
                                            className="greenCalloutText">"url"</span>, <span
                                            className="blueCalloutText">function</span>(<b>data, textStatus, jqXHR</b>)&#123;</p>
                                    <p className="pl30">console.<span className="redCalloutText">log</span>(<span
                                            className="greenCalloutText">"Mensaje "</span> + data + <span
                                            className="greenCalloutText">" \nStatus: "</span> + textStatus + <span
                                            className="greenCalloutText">"\njqXHR: "</span> + jqXHR.status)</p>
                                    <p>&#125;);</p>
                                </div>
                            </div>
                            <li><b>$.getJSON()</b>: Obtiene datos convertidos a <b>.json</b>.</li>
                            <div className="example">
                                <div className="example__content">
                                    <p>$.<span className="redCalloutText">getJSON</span>(<span
                                            className="greenCalloutText">"url"</span>, <span
                                            className="blueCalloutText">function</span>(<b>data</b>)&#123;</p>
                                    <p className="greyText pl30">console.log(data)</p>
                                    <p>&#125;);</p>
                                </div>
                            </div>
                            <li><b>.ajax()</b>: Siendo similar a fetch, .ajax() tiene una estructura sencilla y
                                completa.
                            </li>
                            <div className="example">
                                <div className="example__content">
                                    <p>$.<span className="redCalloutText">ajax</span>(&#123;</p>
                                    <p className="pl30">url: <span className="greenCalloutText">"url"</span>,</p>
                                    <p className="pl30">type: <span className="greenCalloutText">"GET / POST / PUT / DELETE
                                            "</span>,</p>
                                    <p className="pl30">dataType: <span className="greenCalloutText">"json / xml / html /
                                            txt"</span>,</p>
                                    <p className="pl30"><span className="redCalloutText">success</span>: <span
                                            className="blueCalloutText">function</span>(<b>data</b>) &#123;</p>
                                    <p className="pl60">console.<span className="redCalloutText">log</span>(<b>data</b>)</p>
                                    <p className="pl30">&#125;,</p>
                                    <p className="pl30"><span className="redCalloutText">error</span>: <span
                                            className="blueCalloutText">function</span>(<b>data, status, xhr</b>) &#123;</p>
                                    <p className="pl60">console.<span className="redCalloutText">log</span>(<b>err</b>)</p>
                                    <p className="pl60">console.<span className="redCalloutText">log</span>(<b>status</b>) <span
                                            className="greyText">Error</span></p>
                                    <p className="pl60">console.<span className="redCalloutText">log</span>(<b>xhr</b>) <span
                                            className="greyText">Not Found</span></p>
                                    <p className="pl30">&#125;</p>
                                    <p>&#125;);</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Ajax;