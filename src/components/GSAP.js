import React, { Component } from "react";
import "./../styles/_title.scss";
import { gsap } from "gsap";
import "./../styles/_gsap.scss";

class GSAP extends Component {
  animateText = () => {
    gsap.to(".gsap__label", { duration: 3, rotation: 360, scale: 0.5 });
  };

  animateSquare = () => {
    gsap.to(".gsap__square", { duration: 2, x: 200, ease: "bounce" });
  };

  render() {
    return (
      <div>
        <section className="title">
          <a className="title__heading" href="https://greensock.com/gsap/">
            Green Sock Animation Platform
          </a>
        </section>
        <section className="gsap">
          <button className="gsap__button" onClick={this.animateText}>
            animate text
          </button>
          <p className="gsap__label">animate</p>
          <button className="gsap__button" onClick={this.animateSquare}>
            animate square
          </button>
          <div className="gsap__square"></div>
        </section>
      </div>
    );
  }
}
export default GSAP;
