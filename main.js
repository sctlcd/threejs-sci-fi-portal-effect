import './assets/style/style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
const portalLight = new THREE.PointLight(0x062d80, 30, 600, 1.7);
const camera = new THREE.PerspectiveCamera(
  80, // fov = Field Of View
  window.innerWidth / window.innerHeight, // aspect ratio = width / height
  1, // near clipping plane
  10000 // far clipping plane
);
const renderer = new THREE.WebGLRenderer();

// clock objects to keep track of the time
const clock1 = new THREE.Clock();
const clock2 = new THREE.Clock();
const clock3 = new THREE.Clock();
// smokeParticles arrays
const smokeParticles1 = [];
const smokeParticles2 = [];
const smokeParticles3 = [];
// portalParticles arrays
const portalParticles1 = [];
const portalParticles2 = [];
const portalParticles3 = [];

/******************************************************************************************** initScene */

function initScene() {

  /***************************************************** DirectionalLight */

  directionalLight.position.set(0, 0, 1);
  scene.add(directionalLight);

  /***************************************************** PortalLight */

  portalLight.position.set(0,0,250);
  scene.add(portalLight);

  /***************************************************** Camera */

  camera.position.set(0, 0, 1000);
  scene.add(camera);

  /***************************************************** Renderer */

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

  particleSetup();
}

/******************************************************************************************** particleSetup */

