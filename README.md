# [threejs-sci-fi-portal-effect](https://threejs-sci-fi-portal-effect.web.app/)

<br />
<img src="https://github.com/sctlcd/threejs-sci-fi-portal-effect/blob/main/design/threejs-sci-fi-portal-effect-mockup-presentation.png" alt="threejs-sci-fi-portal-effect" width="900">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Deployment](#deployment)
	- [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
	- [Deployment – Live website](#deploymentLiveWebsite)

4. [Credits](#credits)
	- [Media](#media)
---

## Introduction <a name="introduction"></a>

Creating an animated 3D science fiction portal effect with Three.js

Back to [top](#tableOfContents)

---

## Run the project locally <a name="#runLocally"></a>

Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

## Deployment <a name="#deployment"></a>
### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite:  
    - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
    - Please see `.nvmrc` file at the root of `threejs-sci-fi-portal-effect` repo.
    - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc.
2. In GitHub click on the repository nammed [threejs-sci-fi-portal-effect](https://github.com/sctlcd/threejs-sci-fi-portal-effect)
3. Clone the repository locally. Run

    ````
      git clone https://github.com/sctlcd/threejs-sci-fi-portal-effect.git
    ````

4. Install all modules listed as dependencies in package.json

    ```
      cd threejs-sci-fi-portal-effect
      npm i 
    ```

    note: in this app 
    - [three](https://www.npmjs.com/package/three) - **a JavaScript 3D library**, 
    - [vite](https://vitejs.dev/) - **a built in development server**,

5. Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

[threejs-sci-fi-portal-effect](https://github.com/sctlcd/threejs-sci-fi-portal-effect) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)

    ```
      npm install -g firebase-tools
    ```

2. Create firebase.json and .firebaserc at the root of your project with the following content:

    `firebase.json`:

    ```
      {
        "hosting": {
          "public": "dist",
          "ignore": [],
          "rewrites": [
            {
              "source": "**",
              "destination": "/index.html"
            }
          ]
        }
      }
    ```

    `.firebaserc`:

    ```
      {
        "projects": {
          "default": "<YOUR_FIREBASE_ID>"
        }
      }
    ```

3. After running `npm run build`, deploy using the command `firebase deploy`. 


=> live link: https://threejs-sci-fi-portal-effect.web.app/

Back to [top](#tableOfContents)

---

## Credits <a name="credits"></a>

-[conical spiral equation](https://www.math.net/spiral#:~:text=3D%20spiral,a%20and%20r%20are%20constants.)

### Media <a name="media"></a>

- [favicon.ico](https://www.flaticon.com/free-icon/portal_1374413?term=science+fiction+portal&page=1&position=1&origin=search&related_id=1374413) - [Flaticon](https://www.flaticon.com/) | copyright [Freepik](https://www.flaticon.com/authors/freepik)
- [pngwing.com-4-min.png](https://www.pngwing.com/en/free-png-bmedh) - [Pngwing](https://www.pngwing.com/) | copyright unknown
- [pngwing.com-1-min.png](https://www.pngwing.com/en/free-png-dgbvz) - [Pngwing](https://www.pngwing.com/) | copyright unknown
- [colored-smoke-png-43277-min.png](https://www.freeiconspng.com/downloadimg/43277) - [Freeiconspng](https://www.freeiconspng.com/img/43277) | copyright [Ahkâm](https://www.freeiconspng.com/img/43277)

Back to [top](#tableOfContents)

---