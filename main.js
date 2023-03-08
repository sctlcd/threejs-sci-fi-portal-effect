import './assets/style/style.css'
import * as THREE from 'three';

/***************************************************** Scene */

const scene = new THREE.Scene();

/***************************************************** DirectionalLight */

const directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);

/***************************************************** Camera */

const camera = new THREE.PerspectiveCamera(
  80, // fov = Field Of View
  window.innerWidth / window.innerHeight, // aspect ratio = width / height
  1, // near clipping plane
  10000 // far clipping plane
);
camera.position.set(0, 0, 1000);
scene.add(camera);

/***************************************************** Renderer */

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 1);
renderer.setSize(window.innerWidth, window.innerHeight);

// Add renderer into HTML as a canvas element
document.body.appendChild(renderer.domElement);

/***************************************************** Resizer */

// Make canvas responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; // update aspect ratio
  camera.updateProjectionMatrix(); // apply changes

  renderer.setSize(window.innerWidth, window.innerHeight); // update size
  renderer.setPixelRatio(window.devicePixelRatio); // use to render at the native screen resolution
});

/***************************************************** Render */

function render() {
  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

render();