import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitLetters } from "react-gsap";
import { Back } from "gsap/EasePack";
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
                <Tween
                  from={{ opacity: 1 }}
                  to={{ opacity: 0, display: "none" }}
                />
              </Timeline>
              <Timeline
                target={
                  <div>
                    <h2>Estudie:</h2>
                    <section className="study">
                      <article>
                        <img src="../images/UCM.png" />
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
                target={
                  <div className="main">
                    <h1>Web Development:</h1>
                  </div>
                }
              >
                <Tween from={{ fontSize: 0 }} to={{ fontSize: 30 }} />
                <Timeline
                  target={
                    <section className="proyect">
                      <article>
                        <a href="#">
                          <img src="../../images/kindoftrippy.png" />
                          <p>The King of Trippy</p>
                          <p>
                            Pequeño juego de recolección de pistas, con un
                            climax que combina el terror psicológico y los
                            clásicos de zombis. Desarrollado con Canvas y
                            Vanilla Javascript en la tercera semana de IronHack.
                          </p>
                        </a>
                      </article>
                      <article>
                        <a href="#">
                          <img src="../../images/elviajero.png" />
                          <p>El Viajero</p>
                          <p>
                            Web app de viajes que ofrece información básica
                            sobre la ciudad en la que te encuentras y permite la
                            interacción con otros usuarios. Realizado con
                            Node.js y MoongoDB en la sexta semana de IronHack.
                          </p>
                        </a>
                      </article>
                      <article>
                        <a href="#">
                          <img src="../../images/yayosapp.png" />
                          <p>Yayos</p>
                          <p>
                            Single-page application que ofrece recursos para
                            facilitar y gestionar las necesidades del día a día
                            de las personas de la tercera edad .El proyecto se
                            ha realizado con React para el cliente y Node.js
                            para el servidor. Haciendo uso de: Reack Hooks,
                            Style Components, Bootstrap-react, MongoDB, APIs,
                            etc...
                          </p>
                        </a>
                      </article>
                    </section>
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
                    <section className="skill-card">
                      <div className="card">
                        <div className="border">
                          <h4>HTML</h4>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <img src="../../images/html5.png" />
                            <p>HTML5</p>
                          </div>
                          <div className="content">
                            <img src="../../images/react.png" />
                            <p>JSX</p>
                          </div>
                          <div className="content">
                            <img src="../../images/handler.png" />
                            <p>Handlerbars.js</p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="border">
                          <h4>CSS</h4>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <img src="../../images/css3.png" />
                            <p>CSS3</p>
                          </div>
                          <div className="content">
                            <img src="../../images/sass.png" />
                            <p>SASS</p>
                          </div>
                          <div className="content">
                            <img src="../../images/materialize.png" />
                            <p>Materialize</p>
                          </div>
                          <div className="content">
                            <img src="../../images/materialui.png" />
                            <p>Material UI</p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="border">
                          <h4>Javascript</h4>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <img src="../../images/react.png" />
                            <p>React</p>
                          </div>
                          <div className="content">
                            <img src="../../images/javascript.png" />
                            <p>ES10</p>
                          </div>
                          <div className="content">
                            <img src="../../images/jquery.png" />
                            <p>JQuery</p>
                          </div>
                          <div className="content">
                            <img src="../../images/nodejs.png" />
                            <p>Node</p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="border">
                          <h4>Back-end</h4>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <img src="../../images/mongodb.png" />
                            <p>MongoDB</p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="border">
                          <h4>Otras</h4>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <img src="../../images/github.png" />
                            <p>Github</p>
                          </div>
                          <div className="content">
                            <img src="../../images/heroku.png" />
                            <p>Heroku</p>
                          </div>
                          <div className="content">
                            <img src="../../images/photoshop.png" />
                            <p>Photoshop</p>
                          </div>
                          <div className="content">
                            <img src="../../images/fcpx.png" />
                            <p>Final Cut Pro</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                </Timeline>
              </Timeline>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>

    <Controller>
      <Scene pin={false} reverse={true} duration={500} offset={-300}>
        <Tween
          wrapper={<div className="section-footer" />}
          staggerFrom={{
            left: -2000,
            rotation: -720,
            opacity: 0,
            color: "#ff0000",
            ease: "Expo.easeOut"
          }}
          stagger={0.15}
          onCompleteAll={() => {
            console.log("on complete all");
          }}
        >
          <SplitLetters>
            <h3 className="text">Contacto:</h3>
          </SplitLetters>
        </Tween>
      </Scene>
    </Controller>
    
    <Controller>
      <Scene duration={300} offset={300} pin>
        <Tween
          wrapper={<ul className="devs2" />}
          staggerFrom={{
            opacity: 0,
            cycle: {
              x: i => (i + 1) * 50
            },
            ease: Back.easeOut
          }}
          stagger={0.1}
        >
          <li>
            <p>alejandro.garci.rodr@gmail.com</p>
          </li>
          <li>
            <p>Calle Mohernando, 6, 28038 Madrid, España</p>
          </li>
          <li>
            <p>655215109</p>
          </li>
          <li>
            <p>https://github.com/agarci1994</p>
          </li>
          <li>
            <p>https://www.linkedin.com/in/alexgarciarodriguez/</p>
          </li>
          <li>
            <p>https://www.codewars.com/users/agarci1994</p>
          </li>
        </Tween>
      </Scene>
    </Controller>
    <div className="section" />
  </StyleMain>
);

export default Main;