
function Install() {

    return (
        <section className="content__install">
                <h2>Instalación / Descarga</h2>
                <hr/>
                <div className="content__install__text">
                    <div className="list">
                        <h4>Métodos de Instalación / Descarga:</h4>
                        <ul>
                            <li>jQuery puede <b>descargarse</b> y agregarse en el proyecto a utilizar. Aunque ocupa
                                ancho de
                                banda, por ende no es recomendable utilizar este método.</li>
                            <li><b>CDN</b>: Utilizando un cdn, no es necesario que descargues nada ya que jQuery estará
                                hosteado en todos los servidores del mundo. Si se usa cdn, entrar aquí: <a
                                    href="https://releases.jquery.com/">https://releases.jquery.com/</a> (minified).
                            </li>
                            <li><b>npm/yarn</b>: Se puede instalar como paquete de npm/yarn.</li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Install;