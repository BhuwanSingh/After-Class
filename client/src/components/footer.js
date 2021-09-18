import React from 'react';
import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            
            <ul class="footer__links">
            
                <li><NavLink className = "flink1" to = {`/ContactUs`}>Contact us</NavLink></li>
            
            
            </ul>
            


        </div>
    )
}

export default Footer;
