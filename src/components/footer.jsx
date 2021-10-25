import React from 'react';
import {Link} from 'react-router-dom';

import icon from '../assets/icon/iconbot.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer ()  {
    return (
        <div className="footer">
            <div className="container"> 
            <div className="footer__wrapper">
                
            <div className="footer__icon"> <img src={icon} alt="Clersky" /></div>
            <h2 className="footer__title">A people company.</h2>
            
            <div className="footer__links">
                <ul>
                <li> <Link to='#'>  <img src={facebook} alt="My logo" /></Link></li>
                    <li><Link to='#'>  <img src={twitter} alt="My logo" /></Link></li>
                    <li><Link to='#'>  <img src={linkedin} alt="My logo" /></Link></li>
                    <li><Link to='#'>  <img src={instagram} alt="My logo" /></Link></li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    )
}


export default Footer;