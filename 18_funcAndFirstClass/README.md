# 함수와 일급객체

## 일급 객체

- 다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.
  1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
  2. 변수나 자료구조(객체, 배열등)에 지정할 수 있다.
  3. 함수의 매개변수에 전달할 수 있다.
  4. 함수의 반환값으로 사용할 수 있다.
- 자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하므로 일급 객체다.

```
  // 1. 함수는 무명의 리터럴로 생성할 수 있다.
  // 2. 함수는 변수에 저장할 수 있다.
  // 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
  const increase = (num) => ++num;
  const decrease = (num) => --num;

  // 2. 함수는 객체에 저장할 수 있다.
  const auxs = { increase, decrease }

  // 3. 함수의 매개변수에 전달할 수 있다.
  // 4. 함수의 반환값으로 사용할 수 있다.

  function makeCounter(aux) {
    let num = 0;
    return () => {
      num = aux(num)
      return num
    }
  }

  // 3. 함수의 매개변수에 전달할 수 있다.
  const increaser = makeCounter(auxs.increase);
  console.log(increaser()) // 1
  console.log(increaser()) // 2

  // 3. 함수의 매개변수에 전달할 수 있다.
  const decreaser = makeCounter(auxs.decrease);
  console.log(decreaser()) // 1
  console.log(decreaser()) // 2
```

- 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미다.
- 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문) 이라면 어디서즌지 리터럴 정의가 가능하다.
- 런타임에 함수객체로 평가된다.
- 일급객체로서 함수가 사용될 수 있는 부분은 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나다.

  - 가독성, 반복문은 재귀로 표현 등의 이유로 현재는 사용되지 않는 패러다임으로 알고있다.

- 일반 객체는 호출 불가, 함수 객체는 호출 가능하다.

  ```
  const name = "garam";
  name(); // TypeError
  ```

- 함수객체의 고유 프로퍼티가 있다.

## 함수 객체의 프로퍼티

- console.dir 메서드로 함수 호출 가능

![Alt text](/18_funcAndFirstClass/cap-1.png "cap-1 image")

- 함수의 모든 프로퍼티의 프로퍼티 어트리뷰트를 Object.getOwnPropertyDescriptors 메서드로 확인해보면 다음과 같다.

![Alt text](/18_funcAndFirstClass/cap-2.png "cap-2 image")

- 함수는 Object.prototype 객체로부터 **\_\_proto\_\_** 접근자 프로퍼티를 상속받는다.

![Alt text](/18_funcAndFirstClass/cap-3.png "cap-3 image")

- **prototype** 의 개념이 잠깐 나왔는데, 19장에서 자세히 살펴볼 수 있다.
- 해당 구문에선 함수는 프로토타입의 proto 를 상속받는 개념만 알고 넘어가자.

### arguments 프로퍼티

- 함수 객체의 arguments 의 값은 arguments 의 객체이다.
- 함수 호출시 전달된 인수들의 정보를 담고있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.
- 외부에서 참조가 불가하다.

- Function.arguments 와 같은 사용법은 권장되지 않는다(ES3부터 표준에서 폐지되었다.).
- 자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 따라서 함수 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.
- 함수 몸체 내부에서 변수와 동일하게 취급된다.
  - 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화 된 이후에 인수가 할당된다.(let)
  - 선언된 매개변수의 개수보다 인수를 적게 전달했을 경우 인수가 전달되지 않은 매개변수는 초기화 상태를 유지한다.
  - 더 많이 전달할 경우 초과된 인수는 무시된다.
    - 초과된 인수는 arguments 객체의 프로퍼티에 보관된다.

![Alt text](/18_funcAndFirstClass/cap-4.png "cap-4 image")

- arguments 객체는 인수를 프로퍼티 값으로 소유하며 프로퍼티 키는 인수의 순서를 나타낸다.
- callee 프로퍼티는 호출되어 arguments 객체를 생성한 함수, 즉 함수 자신을 가리킨다.
- arguments 객체의 length 프로퍼티는 인수의 개수를 가리킨다.

  - 본인은 개발을 할 때, arguments 프로퍼티로 인수를 확인해야하는 개발을 아직은 지양하는 바이다.

