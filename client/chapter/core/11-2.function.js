/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);








// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 이라 부른다.
  
  console.log( arguments ); // 순환시켜서 | 반복시켜서 값을 다 더하기

  let total = 0;

  // let ar2 = []
  // // for 문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i]
  //   ar2.push(arguments[i] * 2)
  // }

  // for ...of
  // for(let value of arguments){
  //   total += value;
  // }

  //  빌려쓰기 

  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // })

  //  arguments의 부모를 배열로 바꿔치기 한다면?

  // arguments.__proto__ = Array.prototype;
  // arguments.forEach(function(item,index){
  //   total += item;
  // })

  // arguments 객체(유사배열) => 진짜 배열 (array)

  

  // const arr = Array.prototype.slice.call(arguments)
  // const arr = Array.from(arguments);
  const arr = [...arguments]  // spread syntax


  // arr.forEach(function(item){
  //   total += item;
  // })

  // arr.forEach( item => total += item)

  // 배열의 메서드 ⭐️ Array method ⭐️

  // forEach => 값을 반환하지 않음. 반복의 로직만 처리
  // reduce  => 값을 반환함.  모든걸 다 (배열,객체,문자,숫자)
  



  const map = arr.map( a => a * 2)
  console.log( map );
  

  const filter = arr.filter( a => a > 50)
  console.log( filter );

  // map     => 배열을 반환함. 연산
  // filter  => 배열을 반환함. 필터링 

  total = arr.reduce(function(acc,cur){
    return acc + cur
  },0)

  // return arr.reduce((acc,cur)=> acc + cur)
  




  // return total 


  // return a + b + c + d + e + f + g
};

const result = calculateTotal(10,20,30,40,50,60,70,80);

console.log( result );





// const data = [
//   {
//     name:'tiger',
//     age:30,
//   },
//   {
//     name:'kindtiger',
//     age:20,
//   },
//   {
//     name:'seonbeom',
//     age:41,
//   }
// ]



// const tag = data.map((d)=>{
//   return `<li> 이름 : ${d.name}</li>`
// })


// tag.forEach((i)=>{
//   document.body.insertAdjacentHTML('beforeend',i)
// })



// const age = data.map((d)=> d.age)




// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){

};



// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};


// 콜백 함수 (표현)식
let cb = function(state,success,fail){

  if(state){
    return success()
  }else{
    return fail()
  }
};


// cb(
//   false,
//   ()=> '성공',
//   ()=> '실패',
// )


cb(
  false,
  function () {return '성공'},
  function () {return '실패'},
)



function movePage(url,success,fail){

  // if(url.includes('www')){
  //   success(url)
  // }else{
  //   fail()
  // }
  
  url.includes('www') ? success(url) : fail()
}


// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )


movePage(
  'https://www.naver.com',
  function (url){
    console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);
    
    setTimeout(() => {
      // window.location.href = url
    }, 3000);
  },
  function (){
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
)











// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;






