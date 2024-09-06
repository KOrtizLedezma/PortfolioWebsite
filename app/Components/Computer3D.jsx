"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GifLoader from 'three-gif-loader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Computer3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    scene.background = new THREE.Color(0x121212);

    renderer.setSize(500, 500);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0XFFFFFF);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Materials
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x4b4b4b });
    const keyboardMaterial = new THREE.MeshLambertMaterial({ color: 0x4B4B4B });
    const keyMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });

    // load GIF
    const gifLoader = new GifLoader();
    const gifTexture = gifLoader.load('/computer.gif');

    const screenMaterial = new THREE.MeshBasicMaterial({ map: gifTexture });

    const screenGeometry = new THREE.BoxGeometry(13, 7, 0.1);
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 3, 0.1);
    scene.add(screen);

    // Monitor screen stand
    const screenStantGeometry = new THREE.BoxGeometry(1, 2, 0.1);
    const screenStand = new THREE.Mesh(screenStantGeometry, bodyMaterial);
    screenStand.position.set(0, -1, -0.02);
    scene.add(screenStand);

    // Monitor screen base
    const screenBaseGeometry = new THREE.BoxGeometry(3, 0.1, 3);
    const screenBase = new THREE.Mesh(screenBaseGeometry, bodyMaterial);
    screenBase.position.set(0, -2, -0.02);
    scene.add(screenBase);

    // Monitor screen back
    const screenBackGeometry = new THREE.BoxGeometry(13, 7, 0.1);
    const screenBack = new THREE.Mesh(screenBackGeometry, bodyMaterial);
    screenBack.position.set(0, 3, -0.02);
    scene.add(screenBack);

    // Keyboard
    const keyboardGeometry = new THREE.BoxGeometry(6, 0.2, 3);
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.position.set(0, -1.8, 5.1);
    scene.add(keyboard);

    const keyWidth = 0.35;
    const keyHeight = 0.2;
    const keySpacing = 0.1;
    const keyStartX = -2.85;
    const keyStartY = -1.6;

    const smallKeyWF = 0.75;
    const doubleKeyWF = 1.8;
    const mediumKeyWF = 1.25;
    const CLKeyWF = 1.8;
    const EnterKeyWF = 1.75;
    const ShiftLKeyWF = 2;
    const ShiftRKeyWF = 1.6;
    const opKeyWF = 1;
    const altKeyWF = 6.25;

    const keyRows = [
      [
        { label: 'Esc', widthFactor: smallKeyWF },    { label: 'F1', widthFactor: smallKeyWF }, 
        { label: 'F2', widthFactor: smallKeyWF },     { label: 'F3', widthFactor: smallKeyWF },    
        { label: 'F4', widthFactor: smallKeyWF },     { label: 'F5', widthFactor: smallKeyWF },    
        { label: 'F6', widthFactor: smallKeyWF },     { label: 'F7', widthFactor: smallKeyWF }, 
        { label: 'F8', widthFactor: smallKeyWF },     { label: 'F9', widthFactor: smallKeyWF },    
        { label: 'F10', widthFactor: smallKeyWF },    { label: 'F11', widthFactor: smallKeyWF },   
        { label: 'F12', widthFactor: smallKeyWF },    { label: 'PrtSc', widthFactor: smallKeyWF }, 
        { label: 'Insrt', widthFactor: smallKeyWF },  { label: 'Delete', widthFactor: smallKeyWF }
      ],
      [
        { label: '~', widthFactor: smallKeyWF }, { label: '1', widthFactor: smallKeyWF }, 
        { label: '2', widthFactor: smallKeyWF }, { label: '3', widthFactor: smallKeyWF }, 
        { label: '4', widthFactor: smallKeyWF }, { label: '5', widthFactor: smallKeyWF }, 
        { label: '6', widthFactor: smallKeyWF }, { label: '7', widthFactor: smallKeyWF }, 
        { label: '8', widthFactor: smallKeyWF }, { label: '9', widthFactor: smallKeyWF }, 
        { label: '0', widthFactor: smallKeyWF }, { label: '-', widthFactor: smallKeyWF }, 
        { label: '+', widthFactor: smallKeyWF }, { label: 'Backspace', widthFactor: doubleKeyWF}, 
        { label: 'Home', widthFactor: smallKeyWF }
      ],
      [
        { label: 'Tab', widthFactor: mediumKeyWF }, { label: 'Q', widthFactor: smallKeyWF }, 
        { label: 'W', widthFactor: smallKeyWF },    { label: 'E', widthFactor: smallKeyWF }, 
        { label: 'R', widthFactor: smallKeyWF },    { label: 'T', widthFactor: smallKeyWF }, 
        { label: 'Y', widthFactor: smallKeyWF },    { label: 'U', widthFactor: smallKeyWF }, 
        { label: 'I', widthFactor: smallKeyWF },    { label: 'O', widthFactor: smallKeyWF }, 
        { label: 'P', widthFactor: smallKeyWF },    { label: '[', widthFactor: smallKeyWF }, 
        { label: ']', widthFactor: smallKeyWF },    { label: '\\', widthFactor: mediumKeyWF },
        { label: 'PgUp', widthFactor: smallKeyWF }
      ],
      [
        { label: 'Caps', widthFactor: CLKeyWF},     { label: 'A', widthFactor: smallKeyWF }, 
        { label: 'S', widthFactor: smallKeyWF },    { label: 'D', widthFactor: smallKeyWF }, 
        { label: 'F', widthFactor: smallKeyWF },    { label: 'G', widthFactor: smallKeyWF }, 
        { label: 'H', widthFactor: smallKeyWF },    { label: 'J', widthFactor: smallKeyWF }, 
        { label: 'K', widthFactor: smallKeyWF },    { label: 'L', widthFactor: smallKeyWF }, 
        { label: ';', widthFactor: smallKeyWF },    { label: '\'', widthFactor: smallKeyWF }, 
        { label: 'Enter', widthFactor: EnterKeyWF}, { label: 'PgDn', widthFactor: smallKeyWF }
      ],
      [
        { label: 'Shift', widthFactor: ShiftLKeyWF }, { label: 'Z', widthFactor: smallKeyWF }, 
        { label: 'X', widthFactor: smallKeyWF },      { label: 'C', widthFactor: smallKeyWF }, 
        { label: 'V', widthFactor: smallKeyWF },      { label: 'B', widthFactor: smallKeyWF }, 
        { label: 'N', widthFactor: smallKeyWF },      { label: 'M', widthFactor: smallKeyWF }, 
        { label: ',', widthFactor: smallKeyWF },      { label: '.', widthFactor: smallKeyWF }, 
        { label: '/', widthFactor: smallKeyWF },      { label: 'Shift', widthFactor: ShiftRKeyWF },
        { label: '^', widthFactor: smallKeyWF },      { label: 'End', widthFactor: smallKeyWF } 
      ],
      [
        { label: 'Ctrl', widthFactor: opKeyWF }, { label: 'Win', widthFactor: opKeyWF }, 
        { label: 'Alt', widthFactor: opKeyWF }, { label: 'Space', widthFactor: altKeyWF }, 
        { label: 'Alt', widthFactor: smallKeyWF }, { label: 'Win', widthFactor: smallKeyWF },
        { label: 'Menu', widthFactor: smallKeyWF }, { label: '<', widthFactor: smallKeyWF },
        { label: 'v', widthFactor: smallKeyWF }, { label: '>', widthFactor: smallKeyWF }
      ]
    ];


    keyRows.forEach((row, rowIndex) => {
      let xOffset = keyStartX;
      row.forEach((keyObj) => {
        if (keyObj.label !== '') {
          const { label, widthFactor } = keyObj;
          const keyGeometry = new THREE.BoxGeometry(keyWidth * widthFactor, keyHeight, keyWidth);
          const keyMesh = new THREE.Mesh(keyGeometry, keyMaterial);
          keyMesh.position.set(
            xOffset + (keyWidth * widthFactor) / 2,
            keyStartY,
            4 + rowIndex * (keyWidth + keySpacing)
          );
          xOffset += (keyWidth * widthFactor) + keySpacing;
          scene.add(keyMesh);
        }
      });
    });

    camera.position.z = 18;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;

    controls.minDistance = 8; // Min zoom distance
    controls.maxDistance = 30; // Max zoom distance
    controls.maxPolarAngle = Math.PI / 2;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      if(gifTexture.update){
        gifTexture.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '500px', height: '500px' }} />;
};

export default Computer3D;