


import { 
  memo, 
  getNode, 
  getNodes, 
  endScroll, 
  insertLast,
  diceAnimation,
  clearContents,
} from './lib/index.js';

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


// [phase-3]
// 1. 생성 함수와 랜더 함수 분리하기 (createItem, renderRecordItem)
// 2. endScroll 함수 만들기 
// 3. resetButton 이벤트 바인딩
// 4. recordListWrapper show / hidden 처리
// 5. tbody 자식 요소 제거  => node.textContent = ''  || clearContents()
// 6. count, total값 초기화 
// 7. recordButton, resetButton 비활성화 (disabled)


// 미니 과제 => 만들어주는 함수, 초기화 버튼 클릭시 모든 데이터 날리기 

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');


let count = 0;
let total = 0;


function createItem(value){

  return `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
}



function renderRecordItem(){

  // const diceValue = Number(cube.dataset.dice)
  // const diceValue = cube.dataset.dice * 1
  // const diceValue = cube.dataset.dice / 1
  const diceValue = +memo('cube').dataset.dice;
  
  insertLast('.recordList tbody',createItem(diceValue));
  endScroll(recordListWrapper)

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


function handleReset(){
  recordListWrapper.hidden = true;

  clearContents('tbody');
  count = 0;
  total = 0;

  recordButton.disabled = true;
  resetButton.disabled = true;
  

  // 1. tbody 안에 요소 제거  node.textContent = '' , ????
  // 2. count, total 값 초기화  ?? =  0 
}

rollingButton.addEventListener('click',handleRollingDice);
recordButton.addEventListener('click',handleRecord);
resetButton.addEventListener('click',handleReset);


























