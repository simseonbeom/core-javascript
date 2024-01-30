/* ---------------- */
/* For In Loop      */
/* ---------------- */





const js = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty(){
    return '내가 누굴까~?'
  }
};


Object.prototype.nickName = 'tiger';

// 객체의 속성(property) 포함 여부 확인 방법

const key = 'nickName'

// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
// console.log(  key in js  );

// 자바스크립트는 hasOwnProperty를 보호해주지 않습니다.
// 생성된 객체의 method는 불안함, => 진짜 객체의 능력을 빌려씀 

// 메서드 빌려쓰기 (call)

// console.log( js.hasOwnProperty(key) );

console.log( Object.prototype.hasOwnProperty.call(js,key) );



// key in js

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

console.clear()

for(let key in js){

  if(Object.prototype.hasOwnProperty.call(js,key)){

    console.log(key);


  // 1. key = 'creator'  console.log(key);
  // 2. key = 'createAt'  console.log(key);
  // 3. key = 'createAt'  console.log(key);

  }

  

}


// const obj = {}

// Object.defineProperty(obj,'key1',{
//   enumerable:false,
//   value:'kindtiger'
// })




// 배열도 for..in을 쓸 수 있을까?


const tens = [10,100,1000,10000];



for(let key in tens){
  console.log(tens[key]);
}

// 배열은 순서 보장이 안됨, 성능x => for..in은 객체에 양보하세요..




// 반복문




































