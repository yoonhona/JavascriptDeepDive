# strict mode

- 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시키는 것을 이야기한다.
- ESLint 같은 린트 도구를 사용해도 유사한 효과를 얻을 수 있다.
- 린트 도구는 정적 분석 기능을 통해 소스코드를 실행하기 전에 소스코드를 스캔하여 문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅해주는 유용한 도구다.

## strict mode의 적용

```
 function foo() {
   x = 10;
 }
 foo();
 console.log(x); // 10
```

- foo 함수내에서 x에 값 10을 할당했을 때, x의 변수를 찾아야 값을 할당할 수 있기 때문에 x 변수가 어디에 선언되어있는지 스코프 체인을 통해 검색하기 시작한다.
- 자바스크립트의 엔진은 먼저 foo 함수의 스코프에서 x 변수의 선언을 검색한다.
- foot 함수의 스코프에는 x 변수의 선언이 없기때문에 상위 스코프(위의 예제코드의 경우 전역 스코프)에서 x의 선언을 찾는다.
- 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다.
  - 이 부분이 편리함과 에러의 위험성이 공존하는 부분이라고 생각된다.
- 이러한 현상을 암묵적 전역이라 한다.
- 변수는 반드시 선언 한 이후에 사용되어야 의도에 맞게 사용할 수 있다.

- 몸체의 선두에 use strict 를 추가하면 된다.

```
'use strict';
function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();
```

- 함수의 상단에 선언하면 해당 함수와 중첩함수에 모드가 적용된다.

```
function foo() {
'use strict';
  x = 10; // ReferenceError: x is not defined
}
foo();
```

- 코드의 선두에 use strict 를 위치시키지 않으면 제대로 동작하지 않는다.

```
function foo() {
  x = 10; // ReferenceError: x is not defined
'use strict';
}
foo();
```

- 전역에 strict mode 를 적용하는 부분은 피해야 한다.

```
<!DOCTYPE html>
<html>
<body>
  <script>
    "use script";
  </script>
  <script>
    x = 1; // 에러가 발생하지 않는다.
  </script>
  <script>
    "use script";
    y = 1; // ReferenceError: y is not defined
    console.log(y);
  </script>
</body>
</html>
```

- strict mode를 전역에 적용하면 script 단위로 적용된다.
- 혼용해서 사용하게 된다면 오류를 발생할 상황을 만들 수 밖에 없다.
- 외부 서드파티 라이브러리가 non-strict mode인 경우가 있다.
- 사용하고자 하는 곳에 즉시실행 함수를 작성하고 그 안에 적용하면 된다.

```
(function () {
  "use strict";

  // Do something...
}());
```

- 함수 단위로 strict mode 를 적용하는 것도 피해야 한다.

```
(function () {

  var let = 10; // 에러가 발생하지 않는다.

  function foo() {
    "use script";
    let = 20; // SyntaxError: Unexpected strict mode reserved word
  }

  foo();
}());
```

- 어떤함수는 적용하고 어떤함수는 적용하지 않는 것은 바람직하지 않다.
- 모든 함수에 strict mode를 적용하는 것은 번거롭다.
- strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생할 수 있다.

## strict mode가 발생시키는 에러

- 암묵적 전역
- 변수, 함수, 매개변수의 삭제
- 매개변수 이름의 중복
- with문의 사용
  - with문은 전달된 객체를 스코프 체인에 추가한다.
    - with 문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있다.
    - 성능과 가독성이 나빠지는 문제가 있다.

## strict mode 적용에 의한 변화

- 일반 함수의 this
  - strict mode 를 적용하면 일반 함수의 this 에는 undefined 가 바인딩된다.
- arguments 객체
  - 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
  - 생성자 함수가 아닌 일반 함수 내부에서는 사용할 필요가 없다고 판단하기 때문이다.

```
(function (a) {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this) // Foo
  }

  new Foo();
}());
```
