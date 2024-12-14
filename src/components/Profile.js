import React from "react";
import './Profile.css';
import { FaXTwitter } from "react-icons/fa6";  
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si"


export default function Profile(){
    return(
    <>
        <div className="background_of_social_card">
            <img className="user_profile" src="./avatar-jessica.jpeg" alt="user-profile"/>
            <div className="intro">
                <h1>Jessica Randall</h1>
                <p className="city">London,United Kingdom</p>
            </div>

            <p className="my_career">"Front-end developer and avid reader."</p>

            <div className="social_media">
                <a href="/github"><FaGithub className="icons"/> Github</a>
                <a href="/frontendmenhrefr"><SiFrontendmentor className="front_icon" /> Frontend Mentor</a>
                <a href="/Linkedin"><FaLinkedin className="icons"/> LinkedIn</a>
                <a href="/twitter"><FaXTwitter className="icons"/> Twitter</a>
                <a href="/instagram"><FaInstagram className="icons"/> Instagram</a>
            </div>

        </div>
        
        <div className="signature">
            <p>Created by: <span style={{color:"#FFE31A"}}>Atiyeh</span></p>
        </div>

    </>
    )
}