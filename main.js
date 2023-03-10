import './assets/style/style.css'
import * as THREE from 'three';

/***************************************************** Scene */

const scene = new THREE.Scene();

/***************************************************** DirectionalLight */

const directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);

/***************************************************** PortalLight */

const portalLight = new THREE.PointLight(0x062d80, 30, 600, 1.7);
portalLight.position.set(0,0,250);
scene.add(portalLight);

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

/***************************************************** Smoke textures */

const texture1 = "./images/textures/smoke-min.png";
const texture2 = "./images/textures/colored-smoke-png-43277-min.png";
const texture3 = "./images/textures/pngwing.com-4-min.png";
// const textures = [texture1, texture2, texture3];

/***************************************************** Smoke 1 */
const clock1 = new THREE.Clock();
const portalParticles1 = [];
const smokeParticles1 = [];

// instantiate a loader
const loader = new THREE.TextureLoader();
// Load a ressource
const loaderTexture1 = loader.load(
  texture1, 

  // onLoad callback
  function(texture1) {
    // Define a geometry - 800 unit plain square
    const portalGeometry1 = new THREE.PlaneBufferGeometry(350, 350);
    // Create the material and map it to the texture when the texture is loaded
    const portalMaterial1 = new THREE.MeshStandardMaterial({
      // Use the texture for material creation
      map: texture1,
      transparent: true,
    });

    // Create a loop to create a lot of portal particules and place it along the spiral line
    for(let p = 880; p > 250; p--) {
      // Create a 3D particle object
      const particle = new THREE.Mesh(portalGeometry1, portalMaterial1);
      // Set each particle object position to create a conical spiral shape
      // Conical spiral equation x(t) = radius * cos(t), y(t) = radius * sin(t), z(t) = a * t
      particle.position.set(
          0.62 * p * Math.cos((4 * p * Math.PI) / 180),
          0.62 * p * Math.sin((4 * p * Math.PI) / 180),
          0.1 * p
      );
      // create a random rotation to create diversity
      particle.rotation.z = Math.random() * 360;
      particle.material.opacity = 1;
      portalParticles1.push(particle);  //keep the reference to the particle to animate it later
      scene.add(particle);
    }

    const smokeGeo1 = new THREE.PlaneBufferGeometry(1200, 1000);
    const smokeMaterial1 = new THREE.MeshStandardMaterial({
        map:texture1,
        transparent: true
    });

    for(let p=0;p<40;p++) {
      const particle = new THREE.Mesh(smokeGeo1,smokeMaterial1);
      particle.position.set(
          Math.random() * 1000 - 500,
          Math.random() * 400 - 200,
          25
      );
      particle.rotation.z = Math.random() * 360;
      particle.material.opacity = 0.6;
      portalParticles1.push(particle);
      scene.add(particle);
    }
  }
)

/***************************************************** Smoke 2 */

const clock2 = new THREE.Clock();
const portalParticles2 = [];
const smokeParticles2 = [];

