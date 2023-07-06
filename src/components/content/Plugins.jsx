import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import Swiper from 'swiper';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

function Plugins() {

    useEffect(() => {
        // eslint-disable-next-line
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    })


    Fancybox.bind("[data-fancybox]", {
    });

    return (
        <section className="content__plugins" id="plugins">
            <h2>Plugins</h2>
            <hr />
            <div className="content__plugins__info">
                <p className="content__plugins__desc"><b>En simples palabras</b>: Un plugin es una herramienta de código
                    reutilizable escrito en un archivo estándar JavaScript.
                    Estos archivos proporcionan <span className="redText">métodos jQuery</span> útiles que pueden ser
                    utilizados junto con los métodos del framwork
                    jQuery.</p> <br />
                <p>Existe una cantidad variada de plugins, estos pueden adherirse a nuestro proyecto de la misma
                    manera
                    que se puede aplicar jQuery. El método de <b>descarga / instalación</b> depende del plugin.</p>
                <div className="list">
                    <h4>Páginas</h4>
                    <ul>
                        <li>jQuery Script.net: <a href="https://www.jqueryscript.net/"
                            className="redText">https://www.jqueryscript.net/</a></li>
                        <li>jQuery plugins: <a href="https://plugins.jquery.com/tag/jquery/"
                            className="redText">https://plugins.jquery.com/tag/ jquery/</a></li>
                        <li>npm jquery-plugins: <a href="https://www.npmjs.com/search?q=keywords:jquery-plugin"
                            className="redText">https://www.npmjs.com/search?q=keywords:jquery-plugin</a><b
                                className="greyText"> (recomendado)</b></li>
                        <li>cdnjs jquery-plugins: <a href="https://cdnjs.com/libraries?q=jquery"
                            className="redText">https://cdnjs.com/libraries?q=jquery</a> <b className="greyText">
                                (recomendado)</b></li>
                    </ul>
                </div>
                <div className="content__plugins__examples">
                    <h3>Ejemplos de Plugins</h3>
                    <div style={{ "marginTop": "20px" }} className="content__plugins__flickity">
                        <li><b>Swiper</b></li>
                        <p style={{ "marginBottom": "10px", "fontSize": "0.9rem" }}>Link: <a href="https://swiperjs.com/"
                            className="redText">https://swiperjs.com/</a>
                        </p>
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape1_yw5ija.jpg"
                                        alt="Swiper img"></img>
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape3_atsldu.jpg"
                                        alt="Swiper img"></img>
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://res.cloudinary.com/federicog/image/upload/v1687372901/jquery-basics/landscape2_vtsvpp.jpg"
                                        alt="Swiper img"></img>
                                </div>
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-scrollbar"></div>
                        </div>
                    </div>
                    <div className="content__plugins__fancyBox" style={{ "marginTop": "50px" }}>
                        <li><b>Fancybox</b></li>
                        <p style={{ "marginBottom": "10px", "fontSize": "0.9rem" }}>Link: <a href="https://fancyapps.com/"
                            className="redText">https://fancyapps.com/</a></p>
                        <div className="fancybox-container">
                            <a href="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape1_yw5ija.jpg"
                                data-fancybox data-caption="Beautiful Landscape Image">
                                <img
                                    src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape1_yw5ija.jpg" alt="Beautiful Landscape" />
                            </a>
                            <a href="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape3_atsldu.jpg"
                                data-fancybox data-caption="Beautiful Landscape Image 2">
                                <img
                                    src="https://res.cloudinary.com/federicog/image/upload/v1687372328/jquery-basics/landscape3_atsldu.jpg" alt="Beautiful Landscape" />
                            </a>
                        </div>
                        <div className="callout">
                            <div className="callout__icon">
                                <span><i className="fa-solid fa-circle-info"></i></span>
                            </div>
                            <div className="callout__text">
                                <p>Haz clic en las imágenes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plugins;