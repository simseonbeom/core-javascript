
/* global gsap */


import { 
  tiger, 
  delayP, 
  insertLast, 
  changeColor,
  getNode as $,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';




const END_POINT = 'https://jsonplaceholder.typicode.com/users'

const userCardInner = $('.user-card-inner');


// [phase-1]
// 1. user 데이터를 tiger 함수를 사용해 fetch 해주세요.
//    - tiger.get()

// 2. 함수 안에 넣기 ( renderUserList )
// 3. html,css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
//    - [✅] 유저 데이터(array) 순환하여 모든 아이템 뽑아내기 (forEach) 
//    - [✅] 템플릿 변수 만들기 (article) 
//    - [✅] template literal을 사용하여 데이터 집어넣기(보간 : interpolation) 
//    - [✅] insertLast(어디에,무엇을)함수를 사용하여 화면에 렌더링하기 
// 5. 함수 분리 

async function renderUserList(){


  renderSpinner(userCardInner);

  try{

    await delayP();

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove()
      }
    })
    
    const response = await tiger.get(END_POINT);

    const userData = response.data;
  
    userData.forEach(user => renderUserCard(userCardInner,user))
  
    changeColor('.user-card');
  
    gsap.from('.user-card',{
      x: 100,
      opacity:0,
      stagger: 0.1,
    })

  }
  catch{
    renderEmptyCard(userCardInner)
  }
}



renderUserList()




function handleDelete(e){

  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if(!button) return;

  const id = article.dataset.index.slice(5)

  console.log( id );

  // tiger.delete()
  
  // article의 dataset.index


}


userCardInner.addEventListener('click',handleDelete)




































