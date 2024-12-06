
import React from "react";
import './Profile.css';

export default function Test(){
    return(
        <div className="background_of_social_card">
            <div className="social_card">
                <div className="profile_image">
                    <img src="./images/profile.jpg"/>
                </div>
                <div className="who_i_am">
                    <h1 id="name">Jessica Randall</h1>
                    <h2 id="city">London,United Kingdom</h2>
                </div>
                <div className="career">
                    <h3 id="my_career">"Front-end developer and avid reader."</h3>
                </div>
                <div className="social_networks">
                    <div className="social_network_items">Github</div>
                    <div className="social_network_items">Frontend Mentor</div>
                    <div className="social_network_items">LinkedIn</div>
                    <div className="social_network_items">Twitter</div>
                    <div className="social_network_items">Instagram</div>
                </div>
            </div>
        </div>    
    )
}