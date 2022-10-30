# 43장

# 43.1 Ajax란?

- 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 **웹페이지를 동적으로 갱신**하는 프로그래밍 방식
- Web API인 XMLHttpRequest 객체를 기반으로 동작
- 전통적인 방식은 완전한 HTML을 전송받아 전체를 렌더링하는 방식
    - 불필요한 데이터 통신
    - 변경할 필요가 없는 부분도 렌더링
    - 동기 방식으로 동작하기 때문에 다음 처리는 블로킹
- Ajax는 웹페이지에 변경이 필요한 데이터만 비동기 방식으로 전송받아 변경기 필요한 부분만 렌더링
    - 불필요한 데이터 통신이 발생하지 않음
    - 변경할 필요가 없는 부분은 다시 렌더링 안함, 화면 깜빡임 현상 없음
    - 클라이언트 - 서버간에 비동기 방식으로 동작하기에 블로킹이 발생하지 않음

  # 43.2 JSON

  [https://www.json.org/json-ko.html](https://www.json.org/json-ko.html)

  ## 43.2.1 JSON 표기 방식

  키와 값으로 구성된 순수한 텍스트

    ```jsx
    {
      "name": "LEE",
      "age": 20,
      "alive": true,
      "hobby": ["tennis"]
    }
    ```

    - 키는 큰 따옴표
    - 값은 객체 리터럴과 같은 표기법
    - 문자열은 반드시 큰 따옴표

## 43.2.2 JSON.strigify

- JSON.strigify 메서드는 객체를 JSON 포맷의 문자열로 변환
- 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화해야 하는데 이를 직렬화라 함

```jsx
const obj = { 
    name: 'Na', age: 35
}
// 객체를 문자열로 변환
const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Na","age":35}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
// string {
//   "name": "Na",
//   "age": 35
// }

function filter(key, value) {
    return typeof value === 'number' ? undefined : value;
}
const filteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof filteredObject, filteredObject);
// string {
//   "name": "Na"
// }

// 배열도 가능
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false },
    ];
const json = JSON.stringify(todos, null, 2);
console.log(typeof json, json);
/*
string [
  {
    "id": 1,
    "content": "HTML",
    "completed": false
  },
  {
    "id": 2,
    "content": "CSS",
    "completed": true
  },
  {
    "id": 3,
    "content": "JavaScript",
    "completed": false
  }
]
*/
```

## 43.3 XMLHttpRequest

- 브라우저는 주소창, HTML form 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공
- 자바스크립트를 사용할 때는 XMLHttpRequest 객체

> 윤호
[Fetch를 쓰자](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch), 안된다면 랩핑된 라이브러리 [Axios](https://github.com/axios/axios)라도
>

### 43.3.1 XMLHttpRequest 객체 생성

- 생성자 함수를 호출하여 생성
- Web API이므로 브라우저에서만 정상적 실행

### 43.3.2 XMLHttpRequest 객체의 프로퍼티와 메서드

페이지 822 ~ 823 참조

### 43.3.3 HTTP 요청 전송

```jsx
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();
// HTTP 요청 초기화
xhr.open('GET', '/users');
// 요청 헤더 설정
// 데이터 타입 지정, json
xhr.setRequestHeader('content-type', 'application/json');
// 요청 전송
xhr.send();
```

- XMLHttpRequest.prototype.send
    - open 메서드로 초기화된 HTTP 요청을 서버에 전송
    - GET, POST 요청 메서드에 따라 전송방식에 차이
        - GET: 데이터를 URL의 일부인 쿼리 문자열로 전송
        - POST: 데이터를 Request Body에 담아 전송
- XMLHttpRequest.prototype.setReqeustHeader
    - HTTP 요청의 헤더값을 설정
    - open 메서드를 호출한 이후에 호출

### 43.3.4 HTTP 응답 처리

- 응답을 처리하려면 XMLHttpRequest 객체의 이벤트를 캐치
- onreadystatechange, onload, onerror
