import React from 'react';
import logo from '../img/creator.png';

function Contactus() {
    return (
      <div classNamec="contact-us-page">
        <h1 className="creator__heading">MEET OUR CREATORS</h1>
        <div className="creator__row">
          <div className="creator__small-box">
            <img
              src={logo}
              alt="creator-photo"
              className="creator__image"
            ></img>
            <p className="creator_name">Bhuwan Singh</p>
            <p className="creator_info">Joint fuuko sab bhul jao</p>
          </div>

          <div className="creator__small-box">
            <img
              src={logo}
              alt="creator-photo"
              className="creator__image"
            ></img>
            <p className="creator_name">Bhuwan Singh</p>
            <p className="creator_info">Joint fuuko sab bhul jao</p>
          </div>

          <div className="creator__small-box">
            <img
              src={logo}
              alt="creator-photo"
              className="creator__image"
            ></img>
            <p className="creator_name">Bhuwan Singh</p>
            <p className="creator_info">Joint fuuko sab bhul jao</p>
          </div>

          <div className="creator__small-box">
            <img
              src={logo}
              alt="creator-photo"
              className="creator__image"
            ></img>
            <p className="creator_name">Bhuwan Singh</p>
            <p className="creator_info">Joint fuuko sab bhul jao</p>
          </div>

          <div className="creator__small-box">
            <img
              src={logo}
              alt="creator-photo"
              className="creator__image"
            ></img>
            <p className="creator_name">Bhuwan Singh</p>
            <p className="creator_info">Joint fuuko sab bhul jao</p>
          </div>
        </div>
      </div>
    );
}

export default Contactus;