- p.254 예제 18-06에 설명하는 가변 인자 함수를 구현하는 예시가 있다.

  ```
    // 책의 예시 내용
    function sum() {
      let res = 0;
      for (let i= 0; i < arguments.length; i++) {
        res += arguments[i]
      }
      return res;
    }

    // 해당 내용 업무 활용
    // 가변적 활용 가능
    // 없을 경우에 반복문 실행되지 않음
     function sum(arr) {
      let res = 0;
      for (let i= 0; i < arr.length; i++) {
        res += arr[i]
      }
      return res;
    }
  ```

  - arguments 는 배열 형태로 인자 정보를 담고 있지만, 실제 배열이 아닌 유사 배열 객체다.

    - 유사 배열 객체란 length 프로퍼티를 가진 객체로 for문으로 순회할 수 있는 객체를 의미한다.
    - 유사 배열 객체는 배열 메서드를 사용할 경우 에러가 발생한다.
      - ex) push, pop 등
    - 배열로 사용하려면 Function.prototype.call, Function.prototype.apply를 사용해 간접 호출을 해야하는 번거로움이 있다.
    - 22.2.4절, 27장 배열에서 자세히 살펴본다.

    - 이런 번거로움을 해결하기 위해 ES6는 Rest 파라미터를 도입했다.

    ```
    function sum(...args) {
      return args.reduce((pre,cur) => pre + cur, 0);
    }
    ```

    - Rest 파라미터는 26.4절에서 자세히 살펴본다.

### caller 프로퍼티

- caller 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티이다.
- 혼란을 야기할 수 있을 것 같아 p.256을 직접 확인해보는 방향이 좋을 것 같다.

### length 프로퍼티

- 거의 모든 언어에서 사용되는 length 이다.
- 매개변수의 개수를 가리킨다.
- arguments 객체의 length 프로퍼티와 다를 수 있으므로 주의해야 한다.
  - arguments 는 인자의 개수를 가리킨다.
  - 함수 객체의 length 는 매개변수의 개수를 가리킨다.

### name 프로퍼티

- 함수의 이름을 나타낸다.
- ES6 부터 표준 프로퍼티가 되었다.
- ES5에서 name 프로퍼티의 익명함수는 빈 문자열을 가지고, ES6부터는 객체를 가리키는 식별자를 값으로 가진다.
- 함수 이름과 함수 객체를 가리키는 식별자는 의미가 다르다는 것을 명심해야 한다.

### \_\_proto\_\_ 프로퍼티

- 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖는다.
- 상속을 구현하는 프로토타입 객체를 가리킨다.
- 19장에서 자세히 살펴본다.
- \_\_proto\_\_ 접근자 프로퍼티를 통해 간접적으로 프로포타입 객체에 접근할 수있다.

```
 const obj = { a: 1 };
 // 상속받는다.
 obj.__proto__ === Object.prototype             // true

 // 객체 리터럴 방식으로 생성한 객체는 프로포타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
 // hasOwnProperty 메서드는 Object.prototype 의 메서드이다.
 console.log(obj.hasOwnProperty("a"));          // true
 console.log(obj.hasOwnProperty("__proto__"));  // false
```

#### hasOwnProperty 메서드

- hasOwnProperty 메서드는 이름 그대로 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우만 true 를 반환한다.
- 상ㅈ속받은 프로토타입은 false 를 반환한다.
  - 본인은 가끔 키 검증의 유효성 체크로 사용한다.

### prototype 프로퍼티

- constructor 만이 소요유하는 프로퍼티이다.
- 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor 에는 prototype 프로퍼티가 없다.

- 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.
  - 즉 함수의 경우 Object.prototype 객체를 가리킨다고 보면 된다.

![Alt text](/18_funcAndFirstClass/cap-5.png "cap-5 image")
