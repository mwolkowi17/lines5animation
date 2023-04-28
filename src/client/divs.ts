import { figure1 } from "./client";
import TWEEN from '@tweenjs/tween.js';
import { divsform } from "./divsclass";
import { invoDiv } from "./info_div";


export let labelclicked1: boolean, labelclicked4: boolean, labelclicked6: boolean, labelclicked7: boolean = false

export let b = 0;

export let d = 0;

export const LabelDiv = new divsform('label', 'Element1')
const labelinfo1 = new invoDiv("Label1")

LabelDiv.main.addEventListener('pointerdown', () => {
	console.log('Element 1 clicked')
	new TWEEN.Tween(figure1.rotation)
		.to({ x: 0, y: Math.PI * (11 / 18), z: 0 }, 1000)
		.start()
	b = Math.PI * (11 / 18)
	
	document.body.appendChild(labelinfo1.main)
	labelinfo1.main.style.visibility = 'visible';
	labelinfo4.main.style.visibility = 'hidden';
    labelinfo6.main.style.visibility = 'hidden';
	labelinfo7.main.style.visibility = 'hidden';
})

labelinfo1.offButton.addEventListener("click", function () {

	labelinfo1.main.style.visibility = 'hidden';
	
  })


export const LabelDiv4 = new divsform('label', 'Element4')
const labelinfo4 = new invoDiv("Label4")

LabelDiv4.main.addEventListener('pointerdown', () => {
	console.log('Element 4 clicked')
	new TWEEN.Tween(figure1.rotation)
		.to({ x: Math.PI / 2, y: 0, z: 0 }, 1000)
		.start()
	d = Math.PI / 2
	b = -1.6
	document.body.appendChild(labelinfo4.main)
	labelinfo4.main.style.visibility = 'visible';
	labelinfo1.main.style.visibility = 'hidden';
    labelinfo6.main.style.visibility = 'hidden';
	labelinfo7.main.style.visibility = 'hidden';
})

labelinfo4.offButton.addEventListener("click", function () {

	labelinfo4.main.style.visibility = 'hidden';
	
  })



export const LabelDiv6 = new divsform('label', 'Element6')
const labelinfo6 = new invoDiv("Label6")

LabelDiv6.main.addEventListener('pointerdown', () => {
	console.log('Element 6 clicked')
	new TWEEN.Tween(figure1.rotation)
		.to({ x: 0, y: -Math.PI * (11 / 18), z: 0 }, 1000)
		.start()
	b = -Math.PI * (11 / 18)

	document.body.appendChild(labelinfo6.main)
	labelinfo6.main.style.visibility = 'visible';
	labelinfo4.main.style.visibility = 'hidden';
    labelinfo1.main.style.visibility = 'hidden';
	labelinfo7.main.style.visibility = 'hidden';
})

labelinfo6.offButton.addEventListener("click", function () {

	labelinfo6.main.style.visibility = 'hidden';
	
  })


export const LabelDiv7 = new divsform('label', 'Element7')
const labelinfo7 = new invoDiv("Label7")

LabelDiv7.main.addEventListener('pointerdown', () => {
	console.log('Element 7 clicked')
	new TWEEN.Tween(figure1.rotation)
		.to({ x: 0, y: 0, z: 0 }, 1000)
		.start()
	b = 0

	document.body.appendChild(labelinfo7.main)
	labelinfo7.main.style.visibility = 'visible';
	labelinfo4.main.style.visibility = 'hidden';
    labelinfo6.main.style.visibility = 'hidden';
	labelinfo1.main.style.visibility = 'hidden';
})

labelinfo7.offButton.addEventListener("click", function () {

	labelinfo7.main.style.visibility = 'hidden';
	
  })






