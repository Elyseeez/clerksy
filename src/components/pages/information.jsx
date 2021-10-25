import React from 'react';

import girl from '../../assets/girl.png';
import boy from '../../assets/boy.png';
import stripe from '../../assets/stripe.png';
import google from '../../assets/google.png';
import notion from '../../assets/notion.png';
import gusto from '../../assets/gusto.png';
import aircall from '../../assets/aircall.png';






function Information ()  {
    return (
        <div className="information">
            <div className="container">
                <div className="information__content">
                    <div className="information__hr">
                        <div> <img src={girl} alt="girl" /></div>
                        <div className="information__text-first">
                            <h2 className="information__title-first">Put the human <br/> back in HR.</h2>
                            <p className="information__subtitle-first">Your employees are the real stars. Show the love and help them perform!</p>
                        </div>
                    </div>
                    <div className="information__parts">
                        <div className="information__text-two">
                            <h2 className="information__title-two">You don’t have to <br/> play all the parts..</h2>
                            <p className="information__subtitle-two">Sales, accounting, HR— Oh My! You can’t do <br/> it all - let Clerksy help.</p>
                        </div>
                        <div> <img src={boy} alt="boy" /></div>
                    </div>
                </div>
            <div className="information__bottom">
                <h2 className="information__bottom-title">We partner with the best</h2>
                <div className="information__clients">
                    <ul>
                        <li> <img src={stripe} alt="client" /></li>
                        <li><img src={google} alt="client" /></li>
                        <li><img src={notion} alt="client" /></li>
                        <li><img src={gusto} alt="client" /></li>
                        <li><img src={aircall} alt="client" /></li>
                    </ul>
                </div>
            </div>

            </div>
        </div>
    )
}



export default Information;