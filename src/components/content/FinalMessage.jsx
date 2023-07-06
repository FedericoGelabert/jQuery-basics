
function FinalMessage() {
    
    return (
        <section className="content__finalmessage">
        <h3>Mensaje Final</h3>
        <hr/>
        <div className="content__finalmessage__text">
            <p>Espero que les haya aportado valor.</p>
            <p>Cualquier sugerencia, aporte extra o duda no piensen dos veces en preguntar.</p>
            <div className="content__finalmessage__github">
                <span><a href="https://github.com/FedericoGelabert/jQuery-basics"><i
                            className="fa-brands fa-github github-message-icon"></i></a></span>
                <p>¡No olvides darle <span className="yellowText"><i className="fa-solid fa-star"></i></span> en GitHub!
                </p>
                <img src="https://res.cloudinary.com/federicog/image/upload/v1687557437/jquery-basics/starred_goaiby.png"
                    alt="github star"></img>
            </div>
        </div>
    </section>
    )
}

export default FinalMessage;