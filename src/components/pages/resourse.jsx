import React from 'react';

import price from '../../assets/price.png';
import exp from '../../assets/exp.png';

function Resourse ()  {
    return ( 
        <div className="resourse">
            <div className="container">
                <div className="resourse__top">
                    <h2 className="resourse__title">It's easy as 1, 2, 3</h2>
                    <p className="resourse__subtitle">Clerksy can help use your unique business needs. Here's how:</p>
                    <img className="resourse__price" src={price} alt="price" />
                    <button className="resourse__top-button">Book Free Discovery Call</button>
                </div>

                <div className="resourse__middle">
                    <div className="resourse__middle-text">
                        <h2 className="resourse__middle-title">Not just another <br/> HR resource.</h2>
                        <p className="resourse__middle-subtitle">Simple. Entertaining. Informative.</p>
                        <button className="resourse__middle-button">Download E-book</button>
                    </div>
                    <img className="resourse__middle-image" src={exp} alt="price" />
                </div>

                <div className="resourse__bottom">
                    <h2 className="resourse__bottom-title">Get Started With Clerksy</h2>
                    <p className="resourse__bottom-subtitle">Make sure your business puts people first.</p>
                    <button className="resourse__bottom-button">Book a Free Discovery Call</button>
                </div>
            </div>
        </div>
    )
}



export default Resourse;