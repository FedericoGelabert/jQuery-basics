
function Footer() {

    return (
        <footer className="footer">
            <div className="footer__media">
                <a href="https://github.com/FedericoGelabert"><span><i className="fa-brands fa-github"></i></span></a>
                <a href="https://www.linkedin.com/in/federico-gelabert/"><span><i
                    className="fa-brands fa-linkedin"></i></span></a>
            </div>
            <h3>jQuery Basics</h3>
            <ul>
                <li><a href="#selectors">Selectores</a></li>
                <li><a href="#methods">Métodos</a></li>
                <li><a href="#events">Eventos</a></li>
                <li><a href="#effects">Efectos</a></li>
                <li><a href="#ajax">Ajax</a></li>
                <li><a href="#exercises">Ejercicios</a></li>
                <li><a href="#plugins">Plugins</a></li>
            </ul>
            <span className="footer__copy">Copyright 2023 © Federico Gelabert WebDev.</span>
        </footer>
    )
}

export default Footer;