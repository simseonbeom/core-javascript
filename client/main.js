


import { diceAnimation, getNode, getNodes, insertLast } from './lib/index.js';

// [phase-1]
// 1. 주사위 굴리기 버튼을 누르면 diceAnimation() 실행될 수 있도록
// 2. 같은 버튼 toggle 만들기 (isClicked)
// 3. setInterval 재생 / 정지
// 4. 바깥 변수 보호하기 (closure)
// 5. button 활성화 여부 

// [phase-2]
// 1. recordButton 이벤트 바인딩
// 2. recordListWrapper show / hidden
// 3. renderRecordItem 함수 만들기
//    - 주사위 눈 가져오기
//    - 템플릿 랜더링하기
//    - 값 계산하기


// 미니 과제 => 만들어주는 함수, 초기화 버튼 클릭시 모든 데이터 날리기 

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');


let count = 0;
let total = 0;

function renderRecordItem(){

  const cube = getNode('#cube');
  // const diceValue = Number(cube.dataset.dice)
  // const diceValue = cube.dataset.dice * 1
  // const diceValue = cube.dataset.dice / 1
  const diceValue = +cube.dataset.dice;

  const template = `
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
  `

  
  insertLast('.recordList tbody',template);

  
  // 랜더링

  

}

// IIFE

const handleRollingDice = (() => {

  let isClicked = false;
  let stopAnimation;

  return ()=>{

    if(!isClicked){

      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;

    }else{

      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  }

})()


function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem()
}


rollingButton.addEventListener('click',handleRollingDice);
recordButton.addEventListener('click',handleRecord);


























