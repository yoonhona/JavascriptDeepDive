# 36장 디스트럭처링 할당


구조화된 배열과 같은 이터러블 또는 객체를 비구조화(destructuring)하여 1개 이상의 변수에 개별적으로 할당하는 것

## 36.1 배열 디스트럭처링 할당

```javascript
var arr = [1, 2, 3]; // 할당의 대상은 이터러블

var one   = arr[0]; // 할당 기준은 배열 인덱스
var two   = arr[1];
var three = arr[2];

// ES6 배열 디스트럭처링
const [one, two, three] = arr;

const [x, y] = [1, 2];

// 우변에 이터러블 미할당시 에러
const [x, y];
const [a, b] = {};

// 배열 디스트럭처링 할당 기주은 인덱스, 순서대로 할당
const [a, b] = [1, 2]; // 1 2
const [c, d] = [1] // 1 undefined
const [e, f] = [1, 2, 3]; // 1 2
const [g, , h] = [1, 2, 3]; // 1 3

// 기본값
const [a, b, c = 3] = [1, 2]; // 1 2 3
const [e, f = 10, g = 3] = [1, 2];

// 필요한 요소만 추출하여 변수 할당
(() => {
    function parse(url = '') {
        const parseURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
        if(!parseURL) return {};
        const [, protocol, host, path] = parseURL;
        return {protocol, host, path}
    }

	console.log(parse('https://developer.mozilla.org/en-US/docs/Web/JavaScript'))
  // {protocol: 'https', host: 'developer.mozilla.org', path: 'en-US/docs/Web/JavaScript'}
})()

```

## 36.2 객체 디스트럭처링 할당

```javascript

// es5
var user = { firstName: 'ungmo', lastName: 'Lee' };
var firstName = user.firstName;
var lastName = user.lastName;    
console.log(firstName, lastName); // ungmo Lee

// es6
const user = { firstName: 'ungmo', lastName: 'Lee' };
const { firstName, lastName } = user;
console.log(firstName, lastName); // ungmo Lee

// 객체 디스트럭처링 할당도 가능
const { firstName, lastName } = { firstName: 'ungmo', lastName: 'Lee' };
console.log(firstName, lastName); // ungmo Lee

// 객체로 평가될 수 있는 표현식을 할당하지 않으면 에러 발생
const { firstName, lastName };
// Uncaught SyntaxError: Missing initializer in destructuring declaration
const { firstName, lastName } = null;
// Uncaught TypeError: Cannot destructure property 'firstName' of 'null' as it is null.

const user = { firstName: 'ungmo', lastName: 'Lee' };
// 아래의 축약 표현
const { firstName, lastName } = user;
const { firstName: firstName, lastName: lastName } = user;

const user = { firstName: 'ungmo', lastName: 'Lee' };
// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다.
// 프로퍼티 키가 lastName인 프로퍼티 값을 ln에 할당, firstName인 fn에 할당
const { firstName: fn, lastName: ln } = user;
console.log(fn, ln); // ungmo Lee

const user = { lastName: 'Lee' };
// 기본값 할당
const { firstName = 'Ungmo', lastName } = user;
console.log(firstName, lastName);

// 프로퍼티 추출 가능
const str = 'Hello';
// String length
const { length } = str; // 5
console.log(length);
const todo = { id: 1, content: 'HTML', completed: true };
// todo 객체에서 id만 추출
const { id } = todo;
console.log(id); // 1

function print(todo) {
    console.log(`${todo.content} ${todo.completed ? '완료' : '비완료'}`);
}
console.log(print({ id: 1, content: 'HTML', completed: true })); // HTML 완료
// 매개변수에 디스트럭처링을 사용하여 가독성 좋게 표현
function print({content, completed}) {
    console.log(`${content} ${completed ? '완료' : '비완료'}`);
}
console.log(print({ id: 1, content: 'HTML', completed: true })); // HTML 완료

// 배열, 객체 디스트럭처링 혼용
const todos = [
    { id: 1, content: 'html', completed: true },
    { id: 2, content: 'css', completed: false },
    { id: 3, content: 'js', completed: false },
];
const [, {content}] = todos;
console.log(content);

// 중첩 객체
const user = {
    name: 'lee',
    address: {
        zipcode: '10101',
        city: 'seoul'
    }
};
const { address: { city } } = user;
console.log(city);

// Rest 프로퍼티 사용 가능
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest);

```
