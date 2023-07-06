
function Selectors() {

    return (
        <section className="content__selectors" id="selectors">
            <h2>Selectores</h2>
            <hr />
            <div className="example">
                <div className="example__content">
                    <p className="greyText">Universal</p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"*"</span>)</p> <br />
                    <p className="greyText">Etiqueta</p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"div"</span>)</p>
                    <br />
                    <p className="greyText">Clase</p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">".div-clase"</span>)
                    </p>
                    <br />
                    <p className="greyText">ID</p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"#div-id"</span>)
                    </p>
                    <br />
                    <p className="greyText">Padre-hijos</p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">".div-clase
                        button"</span>)</p> <br />
                    <div>
                        <p className="greyText">Even & odd (par e impar)</p>
                        <p><span className="redCalloutText">$</span>(<span
                            className="greenCalloutText">"li:even"</span>)
                            <span className="greyText"><b>índice</b> par</span>
                        </p>
                        <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"li:odd"</span>)
                            <span className="greyText"><b>índice</b> impar</span>
                        </p>
                    </div> <br />
                    <p className="greyText">Atributo</p>
                    <p><span className="redCalloutText">$</span>(<span
                        className="greenCalloutText">"input[type='text']"</span>)</p> <br />
                    <p className="greyText">eq()</p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"ul
                        li:eq(indice)"</span>)</p> <br />
                    <div>
                        <p className="greyText">Contains</p>
                        <p><span className="redCalloutText">$</span>(<span
                            className="greenCalloutText">"p:contains(texto)"</span>)</p> <br />
                        <p className="greyText">Not Contains</p>
                        <p><span className="redCalloutText">$</span>(<span
                            className="greenCalloutText">"p:not(:contains(texto))"</span>)</p>
                    </div> <br />
                    <p className="greyText">Hidden & visible</p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">div:hidden</span>)
                    </p>
                    <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">div:visible</span>)
                    </p>
                    <br />
                    <div>
                        <p className="greyText">Otros</p>
                        <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"ul
                            li:first"</span>) <span className="greyText"> - el primero de una lista</span></p>
                        <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"ul
                            li:first-child"</span>) <span className="greyText"> - los primeros de todas las
                                listas</span></p>
                        <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"ul
                            li:last"</span>)
                            <span className="greyText"> - el último de una lista</span>
                        </p>
                        <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"ul
                            li:last-child"</span>) <span className="greyText"> - los últimos de todas las
                                listas</span></p>
                        <p><span className="redCalloutText">$</span>(<span className="greenCalloutText">"ul
                            li:nth-child(num)"</span>) <span className="greyText"> - un li de una lista</span>
                        </p>
                    </div>
                </div>
                <h3>This</h3>
                    <p>Se utiliza this para referirse al elemento al cual se hizo referencia anteriormente.</p>
                    <div className="example">
                        <h4>Ejemplo:</h4>
                        <div className="example__content">
                            <p><span className="redCalloutText">$</span>(selector).<span
                                className="redCalloutText">on</span>(<span className="greenCalloutText">'click'</span>,
                                <span className="blueCalloutText">function</span>()&#123;</p>
                            <p style={{"paddingLeft": "30px"}}><span className="redCalloutText">$</span>(<span
                                className="blueCalloutText"><b>this</b></span>).<span
                                    className="redCalloutText">hide</span>(1000).<span className="redCalloutText">
                                    show</span>(500)
                            </p>
                            <p>&#125;)</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Selectors;