import React from "react";
import { Tween, Timeline } from "react-gsap";

const Study = () => (
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
)


export default Study;
