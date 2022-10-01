// 이미 foo.js에서 선언한 전역 변수에 'bar' 할당
// 이 값으로 덮어 씌워지게 된다.
// 전역 스코프를 공유하게 되면서 생기는 문제점
var x = 'bar';

console.log(window.x);