// Load a ressource
const loaderTexture2 = loader.load(
  texture2, 

  // onLoad callback
  function(texture2) {
    // Define a geometry - 800 unit plain square
    const portalGeometry2 = new THREE.PlaneBufferGeometry(350, 350);
    // Create the material and map it to the texture when the texture is loaded
    const portalMaterial2 = new THREE.MeshStandardMaterial({
      // Use the texture for material creation
      map: texture2,
      transparent: true,
    });

    // Create a loop to create a lot of smoke particules and place it along the spiral line
    for(let p = 880; p > 250; p--) {
      // Create a 3D particle object
      const particle = new THREE.Mesh(portalGeometry2, portalMaterial2);
      // Set each particle object position to create a conical spiral shape
      // Conical spiral equation x(t) = radius * cos(t), y(t) = radius * sin(t), z(t) = a * t
      particle.position.set(
          0.41 * p * Math.cos((4 * p * Math.PI) / 180),
          0.41 * p * Math.sin((4 * p * Math.PI) / 180),
          0.1 * p
      );
      // create a random rotation to create diversity
      particle.rotation.z = Math.random() * 360;
      particle.material.opacity = 0.4;
      portalParticles2.push(particle);  //keep the reference to the particle to animate it later
      scene.add(particle);
    }

    const smokeGeo2 = new THREE.PlaneBufferGeometry(1100, 800);
    const smokeMaterial2 = new THREE.MeshStandardMaterial({
        map:texture2,
        transparent: true
    });

    for(let p=0;p<80;p++) {
      const particle = new THREE.Mesh(smokeGeo2,smokeMaterial2);
      particle.position.set(
          Math.random() * 1000 - 500,
          Math.random() * 400 - 200,
          25
      );
      particle.rotation.z = Math.random() * 360;
      particle.material.opacity = 0.2;
      portalParticles2.push(particle);
      scene.add(particle);
    }
  }
)

/***************************************************** Smoke 3 */

const clock3 = new THREE.Clock();
const portalParticles3 = [];
const smokeParticles3 = [];

// Load a ressource
const loaderTexture3 = loader.load(
  texture3, 

  // onLoad callback
  function(texture3) {
    // Define a geometry - 800 unit plain square
    const portalGeometry3 = new THREE.PlaneBufferGeometry(350, 350);
    // Create the material and map it to the texture when the texture is loaded
    const portalMaterial3 = new THREE.MeshStandardMaterial({
      // Use the texture for material creation
      map: texture3,
      transparent: true,
    });

    // Create a loop to create a lot of smoke particules and place it along the spiral line
    for(let p = 880; p > 250; p--) {
      // Create a 3D particle object
      const particle = new THREE.Mesh(portalGeometry3, portalMaterial3);
      // Set each particle object position to create a conical spiral shape
      // Conical spiral equation x(t) = radius * cos(t), y(t) = radius * sin(t), z(t) = a * t
      particle.position.set(
          0.43 * p * Math.cos((4 * p * Math.PI) / 180),
          0.43 * p * Math.sin((4 * p * Math.PI) / 180),
          0.1 * p
      );
      // create a random rotation to create diversity
      particle.rotation.z = Math.random() * 360;
      particle.material.opacity = 0.7;
      portalParticles3.push(particle);  //keep the reference to the particle to animate it later
      scene.add(particle);
    }

    const smokeGeo3 = new THREE.PlaneBufferGeometry(900, 800);
    const smokeMaterial3 = new THREE.MeshStandardMaterial({
        map:texture3,
        transparent: true
    });

    for(let p=0;p<80;p++) {
      const particle = new THREE.Mesh(smokeGeo3,smokeMaterial3);
      particle.position.set(
          Math.random() * 1000 - 500,
          Math.random() * 400 - 200,
          25
      );
      particle.rotation.z = Math.random() * 360;
      particle.material.opacity = 0.4;
      portalParticles3.push(particle);
      scene.add(particle);
    }
  }
)

/***************************************************** Render */

function render() {
  const delta1 = clock1.getDelta();
  portalParticles1.forEach(p => {
      p.rotation.z -= delta1 * 0.5;
  });
  smokeParticles1.forEach(p => {
      p.rotation.z -= delta1 * 0.2;
  });

  const delta2 = clock2.getDelta();
  portalParticles2.forEach(p => {
      p.rotation.z -= delta2 * 0.3;
  });
  smokeParticles2.forEach(p => {
      p.rotation.z -= delta2 * 0.1;
  });

  const delta3 = clock3.getDelta();
  portalParticles3.forEach(p => {
      p.rotation.z -= delta3 * 0.3;
  });

  smokeParticles3.forEach(p => {
      p.rotation.z -= delta3 * 0.1;
  });

  if(Math.random() > 0.9) {
      portalLight.power = 350 + Math.random() * 500;
  }

  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

render();