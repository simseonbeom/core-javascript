
import { getNode } from '../dom/getNode.js'



export const memo = (() => {
  const cache = {
    // key : value
  }

  return (key,callback) => {
    
    if(!callback) return cache[key];
    
    if(cache[key]){
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
      
      return cache[key];
    }
    cache[key] = callback();
  }
  
})()


// memo('a',()=> 'aa')


// memo('cube',()=> getNode('#cube')); // setter
// memo('cube2',()=> '안녕 큐브!'); // setter


// console.log( memo('cube')  );

// memo('cube') // div#cube   getter
















