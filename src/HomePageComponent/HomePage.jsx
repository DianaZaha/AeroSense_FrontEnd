import React from 'react';
import "./HomePageStyle.css";
import "./HomePageStyleGuide.css";
import AeroQR from './images/aero-sensor-qr.png';
import BrainPNG from './images/brain-icon.png';
import LeftLeaf from './images/painted-leaf-l.png';
import RightLeaf from './images/painted-leaf-r.png';
import UserIcon from './images/user-icon.png';
import LeavesLogo from './images/green-leaves-logo-1.png';
import PeopleIcon from './images/people-3.png';
import Diagram from './images/pngwing-2.png';
import Circles from './images/pngwing-1.png';


export default function HomePage() {
  return (
    <div className="home-page">
      <div className="div">
        <div className="bottom-info">
          <div className="overlap-group">
            <div className="text-wrapper">ABOUT US</div>
            <div className="text-wrapper-2">MORE</div>
            <div className="text-wrapper-3">Aerosense Plans</div>
            <div className="terms-conditions">Terms &amp; Conditions</div>
            <div className="text-wrapper-4">Partners</div>
            <div className="text-wrapper-5">Product Help</div>
            <div className="text-wrapper-6">Support Center</div>
          </div>
        </div>
        <div className="green-break-QR">
          <div className="overlap">
            <p className="don-t-lose-touch">
              <span className="span">
                Don’t lose touch with your health!
                <br />
              </span>
              <span className="text-wrapper-7">Download AEROSENSE on your mobile</span>
            </p>
            <img className="aerosensor-QR" alt="Aerosensor QR" src={AeroQR} />
          </div>
        </div>
        <div className="element-white-box-wrapper">
          <div className="element-white-box">
            <img className="pngwing" alt="Pngwing" src={Circles} />
            <p className="p">LEARN HOW TO BETTER OPTIMIZE THE WORLD AROUND YOU</p>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Learn More</div>
            </div>
            <p className="text-wrapper-9">
              Keep track of some of the most important aspects of your health, from air quality to sunlight exposure.
            </p>
          </div>
        </div>
        <div className="overlap-2">
          <div className="rectangle" />
          <div className="element-green-box">
            <p className="text-wrapper-10">A HEALTHY ENVIRONMENT FOR A HEALTHY MIND</p>
            <div className="overlap-3">
              <div className="text-wrapper-11">Sign Up Here</div>
            </div>
            <p className="text-wrapper-12">
              We believe in practices that connect your mental and physical health to the health of our planet. Make the
              best of your surroundings by using our product.
            </p>
            <img className="brain-icon" alt="Brain icon" src={BrainPNG} />
          </div>
          <div className="top-box">
            <div className="overlap-4">
              <div className="header" />
              <img className="painted-leaf-r" alt="Painted leaf r" src={RightLeaf} />
              <img className="painted-leaf-l" alt="Painted leaf l" src={LeftLeaf} />
              <img className="green-leaves-logo" alt="Green leaves logo" src={LeavesLogo} />
              <div className="text-wrapper-13">AeroSense</div>
              {/* <img className="down-arrow" alt="Down arrow" src={DownArrow} /> */}
              <p className="text-wrapper-14">Care for your environment. Care for yourself</p>
            </div>
          </div>
          <div className="top-border-page">
            <div className="overlap-5">
              <div className="text-wrapper-15">Home</div>
              <div className="text-wrapper-16">Contact</div>
              <img className="user-icon" alt="User icon" src={UserIcon} />
            </div>
          </div>
        </div>
        <div className="overlap-6">
          <div className="element-white-box-2">
            <div className="aerosense-premium">Aerosense Premium</div>
            <img className="people" alt="People" src={PeopleIcon} />
            <p className="text-wrapper-17">Share the care with those around you</p>
            <div className="overlap-7">
              <div className="text-wrapper-18">Go Premium</div>
            </div>
            <p className="text-wrapper-19">
              Become a Manager and access data for more than one room. Use our data to keep all the people in your life
              safe. A good environment benefits everyone!
            </p>
          </div>
        </div>
        <div className="element-green-box-wrapper">
          <div className="element-green-box-2">
            <img className="img" alt="Pngwing" src={Diagram} />
            <p className="MEASURE-THE-HEALTH">
              <span className="text-wrapper-20">MEASURE THE HEALTH OF YOUR SURROUNDINGS IN </span>
              <span className="text-wrapper-20">REAL TIME</span>
            </p>
            <div className="find-out-more-wrapper">
              <div className="find-out-more">Find Out More</div>
            </div>
            <p className="text-wrapper-21">
              We will notify you each time one of our sensors detect a drop in your quality of life. All you have to do
              is keep an eye out for our tips!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}