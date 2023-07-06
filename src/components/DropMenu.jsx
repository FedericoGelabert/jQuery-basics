import { useEffect } from "react";
import $ from 'jquery';

function DropMenu() {

    useEffect(() => {
        $('#btnClose').on('click', function () {
            $('.menu').animate({ 'right': '-550px' }, 1000)
        })
        $('#btnMenu').on('click', function () {
            $('.menu').animate({ 'right': '0' }, 1000)
        })

        $('.menu li').on('click', function () {
            $('.menu').css('right', '-550px')
        })
    })

    return (
        <div className="menu">
            <header className="menu__header">
                <div className="menu__close">
                    <h3>Menu</h3>
                    <span id="btnClose"><i className="fa-solid fa-xmark"></i></span>
                </div>
                <hr />
            </header>
            <ul>
                <a href="#selectors">
                    <li className="header__link">Selectores</li>
                </a>
                <a href="#methods">
                    <li className="header__link">Métodos</li>
                </a>
                <a href="#events">
                    <li className="header__link">Eventos</li>
                </a>
                <a href="#effects">
                    <li className="header__link">Efectos</li>
                </a>
                <a href="#ajax">
                    <li className="header__link">Ajax</li>
                </a>
                <a href="#exercises">
                    <li className="header__link">Ejercicios</li>
                </a>
                <a href="#plugins">
                    <li className="header__link">Plugins</li>
                </a>
            </ul>
            <footer className="menu__footer">
                <hr />
                <div className="menu__footer-text">
                    <div className="menu__buttons">
                        <a href="https://github.com/FedericoGelabert/">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/federico-gelabert/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="menu__copy">
                        <p>Federico Gelabert</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default DropMenu;