import { figure1 } from "./client";
import TWEEN from '@tweenjs/tween.js';
import { divsform } from "./divsclass";



export const LabelDiv = new divsform('label','Element1')

LabelDiv.main.addEventListener('pointerdown', () => {
	console.log('Element 1 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: 0, y: Math.PI*(11 / 18), z: 0 }, 1000)
	.start()
})


export const LabelDiv4 = new divsform('label','Element4')

LabelDiv4.main.addEventListener('pointerdown', () => {
	console.log('Element 4 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: Math.PI / 2, y: 0, z: 0 }, 1000)
	.start()
})



export const LabelDiv6 = new divsform('label','Element6')

LabelDiv6.main.addEventListener('pointerdown', () => {
	console.log('Element 6 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: 0 , y: -Math.PI*(11 / 18), z: 0 }, 1000)
	.start()
})


export const LabelDiv7 = new divsform('label','Element7')

LabelDiv7.main.addEventListener('pointerdown', () => {
	console.log('Element 7 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: 0 , y: 0, z: 0 }, 1000)
	.start()
})







