import React from "react";
import { Link } from "react-router-dom";
import './landingpage.css'

const LandingPage=()=>{
    return(
        <div className="parentdiv"> 
            <div className="rightdiv">
                <img src='https://static-cse.canva.com/image/124971/desktop-wallpaper.jpg' alt='Background Image'></img>
            </div>
            <div className="leftdiv">
                <h2 className="text">PROJECT BY AMAL S</h2>
                <Link to='user'>
                <button className="enterbutton">
                Enter</button></Link>
            </div>
        </div>
    );
}
export default LandingPage;