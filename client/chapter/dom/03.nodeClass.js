/* ------------------------------ */
/* DOM Node Class                 */
/* ------------------------------ */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* ------------------------------------------------------------------------ */

// EventTarget – EventTarget가 모든 DOM 노드의 베이스에 있기때문에 DOM 노드에서 '이벤트’를 사용할 수 있습니다.


// Node – getter 역할을 하는 parentNode, nextSibling, childNodes 등의 주요 트리 탐색 기능을 제공합니다. 
//        Text 클래스, Element 클래스, Comment클래스는 Node클래스를 상속받습니다.


// Element – nextElementSibling, children 이나 getElementsByTagName, querySelector 같이 요소 전용 탐색을 도와주는 프로퍼티나 메서드가 이를 기반으로 합니다. 
//           SVGElement, XMLElement, HTMLElement 클래스의 [베이스] 역할을 합니다.


// HTMLElement – HTML 요소 노드의 베이스 역할을 하는 클래스입니다.
//               HTMLInputElement – <input> 요소에 대응하는 클래스
//               HTMLBodyElement – <body> 요소에 대응하는 클래스
//               HTMLAnchorElement – <a> 요소에 대응하는 클래스


/* 노드 정보 ------------------------------------------------------------- */

// - nodeType
// - nodeName (vs. tagName)

const first = getNode('.first');


console.log( first.nodeType === document.ELEMENT_NODE );

console.log( first.nodeName );
console.log( first.tagName === 'SPAN' );


/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
// * 기존 내용 삭제
// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀

// first.innerHTML = ''

first.innerHTML += '<strong>멋쟁이</strong> 사자처럼'




// - textContent
// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출


first.textContent = '30% 파격 세일' // setter

first.textContent // getter


/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일




// first.hidden = false;

// let toggle = false;

// setInterval(() => {
//   getNode('h1').hidden = toggle ? true : false;
//   toggle = !toggle
// }, 500);


// import { gsap } from "gsap";

/* global gsap */

gsap.to('h1',{
  // autoAlpha:0,
  rotate:360,
  x:100,
  y:300,
  repeat:-1,
  yoyo:true,
  // duration:0.5
})
































