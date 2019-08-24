import React from 'react';
import './footer.css';
// import SocialMediaIcons from 'react-social-media-icons';

function FooterComponent() {
    return(
        <footer>
            <div className="containerFooter">
                
                    <ul className="ulFooter">
                        <li className="liFooter">About</li>
                        <li className="liFooter">Support</li>
                        <li className="liFooter">Terms</li>
                        <li>Policy</li>
                        <li className="liFooter">Contact</li>
                    </ul>
                              
                     <ul className="ulFooter">
                        <li className="liFooter">Appartments</li>
                        <li className="liFooter">Houses</li>
                        <li className="liFooter">Villas</li>
                        <li className="liFooter">Mansions</li>
                        <li className="liFooter">—</li>
                    </ul>               
               
                    <ul className="ulFooter">
                        <li className="liFooter">New York</li>
                        <li className="liFooter">Los Angeles</li>
                        <li className="liFooter">Miami</li>
                        <li className="liFooter">Washington</li>
                        <li className="liFooter">—</li>
                    </ul> 
                
                
                    <p>This is text!<br/>

                    </p>

                
            </div>
            <hr/>
            <p className="footerEnd">Copyright © 2019</p>
        </footer>
    );
}
export default FooterComponent;