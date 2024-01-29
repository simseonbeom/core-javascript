/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// arguments 잘안씀





// 함수 선언 → 화살표 함수 (표현)식

// spread syntax    ...arr

//                //  rest parameter
// let calcAllMoney = (...args)=>{

//   // args 배열을 순환하여 모든 수의 합을 구하자!

//   let total = 0;
//   // for
//   // for(let i = 0; i < args.length; i++){
//   //   total += args[i];
//   // }

//   // for..of
//   // for(let value of args) total += value

//   // forEach
//   // args.forEach(item => total += item)

   
//   // reduce

//   // args.reduce((acc,cur)=> acc + cur,0)


//   return args.reduce((acc,cur)=> acc + cur,0)
// };

               //  rest parameter
let calcAllMoney = (...args)=> args.reduce((acc,cur)=> acc + cur,0);


console.log( calcAllMoney(10,30,40,50) );




const createUser = (name,age)=> ({ name:name, age:age })



createUser('이경민',41)
createUser('김보미',43)





// 화살표 함수와 this




// 자바스크립트 함수는 양면의 얼굴 ( 일반함수 / 생성자함수 )

// 나는 일반함수를 만들었고 일반함수를 사용하길 원함

// const Button = ()=>{

// }


// class Button2{  // 함수

// }


// const c = new Button2();




// function Button2(){

// }

// 객체 지향 프로그래밍 vs 함수 지향 프로그래밍

// const a = Button() // undefined


// 정리하면
// 화살표 함수 = 일반함수에 사용 (함수 중심 설계)
// 클래스 구문 = 생성자 함수에 사용 (객체 중심 설계)
// 인가요?

// 일반 함수
// this : 나를 호출한 대상을 this로 찾음


// 화살표 함수 
// this : 가지고 있지 않음. 내 상위 영역에서 찾음


// 객체의 메서드를 정의할때 concise method 사용 
// 메서드 안에서 함수를 정의할때 arrowFunction 효율적임


const user = {
  total:0,
  name:'박가희',
  age:9,
  address:'서울시 중랑구 면목동',
  grades: [80,40,15],
  totalGrades(){

    this.grades.forEach((item)=>{
      
      this.total += item
    })

    return this.total
    // console.log(this); // user
    
    // const sayHi = () => {
    //   console.log(this);
    // }
    
    // sayHi()
    
  }
}































/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 