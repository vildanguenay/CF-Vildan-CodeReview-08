import React from 'react';
import './footer.css';
import FooterChild1 from './FooterChild1';
import FooterChild2 from './FooterChild2';
import FooterChild3 from './FooterChild3';
// import SocialMediaIcons from 'react-social-media-icons';

function FooterComponent() {
    return(
        <footer>
            <div className="containerFooter">
                
                    <FooterChild1/>
                    <FooterChild2/>
                    <FooterChild3/>               
                
                    <p>This is text!<br/></p>              
            </div>
            <hr/>
            <p className="footerEnd">Copyright © 2019</p>
        </footer>
    );
}
export default FooterComponent;