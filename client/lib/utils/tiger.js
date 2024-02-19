



const END_POINT = 'https://jsonplaceholder.typicode.com/users'


// await 병 

const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export const tiger = async (options)=>{

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url,restOptions); // Promise<Response>

  // ok : status 200 ~ 399 
  if(response.ok){ // 통신 성공
    response.data = await response.json();
  }

  return response
}


// const result = await tiger({
//   url:END_POINT
// });



tiger.get = (url,options)=>{
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url,body,options)=>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.put = (url,body,options)=>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url,options)=>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}






// const data = await tiger.get(END_POINT);
// const data = await tiger.post(END_POINT,{name:'tiger'});


// tiger.post()
// tiger.put()
// tiger.delete()




















