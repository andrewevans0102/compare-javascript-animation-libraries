import React, { Component } from "react";
import anime from "animejs";
import "./../styles/_anime.scss";
import "./../styles/_title.scss";

class Anime extends Component {
  animateText = () => {
    anime({
      targets: ".anime__label",
      translateX: "250px",
      rotate: "1turn",
      backgroundColor: "#FFC0CB",
      duration: 800,
      direction: "alternate"
    });
  };

  animateTimeline = () => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
      direction: "alternate"
    });

    tl
    .add({
      targets: '.anime__timeline--pink',
      translateX: 250,
    })
    .add({
      targets: '.anime__timeline--blue',
      translateX: 250,
    })
    .add({
      targets: '.anime__timeline--yellow',
      translateX: 250,
    });
  };

  // if you want to show the animation on load use the event here
  // componentDidMount() {
  //   anime({
  //     targets: ".container__label",
  //     translateX: 250,
  //     rotate: "1turn",
  //     backgroundColor: "#FFF",
  //     duration: 800,
  //     direction: "alternate"
  //   });
  // }

  render() {
    return (
      <div>
        <section className="title">
          <a
            className="title__heading"
            href="https://github.com/juliangarnier/anime/"
          >
            Anime.js
          </a>
        </section>
        <section className="anime">
          <button className="anime__button" onClick={this.animateText}>
            animate text
          </button>
          <p className="anime__label">action</p>
          <button className="anime__button" onClick={this.animateTimeline}>
            animate timeline
          </button>
          <div className="anime__timeline">
            <div className="anime__timeline--pink"></div>
            <div className="anime__timeline--blue"></div>
            <div className="anime__timeline--yellow"></div>
          </div>
        </section>
      </div>
    );
  }
}
export default Anime;
