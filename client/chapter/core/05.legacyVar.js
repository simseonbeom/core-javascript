/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.


let outside = 'outer';

{
  
  console.log( outside );

  console.log(outside);

 

  let inside = 'inner';

}



let inside = 'another'




// (function (){
//   var outside = 'outer'
//   console.log(outside);
  
// })()





// var는 변수의 중복 선언을 허용합니다



var a = 10;
var a = 5;



let b = 30;
let b = 50;







// 선언하기 전 사용할 수 있는 var


