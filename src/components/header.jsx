import React from 'react';
import icon from '../assets/icon/main.png'

function Header ()  { 
    return ( 
        <div className="header">
             <div className="container">
                 <div className="header__top">
                     <div className="header__icon"> <img src={icon} alt="Clersky" /></div>
                        <div className="header__btn"> 
                            <button className="header__button">Get Start</button>
                        </div>
                 </div> 
            <div className="header__content">
                <div className="header__title">Running the show <br/> has never been so <br/> easy.</div>
                <div className="header__subtitle">Ready to put the human back in HR? Clerksy helps you <br/> set the stage with an inclusive and compliant <br/> workplace.</div>
            </div>

             </div>
        </div>

    )
}


export default Header;
