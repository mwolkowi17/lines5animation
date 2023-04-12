import { line1,line2,line3,line4,line5,line6,render } from "./client";
import TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three'


export const line1creation=()=>{
    new TWEEN.Tween((line1.main.geometry.attributes.position as THREE.BufferAttribute).array)
    .to({
       [3]:0,
       [4]:20,
       [5]:3

    }, 1500)
    .delay(500)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => render())
    .start()
}

export const line2creation=()=>{
    console.log((line2.main.geometry.attributes.position as THREE.BufferAttribute).array)
    new TWEEN.Tween((line2.main.geometry.attributes.position as THREE.BufferAttribute).array)
    .to({
       [3]:10,
       [4]:0,
       [5]:0

    }, 1500)
    .delay(500)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => render())
    .start()
}

export const line3creation=()=>{
    console.log((line3.main.geometry.attributes.position as THREE.BufferAttribute).array)
    new TWEEN.Tween((line3.main.geometry.attributes.position as THREE.BufferAttribute).array)
    .to({
       [3]:0,
       [4]:20,
       [5]:3

    }, 1500)
    .delay(500)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => render())
    .start()
}

export const line4creation=()=>{
    console.log((line4.main.geometry.attributes.position as THREE.BufferAttribute).array)
    new TWEEN.Tween((line4.main.geometry.attributes.position as THREE.BufferAttribute).array)
    .to({
       [3]:0,
       [4]:0,
       [5]:10

    }, 1500)
    .delay(500)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => render())
    .start()
}

export const line5creation=()=>{
    console.log((line5.main.geometry.attributes.position as THREE.BufferAttribute).array)
    new TWEEN.Tween((line5.main.geometry.attributes.position as THREE.BufferAttribute).array)
    .to({
       [3]:0,
       [4]:20,
       [5]:3

    }, 1500)
    .delay(500)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => render())
    .start()
}

export const line6creation=()=>{
    console.log((line6.main.geometry.attributes.position as THREE.BufferAttribute).array)
    new TWEEN.Tween((line6.main.geometry.attributes.position as THREE.BufferAttribute).array)
    .to({
       [3]:10,
       [4]:0,
       [5]:0

    }, 1500)
    .delay(500)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate(() => render())
    .start()
}