import React from 'react';

import couple from '../../assets/couple.png';
import company from '../../assets/company.png';
import success from '../../assets/success.png';
import landscape from '../../assets/landscape.png';

function About () { 
    return (
        <div className="about"> 
        <div className="container">
            <div className="about__scene">
                <div className="about__text"> 
                <h2 className="about__text-title">How the scenes <br/> fit together</h2>
                <p className="about__text-subtitle">Employee Training & Development, Diversity <br/> & Inclusion Programs, and Conflict <br/> Resolution.</p>
                </div>
                <img className="about__image" src={couple} alt="couple" />
            </div>

            <div className="about__interest">
                <div className="about__interest-text">
                    <h2 className="about__interest-title">Consider everyone's best interest</h2>
                    <p className="about__interest-subtitle">HR is for everyone. Clerksy can help you.</p>
                </div>
              <div className="about__interest-list">
                  <ul>
                      <li><img src={company} alt="company" /></li>
                      <li><img src={success} alt="success" /></li>
                      <li><img src={landscape} alt="landscape" /></li>
                  </ul>
                  </div>  

            </div>
        </div>
        </div>
    )
}


export default About;