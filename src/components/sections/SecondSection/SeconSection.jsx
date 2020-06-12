import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Proyects from "./Card/proyects";
import Skills from "./Card/Skills";

const SecondSection = () => (
  <Controller>
    <Scene triggerHook="onLeave" duration={1000} pin>
      {(progress) => (
        <div className="section-main">
          <Timeline totalProgress={progress} paused>
            <Tween from={{ fontSize: 0 }} to={{ fontSize: 30 }}>
              <div className="main">
                <h1 style={{fontWeight: 600}}>Web Development:</h1>
              </div>
            </Tween>

            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <div>
                <Proyects />
              </div>
            </Tween>

            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <div>
                <Skills />
              </div>
            </Tween>
          </Timeline>
        </div>
      )}
    </Scene>
  </Controller>
);

export default SecondSection;
