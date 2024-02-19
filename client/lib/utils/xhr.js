/* 
  [readyState]
  
  0: uninitialized
  1: loading
  2: loaded
  3: interactive
  4: complete

*/

/* -------------------------------------------- */
/*                 xhr callback                 */
/* -------------------------------------------- */

const END_POINT = "https://jsonplaceholder.typicode.com/users";

export function xhr({
  method = "GET",
  url = "",
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener("readystatechange", () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail({ message: "에러가 발생했습니다!" });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// callback => 함수 본문을 넘겨서 안쪽 함수에서 실행

// 자바스크립트 함수는 객체다.

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: "POST",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: "PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

// xhr.post(END_POINT,{name:'tiger'},(data)=>{console.log(data)},()=>{})

// xhr.delete()

/* -------------------------------------------- */
/*                  xhr Promise                 */
/* -------------------------------------------- */

const defaultOptions = {
  method: "GET",
  url: "",
  body: null,
  errorMessage: "서버와의 통신이 원활하지 않습니다.",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export function xhrPromise(options) {
  // mixin

  const { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: "알 수 없는 오류가 발생했습니다!" });
          // error
        }
      }
    });
  });
}

// xhrPromise({
//   url: END_POINT,
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     err.message;
//   });


xhrPromise.get = (url) => {
  return xhrPromise({ url })
}


xhrPromise.post = (url,body) =>{
  return xhrPromise({
    method:'POST',
    url,
    body
  })
}

xhrPromise.put = (url,body) =>{
  return xhrPromise({
    method:'PUT',
    url,
    body
  })
}

xhrPromise.delete = (url) =>{
  return xhrPromise({
    method:'DELETE',
    url,
  })
}



// xhrPromise.post()
// xhrPromise.put()
// xhrPromise.delete()


// xhrPromise.post(END_POINT,{name:'tiger'})
// .then(console.log)
// .catch(console.log)












