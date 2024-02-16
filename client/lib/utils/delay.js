import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";
import { xhrPromise } from "./xhr.js";
import { insertLast } from '../dom/insert.js'
import { getRandomMinMax } from '../math/getRandomMinMax.js'
import { tiger } from "./tiger.js";

const first = getNode(".first");
const second = getNode(".second");

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//     delay(()=>{
//       first.style.top = '0'
//       second.style.top = '0'
//     })
//     second.style.transform = 'rotate(-360deg)'
//   })
//   second.style.top = '100px';
// })

// first.style.transform = 'rotate(360deg)'
// first.style.top = '0'

// mixin

// 기존 객체  +  전달 받은 객체

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  successMessage: "성공입니다.",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

//   options : number | object

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  let { shouldReject, successMessage, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(successMessage);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

// delayP(1000)
// .then((res)=>{

//    first.style.top = '-100px'
//    second.style.top = '100px'

//    return delayP(1000)
// })
// .then((res)=>{

//   first.style.transform = 'rotate(360deg)'
//   second.style.transform = 'rotate(-360deg)'
//   return delayP(1000)
// })
// .then((res)=>{

//   first.style.top = '0'
//   second.style.top = '0'
//   return delayP(1000)
// })
// .catch(()=>{

// })

// const promise = new Promise((a,b)=>{
//   b('실패!')
// })

// console.log( promise );

// function a(){

//   return new Promise((resolve, reject) => {
//     resolve({nickName:'kindtiger',age:15})
//   })

// }

// a().then((res)=>{
//   console.log( res );
// })

// console.log(  );

// async : 함수의 리턴값을 무조건 Promise<Object>

async function delayA(data) {
  return data;
}

// delayA('신재훈').then(console.log)

const result = await delayA("신재훈");







// IIAFE

// (async ()=>{

// })()






/* -------------------------------------------- */
/*                   callback                   */
/* -------------------------------------------- */

// function 라면끓이기() {
//   delay(() => {
//     console.log("물");
//     delay(() => {
//       console.log("스프");
//       delay(() => {
//         console.log("면");
//         delay(() => {
//           console.log("그릇");
//         });
//       });
//     });
//   });
// }










/* -------------------------------------------- */
/*                    promise                   */
/* -------------------------------------------- */

// function 라면끓이기(){

//   delayP()
//   .then(()=>{
//     console.log('물');
//     return delayP()
//   })
//   .then(()=>{
//     console.log('스프');
//     return delayP()
//   })
//   .then(()=>{
//     console.log('면');
//     return delayP()
//   })
//   .then(()=>{
//     console.log('그릇');
//     return delayP()
//   })

// }



/* -------------------------------------------- */
/*                     async                    */
/* -------------------------------------------- */



async function 라면끓이기(){


  console.log('물');
  await delayP()


  console.log('스프');
  await delayP()


  console.log('면');
  await delayP()


  console.log('그릇'); 
  await delayP()


}


// 라면끓이기();



async function getData(){
  
  const response = await tiger.get(`https://pokeapi.co/api/v2/pokemon/${getRandomMinMax(0,100)}`);


  const imgSrc = response.data.sprites.other.showdown['front_default'];

  insertLast('h1',`<img src="${imgSrc}" alt="" />`)
  
}


// getData()























