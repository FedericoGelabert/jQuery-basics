import GradientBackground from "./GradientBackground";
import { useEffect } from "react";
import $ from 'jquery';

function Header() {

    useEffect(() => {
        $('#darkButton').on('click', function(){
            $(this).hide()
            $('#lightButton').show()
            $('body').css({'color': 'white', 'background-color': 'black'})
            $('.jquery-logo').attr('src', 'https://res.cloudinary.com/federicog/image/upload/v1687562688/jquery-basics/jquery-logo-light_r1eqa9.png');
            $('hr, .is-selected').css('background-color', 'white')
            $(".header a, h1, .fa-sun, .footer a, .footer h3, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars").css('color','black')
            $('.footer__copy').css('color', 'rgba(0,0,0,0.5)')
            $('.github-message-icon').css('color', 'white')
            $('.content button').css({'color': 'white', 'background-color': 'black', 'border': '2px solid white'})
            $('.dot').css('background-color', 'rgba(255, 255, 255, .8)')
    
            $('.header a, .footer a, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars').hover(function(e){
                $(this).css('color', e.type === 'mouseenter'?'white':'black')
            })
        })
    
        $('#darkButton2').on('click', function(){
            $(this).hide()
            $('#lightButton2').show()
            $('body').css({'color': 'white', 'background-color': 'black'})
            $('.jquery-logo').attr('src', 'https://res.cloudinary.com/federicog/image/upload/v1687562688/jquery-basics/jquery-logo-light_r1eqa9.png');
            $('hr, .is-selected').css('background-color', 'white')
            $(".header a, h1, .fa-sun, .footer a, .footer h3, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars, .menu__buttons a .fa-github, .menu__buttons a .fa-linkedin").css('color','black')
            $('.footer__copy').css('color', 'rgba(0,0,0,0.5)')
            $('.github-message-icon').css('color', 'white')
            $('.content button').css({'color': 'white', 'background-color': 'black', 'border': '2px solid white'})
            $('.dot').css('background-color', 'rgba(255, 255, 255, .8)')
            $('.menu').css({'background-color': 'rgba(255, 255, 255, .8)', 'color': 'black'}).addClass('menu-border-black').removeClass('menu-border-white')
            $('.menu hr').css('background-color', 'black')
            $('.menu ul a, .menu__buttons a').css('color', 'black')
            $('.menu__footer-text, .menu__close').css('background-color', 'rgba(255, 255, 255, 0.4)')
    
    
            $('.header a, .footer a, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars').hover(function(e){
                $(this).css('color', e.type === 'mouseenter'?'white':'black')
            })
        })
    
        $('#lightButton').on('click', function(){
            $(this).hide()
            $('#darkButton').show()
            $('body').css({'color': 'black', 'background-color': 'white'})
            $('.jquery-logo').attr('src', 'https://res.cloudinary.com/federicog/image/upload/v1687562688/jquery-basics/jquery-logo-black_mmrguf.png');
            $('hr, .is-selected').css('background-color', 'black')
            $(".header a, h1, .fa-sun, .footer a, .footer h3, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars").css('color','white')
            $('.footer__copy').css('color', 'rgba(255, 255, 255, .6)')
            $('.github-message-icon').css('color', 'black')
            $('.content button').css({'color': 'black', 'background-color': 'white', 'border': '2px solid black'})
            $('.dot').css('background-color', 'rgba(0, 0, 0, .8)')
    
            $('.header a, .footer a, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars').hover(function(e){
                $(this).css('color', e.type === 'mouseenter'?'black':'white')
            })
        })
    
        $('#lightButton2').on('click', function(){
            $(this).hide()
            $('#darkButton2').show()
            $('body').css({'color': 'black', 'background-color': 'white'})
            $('.jquery-logo').attr('src', 'https://res.cloudinary.com/federicog/image/upload/v1687562688/jquery-basics/jquery-logo-black_mmrguf.png');
            $('hr, .is-selected').css('background-color', 'black')
            $(".header a, h1, .fa-sun, .footer a, .footer h3, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars, .menu__buttons a .fa-github, .menu__buttons a .fa-linkedin").css('color','white')
            $('.footer__copy').css('color', 'rgba(255, 255, 255, .6)')
            $('.github-message-icon').css('color', 'black')
            $('.content button').css({'color': 'black', 'background-color': 'white', 'border': '2px solid black'})
            $('.dot').css('background-color', 'rgba(0, 0, 0, .8)')
            $('.menu').css({'background-color': 'rgba(0, 0, 0, .8)', 'color': 'white'}).addClass('menu-border-white').removeClass('menu-border-black')
            $('.menu hr').css('background-color', 'white')
            $('.menu ul a, .menu__buttons a').css('color', 'white')
            $('.menu__footer-text, .menu__close').css('background-color', 'rgba(0, 0, 0, 0.4)')
    
            $('.header a, .footer a, .header__buttons .fa-github, .header__buttons .fa-linkedin, .fa-bars').hover(function(e){
                $(this).css('color', e.type === 'mouseenter'?'black':'white')
            })
        })
    })

    return (
        <div className="header-container">
            <header className="header">
                <a href="/#">
                    <h1>jQuery Basics</h1>
                </a>
                <nav className="header__nav">
                    <div className="header__menu">
                        <div className="header__mode2">
                            <i className="fa-solid fa-moon" id="darkButton2"></i>
                            <i className="fa-solid fa-sun" id="lightButton2"></i>
                        </div>
                        <span id="btnMenu"><i className="fa-solid fa-bars"></i></span>
                    </div>
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
                        <div className="header__mode">
                            <i className="fa-solid fa-moon" id="darkButton"></i>
                            <i className="fa-solid fa-sun" id="lightButton"></i>
                        </div>
                        <div className="header__buttons">
                            <a href="https://github.com/FedericoGelabert/jQuery-basics">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/federico-gelabert/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </ul>
                </nav>
            </header>
            <GradientBackground />
        </div>
    )
}

export default Header;