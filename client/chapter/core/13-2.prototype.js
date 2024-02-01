/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


function Ani(name){
  // this.name = name
}

const _a = new Ani('호돌이')



/* -------------------------------------------- */
/*                      ---                     */
/* -------------------------------------------- */

// constructor method는 최초 1회만 실행됨. (n회? x)

class Animal {
  #legs = 4;
  #tail = true;


  constructor(name){
    this.name = name;
    this.stomach = [];

  }

  get eat(){
    return this.stomach
  }

  set eat(food){
    this.prey = food;
    this.stomach.push(food);
  }

}


// const a = new Animal('호돌이')




class Tiger extends Animal{
  
  


  constructor(name){
    super(name)
    this.pattern = '호랑이무늬'
  }

  static options = {
    version: '0.0.1',
    company: 'like-lion',
    ceo: '---'
  }

  static bark(){
    return '어흥!'
  }

  hunt(target){
    return `${target}에게 조심히 접근한다.`
  }
}



const 한라산호랑이 = new Tiger('한돌이');






// Array.from();
// Array.isArray();


// const arr = new Array()

// arr.forEach()
// arr.reduce()





// class Array{

//   static from(){

//   }

//   static isArray(){

//   }

//   forEach(){

//   }
//   reduce(){

//   }
  
// }



// const a = new Array()

// Array.from()



// model (데이터)
// view (랜더링)
// control (이벤트)



class Todo {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  #createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.#createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}





const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList'
})



const button2 = new Todo({
  input: '#todo2',
  button: '.register2',
  renderPlace: '.todoList2'
})




/* global React */



class Button extends React.Component{
  
  render(){
    
    return <div> </div>
  }
}




function Button(){
  

  return (
    <div>
      {arr}
    </div>
  )
}

























