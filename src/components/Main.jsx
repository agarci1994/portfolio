import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import StyleMain from "../Style/main";

const Main = () => (
  <StyleMain>
    <Controller>
      <Scene triggerHook="onLeave" duration={10000} pin>
        {progress => (
          <div className="section-header">
            <Timeline totalProgress={progress} paused>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <h1>¡Bienvenido!</h1>
              </Tween>
              <Timeline
                target={
                  <div>
                    <p>Soy Alejandro García Rodríguez,</p>
                    <p>
                      Full Stack Web Developer <span className="cursor">_</span>
                    </p>
                  </div>
                }
              >
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
              </Timeline>

                <Timeline
                  target={
                    <div className="profile">
                      <img src="../images/photo.png" alt="I" />
                    </div>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                  <Tween
                    from={{ opacity: 1 }}
                    to={{ opacity: 0, display: "none" }}
                  />
                </Timeline>
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
                <Timeline
                  target={
                    <div>
                    <h2>Estudie:</h2>
                      <section className="study">
                        <article>
                          <img src="../images/UCM.png"/>
                          <p>Universidad Complutense de Madrid</p>
                          <p>Grado en comunicación audiovisual</p>
                        </article>
                        <article>
                          <img src="../images/lav.png" />
                          <p>MasterLAV</p>
                          <p>Master en arte contemporaneo</p>
                        </article>
                        <article>
                          <img src="../images/ironhack.png" />
                          <p>Ironhack</p>
                          <p>Bootcamp Desarrollo Web</p>
                        </article>
                      </section>
                    </div>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                  <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} />
                </Timeline>
              </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
    <Controller>
      <Scene triggerHook="onLeave" duration={10000} pin>
        {progress => (
          <div className="section-main">
            <Timeline totalProgress={progress} paused>
              <Timeline
                target={<div className="main">
               <h1>Web Development:</h1></div>}>
                  <Tween from={{ fontSize: 0 }} to={{ fontSize: 30 }} />
                <Timeline
                    target={
                        <section className="proyect">
                          <article>
                        <a href="#">
                      <img src="../../images/kindoftrippy.png" />
                            <p>The King of Trippy</p>
                      <p>Pequeño juego de recolección de pistas, con un climax que combina el terror psicológico y los clásicos de zombis. Desarrollado con Canvas y Vanilla Javascript en la tercera semana de IronHack.</p>
                         </a>
                          </article>
                          <article>
                        <a href="#">
                      <img src="../../images/elviajero.png" />
                            <p>El Viajero</p>
                      <p>Web app de viajes que ofrece información básica sobre la ciudad en la que te encuentras y permite la interacción con otros usuarios. Realizado con Node.js y MoongoDB en la sexta semana de IronHack.</p>
                        </a> 
                      </article>
                          <article>
                        <a href="#">
                      <img src="../../images/yayosapp.png" />
                            <p>Yayos</p>
                      <p>Single-page application que ofrece recursos para facilitar y gestionar las necesidades del día a día de las personas de la tercera edad .El proyecto se ha realizado con React para el cliente y Node.js para el servidor. Haciendo uso de: Reack Hooks, Style Components, Bootstrap-react, MongoDB, APIs, etc...</p>
                     </a>
                          </article>
                        </section>
                    }
                    >
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} />
                  </Timeline>
                  <Timeline
                    target={
                        <section className="proyect">
                    
                        </section>
                    }
                    >
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} />
                  </Timeline>
                <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} />
              </Timeline>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
    <div className="section-footer">
      <h3>Contacto:</h3>
      <p>alejandro.garci.rodr@gmail.com</p>
      <p>Calle Mohernando, 6, 28038 Madrid, España</p>
      <p>655215109</p>
      <p>https://github.com/agarci1994</p>
      <p>https://www.linkedin.com/in/alexgarciarodriguez/</p>
      <p>https://www.codewars.com/users/agarci1994</p>
    </div>
  </StyleMain>
);

export default Main;
