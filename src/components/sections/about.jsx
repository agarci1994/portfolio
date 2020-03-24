import React from "react";
import { Tween, Timeline } from "react-gsap";

const About = () => (
    <Timeline
        target={
            <div className="about">
                <p>
                    Nací en Granada (España) y desde muy pequeño fuí un gran
                    amante de la tecnología y del lenguaje audiovisual.
                      </p>
                <p>
                    Siempre estuve en contacto con la tecnología haciendo
                    pequeños proyectos personales y aprendiendo de forma
                    autodidacta.
                      </p>
                <p>
                    Al mismo tiempo comunicación audiovisual y un master en
                    investigación y creación artistica y realizó varios
                    largometrajes y cortometrajes
                      </p>
                <p>
                    al mismo tiempo que participo como periodista en
                    diferentes festivales de cine.
                      </p>
                <br></br>
                <p>
                    En 2020 decido dar un cambio, sumergiendome
                    profesionalmente en el desarrollo web, que me abre un
                    mundo donde seguir desarrollandome,
                      </p>
                <p>
                    explorando nuevas formas de comunicación y superando
                    retos.
                      </p>
            </div>
        }
    >
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
        <Tween from={{ opacity: 1 }} to={{ opacity: 0, display: "none" }} />
    </Timeline>
)


export default About;
