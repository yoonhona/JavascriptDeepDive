### 함수와 일급객체

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

![Alt text](/18_funcAndFirstClass/cap-1.png "Optional title")
