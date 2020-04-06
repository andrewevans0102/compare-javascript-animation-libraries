import React, { Component } from "react";
import "./../styles/_menu.scss";
import Anime from "./Anime";
import P5WithSketch from "./p5WithSketch";
import GSAP from "./GSAP";
import Three from "./Three";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      showBack: false,
      showAnime: false,
      showP5: false,
      showGSAP: false,
      showThree: false
    };
  }

  showAnime = () => {
    this.setState({
      showMenu: false,
      showBack: true,
      showAnime: true,
      showP5: false,
      showGSAP: false,
      showThree: false
    });
  };

  showP5 = () => {
    this.setState({
      showMenu: false,
      showBack: true,
      showAnime: false,
      showP5: true,
      showGSAP: false,
      showThree: false
    });
  };

  showGSAP = () => {
    this.setState({
      showMenu: false,
      showBack: true,
      showAnime: false,
      showP5: false,
      showGSAP: true,
      showThree: false
    });
  };

  showThree = () => {
    this.setState({
      showMenu: false,
      showBack: true,
      showAnime: false,
      showP5: false,
      showGSAP: false,
      showThree: true
    });
  };

  showMenu = () => {
    this.setState({
      showMenu: true,
      showBack: false,
      showAnime: false,
      showP5: false,
      showGSAP: false,
      showThree: false
    });
  };

  render() {
    return (
      <div className="parent">
        {this.state.showMenu ? (
          <div>
            <header className="header">
              <h1>JavaScript Animation</h1>
              <h2 className="header__subtitle">
                Comparing Four Popular JavaScript Animation Libraries Available Today
              </h2>
            </header>
            <section className="menu" id="menu">
              <button
                className="menu__btn menu__btn--orange"
                onClick={this.showAnime}
              >
                Anime.js
              </button>
              <button
                className="menu__btn menu__btn--blue"
                onClick={this.showP5}
              >
                P5.js
              </button>
              <button
                className="menu__btn menu__btn--green"
                onClick={this.showGSAP}
              >
                Green Sock Animation Platform
              </button>
              <button
                className="menu__btn menu__btn--purple"
                onClick={this.showThree}
              >
                Three.js
              </button>
            </section>
          </div>
        ) : null}
        {this.state.showAnime ? <Anime /> : null}
        {this.state.showP5 ? <P5WithSketch /> : null}
        {this.state.showGSAP ? <GSAP /> : null}
        {this.state.showThree ? <Three /> : null}
        {this.state.showBack ? (
          <button
            className="menu__btn menu__btn--back"
            id="back-button"
            onClick={this.showMenu}
          >
            back
          </button>
        ) : null}
      </div>
    );
  }
}
export default Menu;
