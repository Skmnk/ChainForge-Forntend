import React from "react";
import './OurTeam.css';
const OurTeam =() =>{
    return (
        <>
            <br />
            <h3>Our Team</h3>
            <div className="ourteam-container">
                <div className="ourteam--main">
                    <div className="card-inner">
                        <div className="card-front">
                            <p>Sri Krishna</p>
                        </div>
                        <div className="card-back">
                            <p>Position : Founder and CEO</p>
                        </div>
                    </div>
                </div>
                <div className="ourteam--main">
                    <div className="card-inner">
                        <div className="card-front">
                            <p>Priya</p>
                        </div>
                        <div className="card-back">
                            <p>Position : COO</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam;