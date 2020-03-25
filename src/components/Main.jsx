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
                        <a href="https://github.com/agarci1994/proyectGame">
                          <img src="../../images/kindoftrippy.png" />
                          <div className="margin">
                          <h2>The King of Trippy</h2>
                          <p>
                            Pequeño juego de recolección de pistas, con un
                            climax que combina el terror psicológico y los
                            clásicos de zombis. Desarrollado con Canvas y
                            Vanilla Javascript en la tercera semana de IronHack.
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
                            Web app de viajes que ofrece información básica
                            sobre la ciudad en la que te encuentras y permite la
                            interacción con otros usuarios. Realizado con
                            Node.js y MoongoDB en la sexta semana de IronHack.
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
                            facilitar y gestionar las necesidades del día a día
                            de las personas de la tercera edad .El proyecto se
                            ha realizado con React para el cliente y Node.js
                            para el servidor. Haciendo uso de: Reack Hooks,
                            Style Components, Bootstrap-react, MongoDB, APIs,
                            etc...
                          </p>
                          </div>
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
      <Scene triggerHook="onLeave" duration={1000} pin>
        {progress => 
        (<div className="section-footer">
            <Timeline totalProgress={progress} paused>
              <Tween from={{ y: 1500 }} to={{ y: 0 }}>
            <h3 className="text">Contacto:</h3>
             </Tween>
              <Tween from={{ y: 1000, x: 1000, rotation: -100 }} to={{ y: 0, x: 0, rotation:0 }}>
          <ul>
          <li>
              <p><a href="mailto::alejandro.garci.rodr@gmail.com"><div className="flex"><img src="../../images/mail.svg" /><p>Email</p></div></a></p>
          </li>
          <li>
              <p><a href="tel:+34655215109"><div className="flex"><img src="../../images/tel.svg" /><p>Telefono</p></div></a></p>
          </li>
          <li>
              <p><a href="https://github.com/agarci1994"><div className="flex"><img src="../../images/github.svg" /><p>Github</p></div></a></p>
          </li>
          <li>
              <p><a href="https://www.linkedin.com/in/alexgarciarodriguez/"><div className="flex"><img src="../../images/linkedin.svg" /><p>Linkedin</p></div></a></p>
          </li>
          <li>
              <p><a href="https://www.codewars.com/users/agarci1994"><div className="flex"><img src="../../images/codewars.svg" className="code" /><p>Codewars</p></div></a></p>
          </li>
          </ul>
              </Tween>
              <Tween from={{opacity: 0}} to={{opacity: 1}}>
                <div className="flex end">
                  <img src="../../images/code.svg" /><p>Happy Code!</p>
                </div>
</Tween>
          </Timeline>
          </div>)}
      </Scene>
    </Controller>
  </StyleMain>
);

export default Main;
