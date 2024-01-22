/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
// console.log(typeof empty);


// 2. 값이 할당되지 않은 상태

let undef;
// console.log(typeof undef);


// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello"; // string literal 방식
const single = 'hello';
const backtick = `hello ${undef}`;




const str = new String('hi!'); // string constructor(생성자) function 방식 
// console.log(str);


// console.log(backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150; // number literal 
const floatingPointNumber = 10.331;


const num = new Number(123); // number constructor function 

// console.log(typeof floatingPointNumber);



// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigNumber = 123n;
// const big = BigInt(133);
// console.log(typeof bigNumber);


// 6. 참(true, yes) 또는 거짓(false, no)
const isClicked = false;

// const bool = new Boolean(false);

// console.log(typeof isClicked);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {name:'tiger'};


const object = new Object({age:40})



// console.log(typeof obj);


// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uuid');
// console.log(typeof unique);



/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

function sayHi(){

}


// Object


 

const user = {
  name:'tiger',
  age:27,

  sayHi:function(){           // normal function method 
    console.log('hello~~');
  },

  sayHi2:()=>{                // arrow function method
    // console.log('hello2~~~');
    console.log(this);
  },

  sayHi3(){                   // concise method 
    // console.log('hello3~~~');
    console.log(this);
  }
}





// Array

const arr = [1,'a',{name:'tiger'},4,()=>{}];
// console.log( arr[2].name );








// function

// 상자 함
// 셈  수 


// function sum(a,b){ // 선언
//   return a+b
// }

// const result = sum(1,2);

// console.log( result ); // 3



//  function -> class 



function 붕어빵틀(재료){
  return `냠냠 ${재료}맛 붕어빵`
}



const 선범 = 붕어빵틀('슈크림');
const 태희 = 붕어빵틀('피자');

















// this









