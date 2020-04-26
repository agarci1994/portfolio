import React from "react"

const Proyect = () => (
    <section className="proyect">
        <article>
            <a href="https://github.com/agarci1994/proyectGame">
                <img src="../../images/kindoftrippy.png" />
                <div className="margin">
                    <h2>The King of Trippy</h2>
                    <p>
                        Pequeño juego de recolección de pistas, con un climax
                        que combina el terror psicológico y los clásicos de
                        zombis. Desarrollado con Canvas y Vanilla Javascript
                        en la tercera semana de IronHack.
                        </p>
                </div>
            </a>
        </article>
        <article>
            <a href="http://elviajero-test.herokuapp.com/">
                <img src="../../images/elviajero.png" />
                <div className="margin">
                    <h2>El Viajero</h2>
                    <p>
                        Web app de viajes que ofrece información básica sobre
                        la ciudad en la que te encuentras y permite la
                        interacción con otros usuarios. Realizado con Node.js
                        y MoongoDB en la sexta semana de IronHack.
                        </p>
                </div>
            </a>
        </article>
        <article>
            <a href="https://github.com/agarci1994/yayos">
                <img src="../../images/yayosapp.png" />
                <div className="margin">
                    <h2>Yayos</h2>
                    <p>
                        Single-page application que ofrece recursos para
                        facilitar y gestionar las necesidades del día a día de
                        las personas de la tercera edad .El proyecto se ha
                        realizado con React para el cliente y Node.js para el
                        servidor. Haciendo uso de: Reack Hooks, Style
                        Components, Bootstrap-react, MongoDB, APIs, etc...
                        </p>
                </div>
            </a>
        </article>
    </section>
)

export default Proyect