import React, { Component } from "react";
import "./../styles/_title.scss";
import p5 from 'p5';

class P5WithSketch extends Component {
  constructor(props) {
    super(props)
    this.sketchRef = React.createRef()
  }
  
  Sketch = (p) => {

    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(640, 480);
    }

    p.draw = () => {

      if (p.mouseIsPressed) {
        p.fill("#000000");
      } else {
        p.fill("#FFFFFF");
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    }
 }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.sketchRef.current);
  }

  render() {
    return (
      <div>
        <section className="title">
          <a
            className="title__heading"
            href="https://p5js.org/"
          >
            P5.js
          </a>
        </section>
        <section ref={this.sketchRef}>

        </section>
      </div>
    );
  }
}
export default P5WithSketch;
