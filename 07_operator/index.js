/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/typedef */
/**
 * @description 산술연산자
 */

(() => {
  console.log("이항 산술 연산자 예제코드");
  console.log(5 + 2);
  console.log(5 - 2);
  console.log(5 * 2);
  console.log(5 / 2);
  console.log(5 % 2);
})();

/**
 * @description 증감 연산자
 */
(() => {
  console.log("증감연산자 예제코드");
  let x = 1;
  console.log(x++);
  console.log(x--);

  let y = 1;
  result = ++y;
  console.log(result, y);
  result = y++;
  console.log(result, y);

  result = --y;
  console.log(result, y);
  result = y--;
  console.log(result, y);

  let z = 10;

  console.log(+z);
  console.log(-z);

  let a = "1";
  console.log(+a, a);
  a = true;
  console.log(+a, a);
  a = false;
  console.log(+a, a);
  a = "hanam";
  console.log(+a, a);

  console.log(-(-10));
})();

/**
 * @description 문자열 연결 연산자 예제코드
 */

() => {
  console.log("문자열 연결 연산자 예제코드");
  console.log("1" + 2);
  console.log(1 + "2");
};

/**
 * @description 할당연산자 예제코드
 */

() => {
  console.log("할당 연산자 예제코드");
  let x;

  console.log((x = 10));
  console.log((x += 5));
  console.log((x *= 5));
  console.log((x /= 5));
  console.log((x %= 5));

  let str = "나의 이름은";

  console.log((str += "김가람 입니다."));

  let a,
    b,
    c = 10;

  console.log(a, b, c);
};

/**
 * @description 비교연산자 예제코드
 */

(() => {
  console.log("비교연산자 예제코드");
  console.log(5 == "5");
  console.log(5 == 5);
  console.log(5 === "5");
  console.log(5 === 5);

  console.log(NaN === NaN);
  console.log(Number.isNaN(NaN));
  console.log(Object.is(NaN, NaN));
})();

/**
 * @description 삼항 조건 연산자 예제코드
 */

((x) => {
  console.log("삼항 조건 연산자 예제코드");
  let y = 2;
  let result = x > y ? "크다" : "작다";
  console.log("result : ", result);
})(10);

/**
 * @description 논리연산자 예제코드
 */

(() => {
  console.log("논리연산자 예제코드");

  console.log(true || true);
  console.log(true || false);
  console.log(false || true);
  console.log(false || false);
  console.log(true && true);
  console.log(true && false);
  console.log(false && true);
  console.log(false && false);
  console.log(!true);
  console.log(!!true);
  console.log(!false);
  console.log(!!false);
})();

/**
 * @description 그룹 연산자 예제코드
 */

(() => {
  console.log("그룹 연산자 예제코드");
  console.log(10 * 2 + 3, 10 * (2 + 3));
})();

/**
 * @description typeof 연산자 예제코드
 */

(() => {
  console.log("typeof 연산자 예제코드");
  console.log(typeof "");
  console.log(typeof 1);
  console.log(typeof NaN);
  console.log(typeof true);
  console.log(typeof undefined);
  console.log(typeof Symbol());
  console.log(typeof null);
  console.log(typeof []);
  console.log(typeof {});
  console.log(typeof new Date());
  console.log(typeof /test/gi);
  console.log(typeof function () {});
})();

/**
 * @description 지수 연산자 예제코드
 */

(() => {
  console.log("지수 연산자 예제코드");
  console.log(2 ** 2);
  console.log(2 ** 5);
  console.log(2 ** 0);
  console.log(2 ** -2);
  console.log((-5) ** 2);
})();

/**
 * @description 연산자의 부수효과 예제코드
 */

(() => {
  console.log("연산자의 부수효과 예제코드");
  let o = { a: 1 };
  delete o.a;
  console.log(o);
})();
