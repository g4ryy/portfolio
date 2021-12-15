import React from 'react';
import Type from './Type';
import Particle from '../Particle';

export default function Home() {
    return (
            <div className="home-section container-fluid" id="home">
                <Particle />
                <div className="container home-content">
                    <div className="row">
                        <div className="col-md-8 home-header">
                            <h1 style={{ paddingBottom: 15}} className="heading">
                                Hi there! My name is
                                <span></span>
                            </h1>

                            <h1 className="heading-name">
                                Gary Yansen
                                <span></span>
                            </h1>

                            <div style={{ padding: 50}}>
                                <h2 className="heading-des">
                                    And I'm a<Type />
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-4" style={{paddingBottom: 16}}>
                            <div className="profile-picture">
                                <div className="profile-picture-background" onClick></div>
                            </div>

                            <div id="resume"> resume</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
