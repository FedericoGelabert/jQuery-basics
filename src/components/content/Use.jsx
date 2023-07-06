function Use() {

    return (
        <section className="content__basics">
                <h2>Utilizando jQuery</h2>
                <hr/>
                <div className="content__basics__text">
                    <h3>Sintaxis</h3>
                    <div className="callout">
                        <div className="callout__icon">
                            <span><i className="fa-solid fa-fire-flame-curved"></i></span>
                        </div>
                        <div className="callout__text">
                            <p>$(selector).action().</p>
                        </div>
                    </div>
                    <p>El término <span className="redText">$</span> utilizado en jQuery reduce/comprime lo que se conoce en
                        JavaScript vanilla
                        como: <span className="redText">document.querySelector("")</span>. Luego del símbolo <b>$</b> se
                        abren
                        paréntesis y se
                        hace referencia a un selector (veremos cuales existen en la próxima sección). Por último se
                        encuentra la acción que
                        se le realizará a dicha selección. </p>
                    <div className="callout">
                        <div className="callout__icon">
                            <span><i className="fa-solid fa-fire-flame-curved"></i></span>
                        </div>
                        <div className="callout__text">
                            <p>$(document).ready()</p>
                        </div>
                    </div>
                    <p>Para que jQuery realmente funcione, aparte de ser incluido o instalado en nuestro proyecto se
                        debe
                        agregar en un
                        archivo .js un código esencial. Este es el evento <span className="redText">document ready</span>
                        (existen más variables
                        del mismo, las cuales se mencionarán a continuación). Este evento garantiza que todos los
                        comandos
                        que contiene
                        dentro se ejecutarán después de que todos los elementos HTML (del DOM) se hayan cargado.</p>
                    <div className="list">
                        <h4>Variables de $(document).ready()</h4>
                        <ul>
                            <li>jQuery(function(){})</li>
                            <li>$(function (){})</li>
                        </ul>
                    </div>
                    <div className="example">
                        <h4>Ejemplo:</h4>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>( document ).<span
                                    className="redCalloutText">ready</span>(<span className="blueCalloutText">function</span>()
                                &#123;
                            </p>
                            <p style={{"paddingLeft": "30px"}}>console.<span className="redCalloutText">log</span>(<span
                                    className="greenCalloutText">
                                    "ready!" </span>);</p>
                            <p>&#125;);</p>
                        </div>
                    </div>
                    <h3>Callback</h3>
                    <p>Función opcional enviada como parámetro que se ejecuta luego del método, evento o efecto.</p>
                    <div className="example">
                        <h4>Ejemplo:</h4>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>(selector).<span
                                    className="redCalloutText">on</span>(<span className="greenCalloutText">'click'</span>,
                                <span className="blueCalloutText">function</span>()&#123;
                            </p>
                            <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">$</span>(<span
                                    className="blueCalloutText">selector</span>).<span
                                    className="redCalloutText">hide</span>(2000,
                            </p>
                            <p style={{"paddingLeft": "60px"}}><span className="blueCalloutText">function</span>()&#123;</p>
                            <p style={{"paddingLeft": "90px"}}><span className="redCalloutText">alert</span>(<span
                                    className="greenCalloutText">"Callback function"</span>)</p>
                            <p style={{"paddingLeft": "60px"}}>&#125;)</p>
                            <p>&#125;)</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Use;