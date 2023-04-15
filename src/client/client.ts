import * as THREE from 'three'
import { lineform } from './lineclass';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import TWEEN from '@tweenjs/tween.js'
import { LabelDiv, LabelDiv4, LabelDiv6, LabelDiv7 } from './divs';
import { line1creation, line2creation, line3creation, line4creation, line5creation, line6creation } from './startanimation';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 50


export const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

export const line1 = new lineform(-7.5, 0, 0, -7.5, 0, 0)
export const line2 = new lineform(-7.5, 0, 0, -7.5, 0, 0)
export const line3 = new lineform(10, 0, 0, 10, 0, 0)
export const line4 = new lineform(-7.5, 0, 0, -7.5, 0, 0)
export const line5 = new lineform(0, 0, 10, 0, 0, 10)
export const line6 = new lineform(0, 0, 10, 0, 0, 10)

export const figure1 = new THREE.Group();

figure1.add(line1.main)
figure1.add(line2.main)
figure1.add(line3.main)
figure1.add(line4.main)
figure1.add(line5.main)
figure1.add(line6.main)

scene.add(figure1)

const Label = new CSS2DObject(LabelDiv.main);
Label.position.set(-7.5, 0, 0);

const Label4 = new CSS2DObject(LabelDiv4.main);
Label4.position.set(0, 20, 3);

const Label6 = new CSS2DObject(LabelDiv6.main);
Label6.position.set(10, 0, 0);

const Label7 = new CSS2DObject(LabelDiv7.main);
Label7.position.set(0, 0, 10);

figure1.add(Label);

figure1.add(Label4);

figure1.add(Label6);

figure1.add(Label7);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild(labelRenderer.domElement);

//const controls = new OrbitControls(camera, labelRenderer.domElement)

//start animations
line1creation();
line2creation();
line3creation();
line4creation();
line5creation();
line6creation();


// new TWEEN.Tween(figure1.rotation)
//     .to({ x: -Math.PI / 2, y: 0, z: 0 }, 1000)
//     .start()

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    render()
}

function animate() {
    requestAnimationFrame(animate)
     
    if(figure1.rotation.x<Math.PI*2){
        figure1.rotation.x += 0.002
        figure1.rotation.y += 0.002
    }else{
        figure1.rotation.x=0
        figure1.rotation.y=0
    }
    
    line1.main.geometry.attributes.position.needsUpdate = true;
    line2.main.geometry.attributes.position.needsUpdate = true;
    line3.main.geometry.attributes.position.needsUpdate = true;
    line4.main.geometry.attributes.position.needsUpdate = true;
    line5.main.geometry.attributes.position.needsUpdate = true;
    line6.main.geometry.attributes.position.needsUpdate = true;

    //controls.update()
    TWEEN.update()
    render()
}

export function render() {
    renderer.render(scene, camera)
    labelRenderer.render(scene, camera);

}

animate()