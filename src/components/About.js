import React from "react";
import './About.css'
const About =() =>{
    return (
        <>
            <div className="container">
                <h3 className="h3">About Us</h3>
                <div className="palette">
                    <div className="color"><span>We Are More Than A Web3 Consulting Agency</span></div>
                    <div className="color"><span>With 15+ years of combined blockchain experience and 30+ years in development & cybersecurity, ChainForge Technologies is your one stop solution for all yours needs.</span></div>
                    <div className="color"><span>We bring together knowledge and expertise of Decentralized Finance, NFT's, DAO's, Blockchain Bridges, Core infrastructure, Web Design, Firewalls, SIEM solutions.</span></div>
                    <div className="color"><span>We at ChainForge Technologies are dedicated to making your Project a success story. </span></div>
                    <div className="color"><span>We utilize our extensive network to create an efficient and sustainable development environment, ensuring high-quality results for your project.</span></div>
                </div>
                <div id="stats">
                    <span>53421 saves</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"></path>
                        </svg>
                </div>
            </div>
        </>
    )
}

export default About;