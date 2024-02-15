

/* global gsap */

import { attr } from "../dom/attr.js";
import { getNode } from '../dom/getNode.js'
import { memo } from "../utils/memo.js";

memo('cube',()=> getNode('#cube'))



let random;
gsap.to(memo('cube'),{duration:1,rotationX:100,rotationY:-100,ease:'back(10)'});


export function diceAnimation (){


  random = gsap.utils.random([0,1,2,3,4,5]);

  function complete(){
		attr(memo('cube'),'data-dice',random + 1)
  }

  const rotationValue = [
    [0,0], // 1
    [0,-90], // 2
    [-90,0], // 3
    [90,0], // 4
    [0,90], // 5
    [-180,0], // 6
  ]

  gsap.to(memo('cube'),{ease:'linear',duration:0.2,z:-100,rotationX:rotationValue[random][0],rotationY:rotationValue[random][1],onComplete:complete})

}













