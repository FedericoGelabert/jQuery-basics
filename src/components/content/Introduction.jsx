
function Introduction() {

    return (
        <section className="content__introduction">
            <h2>Introducción</h2>
            <hr />
            <div>
                <img src="https://res.cloudinary.com/federicog/image/upload/v1687562688/jquery-basics/jquery-logo-black_mmrguf.png"
                    alt="jQuery Logo" className="jquery-logo"></img>
            </div>
            <div className="content__introduction__text">
                <p>Creado por John Resig en 2006, <b>jQuery</b> es una librería de <b className="redText">JavaScript</b>
                    que
                    permite simplificar la manera de interactuar
                    con los documentos HTML, modificar el DOM y hacer animaciones e interacciones con <b
                        className="redText">AJAX</b>.</p>
                <div className="callout">
                    <div className="callout__icon">
                        <span><i className="fa-solid fa-fire-flame-curved"></i></span>
                    </div>
                    <div className="callout__text">
                        <p>Otras librerías de JavaScript son: mootols, yui, dojo.</p>
                    </div>
                </div>
            </div>
            <div className="list">
                <h4>Ventajas</h4>
                <ul>
                    <li>Desarrollo rápido y flexible.</li>
                    <li>Open Source.</li>
                    <li>Optimización de Recursos.</li>
                    <li>Escribes <b>menos código, haces más.</b></li>
                </ul>
            </div>
            <div className="list">
                <h4>Utilidades & Links</h4>
                <ul>
                    <li>Página de jQuery: <a href="https://jquery.com/" className="redText">https://jquery.com/</a></li>
                    <li>jQuery GitHub: <a href="https://github.com/jquery/jquery"
                        className="redText">https://github.com/jquery/jquery</a></li>
                    <li>Descarga / Instalación jQuery: <a href="https://jquery.com/download/"
                        className="redText">https://jquery.com/download/</a></li>
                    <li>Documentación jQuery: <a href="https://api.jquery.com/"
                        className="redText">https://api.jquery.com/</a></li>
                    <li>Plugins jQuery: <a href="https://plugins.jquery.com/"
                        className="redText">https://plugins.jquery.com/</a></li>
                </ul>
            </div>
            <div className="list">
                <h4>VS Code Extensión</h4>
                <ul>
                    <li>Extensión Snippets: <a className="redText"
                        href="https://marketplace.visualstudio.com/items?itemName=kspearrin.jQueryCodeSnippets">jQuery
                        Code Snippets</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Introduction;