function particleSetup() {

  /***************************************************** Smoke textures */

  const texture1 = "./images/textures/smoke-min.png";
  const texture2 = "./images/textures/colored-smoke-png-43277-min.png";
  const texture3 = "./images/textures/pngwing.com-4-min.png";
  // const textures = [texture1, texture2, texture3];

  /***************************************************** Smoke 1 */

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
        // Create a 3D portal particle object
        const portalParticle1 = new THREE.Mesh(portalGeometry1, portalMaterial1);
        // Set each portal particle object position to create a conical spiral shape
        // Conical spiral equation x(t) = radius * cos(t), y(t) = radius * sin(t), z(t) = a * t
        portalParticle1.position.set(
            0.62 * p * Math.cos((4 * p * Math.PI) / 180),
            0.62 * p * Math.sin((4 * p * Math.PI) / 180),
            0.1 * p
        );
        // create a random rotation to create diversity
        portalParticle1.rotation.z = Math.random() * 360;
        portalParticle1.material.opacity = 1;
        portalParticles1.push(portalParticle1);  //keep the reference to the particle to animate it later
        scene.add(portalParticle1);
      }

      // Define a geometry
      const smokeGeometry1 = new THREE.PlaneBufferGeometry(1000, 1800);
      // Create the material and map it to the texture
      const smokeMaterial1 = new THREE.MeshStandardMaterial({
          map:texture1,
          transparent: true
      });

      // Create a loop to create a lot of smoke particules
      for(let p = 0; p < 40; p++) {
        // Create a 3D smoke particle object
        const smokeParticle1 = new THREE.Mesh(smokeGeometry1,smokeMaterial1);
        smokeParticle1.position.set(
            Math.random() * 1000 - 500,
            Math.random() * 400 - 200,
            25
        );
        // create a random rotation to create diversity
        smokeParticle1.rotation.z = Math.random() * 360;
        smokeParticle1.material.opacity = 0.2;
        portalParticles1.push(smokeParticle1);
        scene.add(smokeParticle1);
      }
    }
  );

  /***************************************************** Smoke 2 */

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
        // Create a 3D portal particle object
        const portalParticle2 = new THREE.Mesh(portalGeometry2, portalMaterial2);
        // Set each portal particle object position to create a conical spiral shape
        // Conical spiral equation x(t) = radius * cos(t), y(t) = radius * sin(t), z(t) = a * t
        portalParticle2.position.set(
            0.41 * p * Math.cos((4 * p * Math.PI) / 180),
            0.41 * p * Math.sin((4 * p * Math.PI) / 180),
            0.1 * p
        );
        // create a random rotation to create diversity
        portalParticle2.rotation.z = Math.random() * 360;
        portalParticle2.material.opacity = 0.4;
        portalParticles2.push(portalParticle2);  //keep the reference to the particle to animate it later
        scene.add(portalParticle2);
      }

      const smokeGeometry2 = new THREE.PlaneBufferGeometry(1000, 1800);
      const smokeMaterial2 = new THREE.MeshStandardMaterial({
          map:texture2,
          transparent: true
      });
      
      // Create a loop to create a lot of smoke particules
      for(let p = 0; p <80; p++) {
        // Create a 3D smoke particle object
        const smokeParticle2 = new THREE.Mesh(smokeGeometry2,smokeMaterial2);
        smokeParticle2.position.set(
            Math.random() * 1000 - 500,
            Math.random() * 400 - 200,
            25
        );
        // create a random rotation to create diversity
        smokeParticle2.rotation.z = Math.random() * 360;
        smokeParticle2.material.opacity = 0.1;
        portalParticles2.push(smokeParticle2);
        scene.add(smokeParticle2);
      }
    }
  );

  /***************************************************** Smoke 3 */

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
        // Create a 3D portal particle object
        const portalParticle3 = new THREE.Mesh(portalGeometry3, portalMaterial3);
        // Set each portal particle object position to create a conical spiral shape
        // Conical spiral equation x(t) = radius * cos(t), y(t) = radius * sin(t), z(t) = a * t
        portalParticle3.position.set(
            0.43 * p * Math.cos((4 * p * Math.PI) / 180),
            0.43 * p * Math.sin((4 * p * Math.PI) / 180),
            0.1 * p
        );
        // create a random rotation to create diversity
        portalParticle3.rotation.z = Math.random() * 360;
        portalParticle3.material.opacity = 0.7;
        portalParticles3.push(portalParticle3);  //keep the reference to the particle to animate it later
        scene.add(portalParticle3);
      }

      const smokeGeometry3 = new THREE.PlaneBufferGeometry(1000, 800);
      const smokeMaterial3 = new THREE.MeshStandardMaterial({
          map:texture3,
          transparent: true
      });

      // Create a loop to create a lot of smoke particules
      for(let p = 0; p < 80; p++) {
        // Create a 3D smoke particle object
        const smokeParticle3 = new THREE.Mesh(smokeGeometry3,smokeMaterial3);
        smokeParticle3.position.set(
            Math.random() * 1000 - 500,
            Math.random() * 400 - 200,
            25
        );
        // create a random rotation to create diversity
        smokeParticle3.rotation.z = Math.random() * 360;
        smokeParticle3.material.opacity = 0.3;
        portalParticles3.push(smokeParticle3);
        scene.add(smokeParticle3);
      }
    }
  );

  render();
}

/******************************************************************************************** Render */

function render() {

  // get the time passed between the frame from the clock object
  const delta1 = clock1.getDelta();
  const delta2 = clock2.getDelta();
  const delta3 = clock3.getDelta();

  portalParticles1.forEach(p => {
      p.rotation.z -= delta1 * 0.5;
  });
  smokeParticles1.forEach(p => {
      p.rotation.z -= delta1 * 0.2;
  });

  portalParticles2.forEach(p => {
      p.rotation.z -= delta2 * 0.3;
  });
  smokeParticles2.forEach(p => {
      p.rotation.z -= delta2 * 0.1;
  });

  portalParticles3.forEach(p => {
      p.rotation.z -= delta3 * 0.3;
  });
  smokeParticles3.forEach(p => {
      p.rotation.z -= delta3 * 0.1;
  });

  if(Math.random() > 0.9) {
      portalLight.power = 350 + Math.random() * 500;
  }

  // render the scene
  renderer.render(scene, camera);

  // recursive function to animate the scene and each execution represent one frame
  // rerender every time the page refreshes (pause when on another tab)
  requestAnimationFrame(render);
}

initScene();