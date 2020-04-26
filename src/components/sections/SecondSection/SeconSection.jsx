import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Proyects from './Card/proyects'
import Skills from './Card/Skills'

const SecondSection = () => (
  <Controller >
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
                <Proyects />
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
                <Skills />
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
);

export default SecondSection;
