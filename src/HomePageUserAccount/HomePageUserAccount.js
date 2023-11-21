import React from 'react'
import "./HomePageUserAccountStyle.css";
import "./HomePageUserAccountStyleGuide.css";
import AddButton from './images/add-more.png';
import AirPollutionIcon from './images/air-pollution.png';
import GreatJobIcon from './images/great-job-1.png';
import Logo from './images/green-leaves-logo-1.png';
import HumidityIcon from './images/humidity.png';
import WhiteDownArrow from './images/pngwing-3.png';
import EmailIcon from './images/pngwing-4.png';
import SettingsIcon from './images/pngwing-5.png';
import SoundIcon from './images/sound-icon.png';
import SunlightIcon from './images/sunlight.png';
import UserIcon from'./images/user-icon.png';


export default function HomePageUserAccount() {
  return (
    <div className="desktop">
      <div className="div">
        <div className="top-border-page">
          <div className="overlap-group">
            <div className="text-wrapper">Home</div>
            <div className="text-wrapper-2">Contact</div>
            <img className="user-icon" alt="User icon" src={UserIcon} />
            <img className="green-leaves-logo" alt="Green leaves logo" src={Logo} />
          </div>
        </div>
        <div className="top-info">
          <div className="overlap">
            <p className="p">
              We stand with your health. That is why we care about climate change. Stand with us. Recycle.
            </p>
          </div>
        </div>
        <div className="overlap-2">
          <div className="room-current-routine">
            Room:
            <br />
            Current Routine:
            <br />
            Today’s alerts:
          </div>
          <div className="frame">
            <div className="frame-2">
              <div className="group">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <img className="pngwing" alt="Pngwing" src={WhiteDownArrow} />
                  <div className="text-wrapper-3">LIVING ROOM</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-3">
                  <div className="rectangle-2" />
                  <img className="pngwing" alt="Pngwing" src={WhiteDownArrow} />
                  <div className="text-wrapper-4">FALL - GMT +2</div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-4">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-5">2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <p className="based-off-your">
            Based off your report, today has been an awesome day!
            <br />
            Keep it up!
          </p>
          <img className="great-job" alt="Great job" src={GreatJobIcon} />
          <div className="text-wrapper-6">GREAT JOB!</div>
        </div>
        <div className="overlap-6">
          <div className="overlap-7">
            <div className="sensors">
              <img className="air-pollution" alt="Air pollution" src={AirPollutionIcon} />
              <img className="sunlight" alt="Sunlight" src={SunlightIcon} />
              <img className="humidity" alt="Humidity" src={HumidityIcon} />
              <img className="sound-icon" alt="Sound icon" src={SoundIcon}/>
              <img className="add-more" alt="Add more" src={AddButton} />
            </div>
            <div className="text-wrapper-7">Add More</div>
            <p className="text-wrapper-8">Click to view your detailed report:</p>
          </div>
          <div className="text-wrapper-9">Air pollution</div>
          <div className="text-wrapper-10">Sun Exposure</div>
          <div className="text-wrapper-11">Humidity</div>
          <div className="text-wrapper-12">Sound Pollution</div>
        </div>
        <div className="overlap-8">
          <div className="text-wrapper-13">Your sensors</div>
          <img className="img" alt="Pngwing" src={SettingsIcon} />
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-14">17 NOVEMBER 2023</div>
        </div>
        <div className="group-2">
          <div className="need-help-contact-us">
            Need help?
            <br />
            Contact us!
          </div>
          <img className="pngwing-2" alt="Pngwing" src={EmailIcon} />
        </div>
      </div>
    </div>
  )
}
