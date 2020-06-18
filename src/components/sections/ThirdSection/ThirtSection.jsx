import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Contact from "./Card/Contact";
import End from "./Card/End";

const ThirtSection = () => (
  <Controller>
    <Scene triggerHook="onLeave" duration={999} pin>
      {progress => (
        <div className="section-footer">
          <Timeline totalProgress={progress} paused>
            <Tween from={{ y: 1500 }} to={{ y: 0 }}>
              <h3 className="text-footer">Contacto:</h3>
            </Tween>
            <Tween
              from={{ y: 1000, x: 1000, rotation: -100 }}
              to={{ y: 0, x: 0, rotation: 0 }}
            >
              <div>
              <Contact />
              </div>
            </Tween>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <div>
              <End />
              </div>
            </Tween>
          </Timeline>
        </div>
      )}
    </Scene>
  </Controller>
);

export default ThirtSection;
