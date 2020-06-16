import React from 'react';
import classes from './MainHeader.css';
import adamPic from '../../assets/images/me-bw.jpg';
import linkedinLogo from '../../assets/icons/linkedin-logo.jpg';
import codepenLogo from '../../assets/icons/codepen-logo.png';
import locationPin from '../../assets/icons/location-pin.png';

const mainHeader = (props) => (
    <div className={classes.MainHeader}>

        <div className={classes.MainHeaderContent}>

            <div className={classes.MainHeaderCTA}>
                <div>
                    <h1>Hi, I'm Adam</h1>
                    <h2>I'm a Web Developer based in California.</h2>
                </div>
                <img className={classes.AdamImage} src={adamPic}></img>
            </div>


            <div className={classes.MainHeaderLocation}>
                <img className={classes.LocationPinImage} src={locationPin}></img>
                <h3>Sacramento, CA</h3>
            </div>


            {/* MAKE OWN COMPONENT */}
            <div className={classes.HeaderIconStrip}>
                <a href="https://www.linkedin.com/in/adam-martin14/" target="_blank">
                    <img className={classes.IconImage} src={linkedinLogo}></img>
                </a>

                <a href="https://codepen.io/a-martin" target="_blank">
                    <img className={classes.IconImage} src={codepenLogo}></img>
                </a>
            </div>
            
        </div>
                
    </div>
);

export default mainHeader;