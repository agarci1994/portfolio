import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Title from "./Card/title";
import Profile from "./Card/profile";
import About from "./Card/about";
import Study from "./Card/study";

const FirstSections = () => (
  <Controller>
    <Scene triggerHook="onLeave" duration={1000} pin>
      {(progress) => (
        <div className="section-header">
          <Timeline totalProgress={progress} paused>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <Title />
            </Tween>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <div>
                <Profile />
              </div>
            </Tween>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <div className="profile">
                <img src="../../../../images/photoProfile.png" alt="I" />
              </div>
            </Tween>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <div>
                <About />
              </div>
            </Tween>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <div>
                <Study />
              </div>
            </Tween>
          </Timeline>
        </div>
      )}
    </Scene>
  </Controller>
);

export default FirstSections;
