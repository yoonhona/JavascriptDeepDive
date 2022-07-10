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

  const increaser = makeCounter(auxs.increase);
  console.log(increaser()) // 1
  console.log(increaser()) // 2

  const decreaser = makeCounter(auxs.decrease);
  console.log(decreaser()) // 1
  console.log(decreaser()) // 2
```
