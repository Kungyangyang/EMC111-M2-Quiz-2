const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputEncoding = THREE.sRGBEncoding;

scene.background = new THREE.Color(0x000000);
camera.position.set(50, 5, -20);
camera.lookAt(0, 20, 0);

const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
scene.add(ambientLight);


//TEXTURES
const textureLoader = new THREE.TextureLoader();

const starTexture = textureLoader.load("assets/star.png");
const poleTexture = textureLoader.load("assets/pole.png");
const barrelTexture = textureLoader.load("assets/barrel.png");
const fireTexture = textureLoader.load("assets/fire.png");

const floorTexture = textureLoader.load('assets/concrete.png');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(4, 2);

const wallTexture = textureLoader.load('assets/bricks.png');
wallTexture.wrapS = THREE.RepeatWrapping;
wallTexture.wrapT = THREE.RepeatWrapping;
wallTexture.repeat.set(4, 2);

const smallwallTexture = textureLoader.load('assets/bricks.png');
smallwallTexture.wrapS = THREE.RepeatWrapping;
smallwallTexture.wrapT = THREE.RepeatWrapping;
smallwallTexture.repeat.set(1.75, 0.3);

const doorsidewallTexture = textureLoader.load('assets/bricks.png');
doorsidewallTexture.wrapS = THREE.RepeatWrapping;
doorsidewallTexture.wrapT = THREE.RepeatWrapping;
doorsidewallTexture.repeat.set(1, 1);

const doortopwallTexture = textureLoader.load('assets/bricks.png');
doortopwallTexture.wrapS = THREE.RepeatWrapping;
doortopwallTexture.wrapT = THREE.RepeatWrapping;
doortopwallTexture.repeat.set(2, 0.75);

//MESHES
  //Floors
const floor1Geometry = new THREE.BoxGeometry(100, 1, 80);
const floor1Material = new THREE.MeshStandardMaterial({ map: floorTexture, color: 0x000000 });
const floor1 = new THREE.Mesh(floor1Geometry, floor1Material);
scene.add(floor1);
floor1.position.x = 0;
floor1.position.y = -5;
floor1.position.z = 0;

const floor2Geometry = new THREE.BoxGeometry(50, 1, 80);
const floor2Material = new THREE.MeshStandardMaterial({ map: floorTexture, color: 0x777777 });
const floor2 = new THREE.Mesh(floor2Geometry, floor2Material);
scene.add(floor2);
floor2.position.x = -25;
floor2.position.y = 5;
floor2.position.z = 0;

  //Walls
const leftWallGeometry = new THREE.BoxGeometry(100, 1, 75);
const leftWallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture, color: 0x777777 });
const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
scene.add(leftWall);
leftWall.position.x = 0;
leftWall.position.y = 30;
leftWall.position.z = 40;
leftWall.rotation.x = Math.PI / 2;

const rightWallGeometry = new THREE.BoxGeometry(100, 1, 75);
const rightWallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture, color: 0x777777 });
const rightWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
scene.add(rightWall);
rightWall.position.x = 0;
rightWall.position.y = 30;
rightWall.position.z = -40;
rightWall.rotation.x = Math.PI / 2;

const smallWallGeometry = new THREE.BoxGeometry(1, 10, 80);
const smallWallMaterial = new THREE.MeshStandardMaterial({ map: smallwallTexture, color: 0x777777 });
const smallWall = new THREE.Mesh(smallWallGeometry, smallWallMaterial);
scene.add(smallWall);
smallWall.position.x = 0;
smallWall.position.y = 0;
smallWall.position.z = 0;

    //The Door Wall
const wallLeftGeometry = new THREE.BoxGeometry(1, 40, 30);
const wallLeftMaterial = new THREE.MeshStandardMaterial({ map: doorsidewallTexture, color: 0x777777 });
const wallLeft = new THREE.Mesh(wallLeftGeometry, wallLeftMaterial);
scene.add(wallLeft);
wallLeft.position.x = -50;
wallLeft.position.y = 20;
wallLeft.position.z = 25;

const wallRightGeometry = new THREE.BoxGeometry(1, 40, 30);
const wallRightMaterial = new THREE.MeshStandardMaterial({ map: doorsidewallTexture, color: 0x777777 });
const wallRight = new THREE.Mesh(wallRightGeometry, wallRightMaterial);
scene.add(wallRight);
wallRight.position.x = -50;
wallRight.position.y = 20;
wallRight.position.z = -25;

