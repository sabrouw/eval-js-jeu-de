import * as THREE from 'https://unpkg.com/three@0.139.0/build/three.module.js'

// Création de la scène, de la caméra et du renderer
let htmlCanvas = document.getElementById('canvas');
let canvasElement = document.getElementById('canvas');
let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(70, canvasElement.width / canvasElement.height, 0.1, 1000);
    camera.position.z = 3;


let renderer = new THREE.webGLRenderer({
        canvas:htmlCanvas
    });

    //creation de l'objet
let geometry = new THREE.BoxGeometry(1, 2, 1);
let box = new THREE.boxGeometry(geometry, material);
let standard = new THREE.MeshStandardMaterial({
    color: '#FF0000',
    roughness: 0.304,
});
let boxMesh = new THREE.Mesh(geometry, basic);
boxMesh.position.set(-2, 0, -3);

//ajout de l'objet à la scene
scene.add(box);

//rendu de la scene
renderer.render(scene, camera);