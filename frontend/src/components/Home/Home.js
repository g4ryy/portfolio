import React from 'react';
import Type from './Type';
import Particle from '../Particle';

export default function Home() {
    return (
        <section>
            <div className="home-section container-fluid" id="home">
                <Particle />
                <div className="container home-content">
                    <div className="row" style={{color:'white'}}>
                        <div className="col-md-8 home-header">
                            <h1 style={{ paddingBottom: 15}} className="heading">
                                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            </h1>

                            <h1 className="heading-name">
                                I'm
                                <strong className="main-name"> Gary Yansen</strong>
                            </h1>

                            <div style={{ padding: 50}}>
                                <h1 className="heading-des">
                                    And I'm a<Type />
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-4" style={{paddingBottom: 16}}>
                            <div className="profile-picture">
                                <div className="profile-picture-background" onClick></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
