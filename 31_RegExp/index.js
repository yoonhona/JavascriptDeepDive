(() => {
  const tel = '010-1234-578팔';
  const regExp = /^\d{3}-\d{4}-\d{4}$/;
  console.log(regExp.test(tel));
})();
console.log('-------–––––------------------');
(() => {
  const target = 'Is this all there is?';
  /**
   * 패턴 is
   * 플래그 i => 대소문자를 구별하지 않고 검색
   */
  const regexp = /is/i;
  console.log(regexp.test(target));
})();
console.log('-------–––––------------------');
(() => {
  const target = 'Is this all there is?';
  const regexp = new RegExp(/is/i);
  console.log(regexp.test(target));
})();
console.log('-------–––––------------------');

(() => {
  const target = 'Is this all there is?';
  const regExp = /is/;
  console.log(regExp.exec(target));
  // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
})();
console.log('-------–––––------------------');

(() => {
  const target = 'Is this all there is?';
  const regExp = /is/;
  console.log(regExp.test(target));  // true

})();
console.log('-------–––––------------------');
(() => {

  const target = 'Is this all there is?';
  const regExp = /is/;
  console.log(target.match(regExp));
  // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
  const regExp2 = /is/g;
  console.log(target.match(regExp2));
  // [ 'is', 'is' ]
})();
console.log('-------–––––------------------');

(() => {
  const target = 'Is this all there is?';
  console.log(target.match(/is/));
  // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
  console.log(target.match(/is/i));
  // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]
  console.log(target.match(/is/g));
  // [ 'is', 'is' ]
  console.log(target.match(/is/ig));
  // [ 'Is', 'is', 'is' ]
})();
console.log('-------–––––------------------');

// 31.5.1
(() => {
  const target = 'Is this all there is?';
  const regexp = /is/;
  console.log(regexp.test(target));
  console.log(target.match(regexp));

  const regExp2 = /is/i;
  console.log(target.match(regExp2));

  const regExp3 = /is/ig;
  console.log(target.match(regExp3));

})();

// 31.5.2 임의의 문자열 검색
(() => {
  console.log('-------–––––------------------');
  const target = 'Is this all there is?';
  const regExp = /.../g;
  console.log(target.match(regExp));
})();
console.log('-------–––––------------------');

// 31.5.3 반복 검색
(() => {
  const target = 'A AA B BB Aa BB AAA';
  const regExp = /A{1,2}/g;
  console.log(target.match(regExp));

  const regExp2 = /A{2}/g;
  console.log(target.match(regExp2));

  const regExp3 = /A{2,}/g;
  console.log(target.match(regExp3));

  const regExp4 = /A+/g;
  console.log(target.match(regExp4));

  const target2 = 'color colour';
  const regExp5 =/colou?r/g;
  console.log(target2.match(regExp5));

})();
console.log('-------–––––------------------');

// 31.5.4 OR 검색
(() => {
  const target = 'A AA B BB Aa Bb';

  const regExp = /A|B/g;
  console.log(target.match(regExp));

  const regExp2 = /A+|B+/g;
  console.log(target.match(regExp2));

  const regExp3 = /[AB]+/g;
  console.log(target.match(regExp3));

  const target2 = 'A AA B BB ZZ Aa Bb';
  const regExp4 = /[A-Z]+/g;
  console.log(target2.match(regExp4));

  const target3 = 'A AA B BB ZZ Aa Bb 12';
  const regExp5 = /[A-Za-z]+/g;
  console.log(target3.match(regExp5));

  const target4 = 'AA BB 12,345';
  const regExp6 = /[0-9]+/g;
  console.log(target4.match(regExp6));
  const regExp7 = /[0-9,]+/g;
  console.log(target4.match(regExp7));
  const regExp8 = /[\d,]+/g;
  console.log(target4.match(regExp8));
  const regExp9 = /[\D,]+/g;
  console.log(target4.match(regExp9));

  const target5 = 'AA BB 12,345 _$%&';
  const regExp10 = /[\w,]+/g;
  console.log(target5.match(regExp10));
  const regExp11 = /[\W,]+/g;
  console.log(target5.match(regExp11));
})();
console.log('-------–––––------------------');


// 31.5.5 NOT 검색
(() => {
  const target = 'AA BB 12 Aa Bb';
  const regExp = /[^0-9]+/g;
  console.log(target.match(regExp));
})();
console.log('-------–––––------------------');


// 31.5.6 - 7
(() => {
  const target = 'https://poiemeweb.com';
  const regexp = /^https/;
  console.log(regexp.test(target));
  const regexp2 = /com$/;
  console.log(regexp2.test(target));
})();
console.log('-------–––––------------------');

// 31.6
// 31.6.1 특정 단어로 시작
(() => {
  const url = 'https://example.com';
  console.log(/^https?:/.test(url));
  console.log(/^(http|https):/.test(url));
})();
console.log('-------–––––------------------');
// 31.6.2 특정 단어로 끝나는지
(() => {
  const fileName = 'index.html';
  console.log(/html$/.test(fileName));
})();
console.log('-------–––––------------------');

// 31.6.3 숫자로만 이루어진
(() => {
  const target = '12345';
  console.log(/^\d+$/.test(target));
})();
console.log('-------–––––------------------');

// 31.6.4 하나 이상의 공백으로
(() => {
  const target = ' Hi';
  console.log(/^[\s]+/.test(target));
})();
console.log('-------–––––------------------');

// 31.6.5 아이디로 사용 가능한지
(() => {
  const id = 'abc123';
  console.log(/^[A-Za-z0-9]{4,10}$/.test(id));
})();
console.log('-------–––––------------------');

// 31.6.6 메일 주소 형식에 맞는지
(() => {
  const email = 'ungmo2@gmail.com';
  console.log(/^[0-9a-zA-Z]/.test(email));
})();
console.log('-------–––––------------------');

// 31.6.7 핸드폰 번호
(() => {
  const cellphone = '010-1234-5678';
  console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone));
})();
console.log('-------–––––------------------');


// 31.6.8 특수 문자
(() => {
  const target = 'abc#123';
  console.log((/[^A-Za-z0-9]/gi.test(target)));
})();
console.log('-------–––––------------------');
