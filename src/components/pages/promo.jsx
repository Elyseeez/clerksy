import React from 'react';

import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import group from '../../assets/group.png';


function Promo (){
    return ( 
        <div className="promo"> 
            <div className="container"> 
                <div className="promo__quality">
                    <h2 className="promo__title">HR Production of the Highest Quality</h2>
                    <div className="promo__list">
                        <ul>
                            <li className="promo__client-item"> <img className="promo__client-image" src={one} alt="client" />
                            <p className="promo__client-text">Educates & Informs <br/>Employee Expectations </p>
                            </li>
                            <li className="promo__client-item"><img className="promo__client-image" src={two} alt="client" />
                            <p className="promo__client-text">Protects Your Business <br/>Just in Case</p>
                            </li>
                            <li className="promo__client-item"><img className="promo__client-image" src={three} alt="client" />
                            <p className="promo__client-text">Manages & Stores <br/>Important Documents</p>
                            </li>
                            <li className="promo__client-item"><img className="promo__client-image" src={four} alt="client" />
                            <p className="promo__client-text">Create a Healthy<br/>Work Environment</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="promo__shapes">
                    <h2 className="promo__shapes-title">Employees come in all shapes and <br/> sizes. Find the right fit.</h2>
                    <p className="promo__shapes-subtitle">Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts <br/> and make sure you are compliant with work and safety boards.</p>
                    <img src={group} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Promo;