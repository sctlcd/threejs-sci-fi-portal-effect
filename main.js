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

/***************************************************** Smoke texture loader*/

const loader = new THREE.TextureLoader();
// Set Texture loader
const texture1 = loader.load("./images/textures/smoke-min.png");

/***************************************************** Smoke 1 */

const portalParticles = [];
// Define a geometry - 350 unit plain square
const portalGeometry1 = new THREE.PlaneBufferGeometry(350, 350);
// Define a material and map it to the texture 1
const portalMaterial1 = new THREE.MeshStandardMaterial({
  map: texture1,
  transparent: true,
});

// Create a loop to create a lot of smoke particules and place it along the spiral line
for(let p = 880; p > 250; p--) {
  // Create a 3D particle object
  const particle = new THREE.Mesh(portalGeometry1,portalMaterial1);
  // Set each particle object position to create a conical spiral shape
  // conical spiral equation x(t) = radius * cos(t), y(t) = radius * sin(t), z(t) = a * t
  particle.position.set(
      0.5 * p * Math.cos((4 * p * Math.PI) / 180),
      0.5 * p * Math.sin((4 * p * Math.PI) / 180),
      0.1 * p
  );
  // create a random rotation to create diversity
  particle.rotation.z = Math.random() *360;
  portalParticles.push(particle);  //keep the reference to the particle to animate it later
  scene.add(particle);
}

/***************************************************** Render */

function render() {
  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

render();