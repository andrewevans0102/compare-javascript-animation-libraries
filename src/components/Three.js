import React, { Component } from "react";
import "./../styles/_title.scss";
import * as THREE from "three";
import "./../styles/_three.scss";

class Three extends Component {

  componentDidMount() {
    // create the scene and renderer for the animation
    const scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    this.mount.appendChild(renderer.domElement);
    
    // create the elements that become a rotating cube and add them to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // create the actual animation function that will draw the animation with WebGL
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    // call the animation function to show the rotating cube on the page
    animate();
  }

  render() {
    return (
      <div>
        <section className="title">
          <a
            className="title__heading"
            href="https://github.com/mrdoob/three.js/"
          >
            Three.js
          </a>
        </section>
        <section className="animation">
          <div ref={ref => (this.mount = ref)} />
        </section>
      </div>
    );
  }
}
export default Three;
