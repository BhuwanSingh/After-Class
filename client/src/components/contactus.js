import React from 'react';
import Altaf from "../img/Perry.png";
import Bhumika from "../img/bhumika.jpg";
import Shrishesh from "../img/phineas.jpg";
import Bhuwan from "../img/ferb.webp";
import isha from "../img/isha2.jpg";

function Contactus() {
    return (
      <div className="contact-us-page">
        <h1 className="creator__heading ">MEET OUR CREATORS</h1>

        <div className="creator__row clearfix">
          <div className="creator__small-box">
            <div className="creator__card">
              <img
                src={Bhuwan}
                alt="creator-photo"
                className="creator__image"
              ></img>
              <p className="creator_name">Bhuwan Singh</p>
              <p className="creator_info">Back-End Developer</p>
              <a href="#" className="bts__small">
                Link to Github
              </a>
              <a href="#" className="bts__small">
                Link to LinkedIN
              </a>
            </div>
          </div>

          <div className="creator__small-box">
            <div className="creator__card">
              <img
                src={Bhumika}
                alt="creator-photo"
                className="creator__image"
              ></img>
              <p className="creator_name">Bhumika Gupta</p>
              <p className="creator_info">Front-End Developer</p>
              <a href="#" className="bts__small">
                Link to Github
              </a>
              <a href="#" className="bts__small">
                Link to LinkedIN
              </a>
            </div>
          </div>

          <div className="creator__small-box">
            <div className="creator__card">
              <img
                src={Shrishesh}
                alt="creator-photo"
                className="creator__image"
              ></img>
              <p className="creator_name">Shrishesh Pratik</p>
              <p className="creator_info">Back-End Developer</p>
              <a href="#" className="bts__small">
                Link to Github
              </a>
              <a href="#" className="bts__small">
                Link to LinkedIN
              </a>
            </div>
          </div>

          <div className="creator__small-box">
            <div className="creator__card">
              <img src={isha} alt="creator-photo" className="creator__image" />
              <p className="creator_name">Isha Jain</p>
              <p className="creator_info">Front-End Developer</p>
              <a href="#" className="bts__small">
                Link to Github
              </a>
              <a href="#" className="bts__small">
                Link to LinkedIN
              </a>
            </div>
          </div>

          <div className="creator__small-box">
            <div className="creator__card">
              <img
                src={Altaf}
                alt="creator-photo"
                className="creator__image"
              ></img>
              <p className="creator_name">Altaf Khan</p>
              <p className="creator_info">Front-End Developer</p>
              <a href="#" className="bts__small">
                Link to Github
              </a>
              <a href="#" className="bts__small">
                Link to LinkedIN
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contactus;
