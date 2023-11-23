import React from 'react'
import "./UserSensorStatisticsStyle.css";
import "./UserSensorStatisticsStyleGuide.css";

import AirPollutionIcon from "./images/air-pollution.png";
import ArrowRooms from "./images/arrow-rooms.png";
import ArrowRoutines from "./images/arrow-routines.png";
import ArrowSensors from "./images/arrow-sensors.png";
import Graph from "./images/bar-graph-presentation.png";
import BedroomIcon from "./images/bedroom.png";
import CalendarIcon from "./images/calendar-icon.png";
import GreenLeaves from "./images/green-leaves-logo.png";
import HistoryIcon from "./images/historyicon.png";
import HouseIcon from "./images/house-icon.png";
import HumidityIcon from "./images/humidity.png";
import KitchenIcon from "./images/kitchen.png";
import LivingRoomIcon from "./images/livingroom.png";
import ManagerIcon from "./images/manager-icon.png";
import EmailIcon from "./images/pngwing-4.png";
import SettingsIcon1 from "./images/pngwing-5.png";
import BorderLeaves from "./images/pngwing-11.png";
import SensorIcon from "./images/sensoricon.png";
import SettingsIcon2 from "./images/settings.png";
import SoundIcon from "./images/sound-icon.png";
import StatsIcon from "./images/statsicon.png";
import SunlightIcon from "./images/sunlight.png";
import UserIcon from "./images/user-icon.png";

export default function UserSensorStatistics() {
    return (
        <div className="desktop">
            <div className="div">
                <div className="overlap">
                    <div className="overlap-group">
                        <img className="pngwing" alt="Pngwing" src={BorderLeaves} />
                        <div className="top-info">
                            <div className="exposure-to-sunlight-wrapper">
                                <p className="exposure-to-sunlight">
                                    Poor air quality may contribute to conditions like asthma and other respiratory diseases.
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="need-help-contact-us">
                                Need help?
                                <br />
                                Contact us!
                            </div>
                            <img className="img" alt="Pngwing" src={EmailIcon} />
                        </div>
                        <div className="rectangle" />
                        <img className="manager-icon" alt="Manager icon" src={ManagerIcon} />
                        <div className="text-wrapper">Task_Managers</div>
                        <div className="rectangle-2" />
                        <div className="frame">
                            <div className="ellipse" />
                            <div className="text-wrapper-2">2</div>
                        </div>
                        <div className="text-wrapper-3">New Notifications</div>
                        <img className="sensoricon" alt="Sensoricon" src="sensoricon.png" />
                        <img className="house-icon" alt="House icon" src="house-icon.png" />
                        <img className="calendar-icon" alt="Calendar icon" src="calendar-icon.png" />
                        <img className="statsicon" alt="Statsicon" src="statsicon.png" />
                        <img className="historyicon" alt="Historyicon" src="historyicon.png" />
                        <div className="text-wrapper-4">My Sensors</div>
                        <div className="text-wrapper-5">My Routines</div>
                        <div className="text-wrapper-6">Statistics</div>
                        <div className="text-wrapper-7">History</div>
                        <img className="arrow-routines" alt="Arrow routines" src="arrow-routines.png" />
                        <div className="rooms">
                            <div className="overlap-2">
                                <img className="humidity" alt="Humidity" src="humidity-2.png" />
                                <img className="humidity-2" alt="Humidity" src="humidity-3.png" />
                                <img className="air-pollution" alt="Air pollution" src="air-pollution-2.png" />
                                <img className="img-2" alt="Settings" src="settings.png" />
                                <div className="text-wrapper-8">Living Room</div>
                                <div className="text-wrapper-9">Kitchen</div>
                                <div className="text-wrapper-10">Bedroom 1</div>
                                <div className="text-wrapper-11">Bedroom 2</div>
                                <div className="text-wrapper-12">R. Settings</div>
                            </div>
                            <div className="text-wrapper-13">My Rooms</div>
                            <img className="arrow-rooms" alt="Arrow rooms" src="arrow-rooms.png" />
                        </div>
                        <div className="sensors">
                            <div className="overlap-3">
                                <div className="sunlight-wrapper">
                                    <img className="sunlight" alt="Sunlight" src="sunlight.png" />
                                </div>
                                <img className="rectangle-3" alt="Rectangle" src="rectangle-18.svg" />
                                <div className="text-wrapper-14">Air Quality</div>
                                <div className="text-wrapper-15">Sunlight</div>
                                <div className="text-wrapper-16">Humidity</div>
                                <div className="text-wrapper-17">Noise</div>
                                <div className="text-wrapper-18">S. Settings</div>
                                <img className="humidity-3" alt="Humidity" src="humidity.png" />
                                <img className="sound-icon" alt="Sound icon" src="sound-icon.png" />
                                <img className="air-pollution-2" alt="Air pollution" src="air-pollution.png" />
                                <img className="img-2" alt="Pngwing" src="pngwing-5.png" />
                            </div>
                            <img className="arrow-sensors" alt="Arrow sensors" src="arrow-sensors.png" />
                        </div>
                        <img className="line" alt="Line" src="line-1.svg" />
                        <img className="line-2" alt="Line" src="line-2.svg" />
                        <div className="img-wrapper">
                            <img className="sunlight" alt="Sunlight" src="image.png" />
                        </div>
                        <img className="line-3" alt="Line" src="line-3.svg" />
                        <img className="line-4" alt="Line" src="line-4.svg" />
                        <div className="text-wrapper-19">Predictions</div>
                        <img className="bar-graph" alt="Bar graph" src="bar-graph-presentation-1-1.png" />
                        <p className="KITCHEN-area-is-at">
                            KITCHEN area is at risk. Try maintaining a regular air flow for the following 3 days. Air Quality will
                            drop by 25% otherwise.
                            <br />
                            BEDROOM 2 lacks sunlight. Keep any curtains that might block the sun open between 8:00 AM and 18:00 PM.
                            <br />
                            Maintain LIVING ROOM conditions. This area has already improved by 30% since last week!
                            <br />
                            BEDROOM 1 area is at risk. Keep windows closed and try to maintain a more peaceful environment. It has
                            been 40% louder than last week!
                        </p>
                    </div>
                    <p className="p">Your rooms’ well being of today</p>
                </div>
                <div className="top-border-page">
                    <div className="overlap-4">
                        <div className="text-wrapper-20">Home</div>
                        <div className="text-wrapper-21">Contact</div>
                        <img className="user-icon" alt="User icon" src="user-icon.png" />
                        <img className="green-leaves-logo" alt="Green leaves logo" src="green-leaves-logo-1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};