const wallTopGeometry = new THREE.BoxGeometry(1, 25, 80);
const wallTopMaterial = new THREE.MeshStandardMaterial({ map: doortopwallTexture, color: 0x777777 });
const wallTop = new THREE.Mesh(wallTopGeometry, wallTopMaterial);
scene.add(wallTop);
wallTop.position.x = -50;
wallTop.position.y = 52.5;
wallTop.position.z = 0;

  //The Star
const starGeometry = new THREE.BoxGeometry(1, 200, 200);
const starMaterial = new THREE.MeshBasicMaterial({ map: starTexture, transparent: true });
const star = new THREE.Mesh(starGeometry, starMaterial);
scene.add(star);
star.position.x = -500;
star.position.y = 500;
star.position.z = 100;
star.rotation.z = -10;
star.rotation.y = 0.2;

const starLight = new THREE.DirectionalLight(0xffffff, 5);
starLight.position.set(-600, 500, 50);
scene.add(starLight);

  //Wheel
const wheelGeometry = new THREE.TorusGeometry( 5, 2, 10, 100 ); 
const wheelMaterial = new THREE.MeshBasicMaterial( { color: 0x111111 } ); 
const wheel = new THREE.Mesh( wheelGeometry, wheelMaterial );
scene.add(wheel);
wheel.position.x = 20;
wheel.position.y = 2;
wheel.position.z = 35;
wheel.rotation.x = 10;

  //Streetlight
const poleGeometry = new THREE.CylinderGeometry(2, 2, 35, 32);
const poleMaterial = new THREE.MeshStandardMaterial( { map: poleTexture } );
const streetlightPole = new THREE.Mesh(poleGeometry, poleMaterial);
scene.add(streetlightPole);
streetlightPole.position.x = -40;
streetlightPole.position.y = 20;
streetlightPole.position.z = 30;

const streetlightGeometry = new THREE.CapsuleGeometry( 3, 2, 4, 8 ); 
const streetlightMaterial = new THREE.MeshBasicMaterial( {color: 0xfffc63} ); 
const streetLight = new THREE.Mesh( streetlightGeometry, streetlightMaterial );
scene.add(streetLight);
streetLight.position.x = -40;
streetLight.position.y = 40;
streetLight.position.z = 30;

const polehatGeometry = new THREE.ConeGeometry( 5, 5, 32 ); 
const polehatMaterial = new THREE.MeshStandardMaterial( { map: poleTexture } );
const poleHat = new THREE.Mesh(polehatGeometry, polehatMaterial );
scene.add(poleHat);
poleHat.position.x = -40;
poleHat.position.y = 45;
poleHat.position.z = 30;

const streetLightPoint = new THREE.PointLight(0xfffc63, 20, 100, 0.5);
streetLightPoint.position.set(-40, 40, 30);
scene.add(streetLightPoint);

  //Flaming Barrel
const barrelGeometry = new THREE.CylinderGeometry(5, 5, 15, 32);
const barrelMaterial = new THREE.MeshStandardMaterial({ map: barrelTexture });
const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
scene.add(barrel);
barrel.position.x = 20;
barrel.position.y = 0;
barrel.position.z = -25;

const fireGroup = new THREE.Group();
scene.add(fireGroup);
fireGroup.position.set(20, 7, -25);

const fireLight = new THREE.PointLight(0xff6600, 20, 100, 0.4);
fireLight.position.set(10, 10, 2);
fireGroup.add(fireLight);

for (let i = 0; i < 20; i++) {
    const fireMaterial = new THREE.SpriteMaterial({
        map: fireTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });
    
    const sprite = new THREE.Sprite(fireMaterial);
    sprite.position.set(
        (Math.random() - 0.5) * 3,
        Math.random() * 5,
        (Math.random() - 0.5) * 3
    );
    
    const baseScale = 3 + Math.random() * 4;
    sprite.scale.set(baseScale, baseScale, 1);
    fireGroup.add(sprite);
}

function animateFire() {
    let maxHeight = 0;
    
    fireGroup.children.forEach((child, index) => {
        if (child instanceof THREE.Sprite) {
            child.position.y += 0.05;
            
            if (child.position.y > maxHeight) {
                maxHeight = child.position.y;
            }
            
            if (child.position.y > 8) {
                child.position.y = -1;
                child.position.x = (Math.random() - 0.5) * 3;
                child.position.z = (Math.random() - 0.5) * 3;
            }
        }
    });
    fireLight.position.y = 1 + maxHeight * 0.3;
}



function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

//Renderer
function animate(time) {
    renderer.render(scene, camera);
    animateFire();
}
renderer.setAnimationLoop(animate);