import React from 'react'
import Logo from './images/green-leaves-logo-1.png';
import Email from './images/pngwing-4.png'
import RightLeaf from './images/pngwing-6.png'
import AccountIcon from './images/pngwing-8.png'
import PeopleIcon from './images/pngwing-9.png'
import "./CreateAccountPageStyle.css";
import "./CreateAccountPageStyleGuide.css";

export default function CreateAccount() {
    return (
        <div className="desktop">
            <div className="div">
                <div className="overlap">
                    <div className="overlap">
                        <div className="top-info">
                            <div className="overlap-group">
                                <p className="exposure-to-sunlight">
                                    Exposure to sunlight helps your&nbsp;&nbsp;body produce vitamin D, which is essential for bone health
                                    and immunity system.
                                </p>
                            </div>
                        </div>
                        <div className="top-border-page">
                            <div className="overlap-2">
                                <div className="text-wrapper">Home</div>
                                <div className="text-wrapper-2">Join</div>
                                <div className="text-wrapper-contact">Contact</div>
                                <img className="green-leaves-logo" alt="Green leaves logo" src={Logo} />
                            </div>
                        </div>
                        <img className="pngwing" alt="Pngwing" src={RightLeaf} />
                        <div className="text-wrapper-3">Create an Account</div>
                        <div className="rectangle" />
                        <img className="img" alt="Pngwing" src={PeopleIcon} />
                        <div className="frame">
                            <p className="i-wish-to-use-it-for">
                                I wish to use it for myself
                                <br />
                                (User Account)
                            </p>
                        </div>
                        <div className="rectangle-2" />
                        <p className="p">I wish to use it for my company, family or to manage multiple rooms (Manager Account)</p>
                        <p className="manage-one-room-in">
                            Manage one room in great detail
                            <br />
                            Add/Modify sensors
                            <br />
                            Receive alerts throughout the day
                            <br />
                            Access to statistics for the whole room
                        </p>
                        <p className="access-to-everything">
                            Access to everything under the&nbsp;&nbsp;User Account
                            <br />
                            Ability to add &amp; monitor multiple rooms
                            <br />
                            Export your data by sensor or room
                            <br />
                            Gain predictions and statistics for individual rooms and sensors
                        </p>
                    </div>
                    <img className="pngwing-2" alt="Pngwing" src={AccountIcon} />
                </div>
                <div className="group">
                    <div className="need-help-contact-us">
                        Need help?
                        <br />
                        Contact us!
                    </div>
                    <img className="pngwing-3" alt="Pngwing" src={Email} />
                </div>
            </div>
        </div>
    )
}

