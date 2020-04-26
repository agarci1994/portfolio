import React from "react"
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Title from './Card/title'
import Profile from './Card/profile'
import About from './Card/about'
import Study from './Card/study'

const FirstSections = () => (
    <Controller >
    <Scene triggerHook="onLeave" duration={10000} pin>
        {progress => (
            <div className="section-header">
                <Timeline totalProgress={progress} paused>
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                        <Title />
                    </Tween>
                    <Timeline
                        target={
                            <Profile />
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
                            <About />
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
                            <Study />
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
)

export default FirstSections
