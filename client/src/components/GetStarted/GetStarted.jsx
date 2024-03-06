import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div>
      <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-container">
            <span className="primaryText">Get Started with homies</span>
            <span className="secondaryText">
              Subscribe and find attractive price quotes from our website
              <br />
              Find Your residence soon
            </span>
            <button className="button">
                <a href="mailto:prabhat8701.ps@gmail.com">Get Started</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
