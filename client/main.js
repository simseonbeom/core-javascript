
/* global getNode, insertLast, clearContents, getNodes */

// named export (이름 내보내기) 여러개 내보내기  -> { 이름 }

// vs

// default export (기본 내보내기) 무조건 하나만 내보내기 => 이름


import {getNode, getNodes, insertLast, clearContents, refError} from './lib/index.js';



// import clearContents from "./lib/dom/clear.js"; // next.js



function phase1(){

  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');

  function handleInput(){

    const firstValue = Number(first.value);
    const secondValue = Number(second.value);
    const total = firstValue + secondValue;

    clearContents(result);
    insertLast(result,total);
  }

  function handleClear(e){
    e.preventDefault();
    clearContents(first);
    clearContents(second);
    result.textContent = '-'

  }


  first.addEventListener('input',handleInput)
  second.addEventListener('input',handleInput)
  clear.addEventListener('click',handleClear);

}





const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));



function handleInput(){

  const total = numberInputs.reduce((acc,cur)=>acc + Number(cur.value),0)
 
  clearContents(result);
  insertLast(result,total);
}

function handleClear(e){
  e.preventDefault();

  numberInputs.forEach(clearContents)

  result.textContent = '-'
}

calculator.addEventListener('input',handleInput);
clear.addEventListener('click',handleClear);


























