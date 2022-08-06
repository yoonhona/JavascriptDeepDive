# 28장 Number

# Number 생성자 함수

---

- new 연산자와 함께 사용하여 Nuber 인스턴스 생성
- [[NumberData]] 내부 슬롯에 값을 할당한 Number 래퍼 객체 생성
- new를 사용하지 않으면 명시적 타입 변환(9.3에서 다뤘음)

# Number 프로퍼티

---

1. Number.EPSILON
    1. 부동소수점을 표현하기 위한 IEEE 754 2진 법으로 변환했을 때 무한소수가 되어 미세한 오차가 발생하는 구조적 한계
    2. Number.EPSILON 부동소수점으로 인해 발생하는 오차를 해결

    ```jsx
    0.1 + 0.2
    // 0.30000000000000004
    0.1 + 0.2 === 0.3 // false
    
    function isEqual(a, b) {
        return Math.abs(a - b) < Number.EPSILON;
    }
    isEqual(0.1 + 0.2, 0.3) // true
    ```

2. Number.MAX_VALUE
    1. 자바스크립트에서 가장 큰 양수 값(1.7976931348623157e+308)
    2. 보다 큰 값은 Infinity

    ```jsx
    Infinity > Number.MAX_VALUE // true
    ```

3. Number.MIN_VALUE
    1. 자바스크립트에서 표현 할 수 있는 가장 작은 양수(5e-324)
    2. 보다 작은 값은 0

    ```jsx
    Number.MIN_VALUE > 0 // true
    ```

4. Number.MAX_SAFE_INTEGER
    1. 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값
5. Number.MIN_SAFE_INTEGER
    1. 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값
6. Number.POSITIVE_INFINITY
    1. 양의 무한대를 나태는 숫자값 Infinity 같음
7. Number.NEGATIVE_INFINITY
    1. 음의 무한대를 나태는 숫자값 -Infinity 같음
8. Number.NaN
    1. 숫자가 나님(Not-a-Number)
    2. window.NaN과 같음

# Number 메서드

---

1. Number.isFinite
    1. 정상적인 유한수인지 검사하는 정적 메서드
    2. 암묵적 타입 변환을 하지 않음

    ```jsx
    Number.isFinite(0) // true
    Number.isFinite(Number.MAX_VALUE) // true
    Number.isFinite(Number.MIN_VALUE) // true
    Number.isFinite(Infinity) // false
    Number.isFinite(-Infinity) // false
    Number.isFinite(NaN) // false
    Number.isFinite(null) // false
    isFinite(null) // true
    ```

2. Number.isInteger
    1. 정수인지 검사하는 정적 메서드
    2. 암묵적 타입 변환을 하지 않음

    ```jsx
    Number.isInteger(0) // true
    Number.isInteger(123) // true
    Number.isInteger(-123) /// true
    Number.isInteger(0.5) // false
    Number.isInteger('123') // false
    Number.isInteger(false) // false
    Number.isInteger(Infinity) // false
    Number.isInteger(-Infinity) // false
    ```

3. Number.isNaN
    1. ES6에서 도입
    2. 숫자값이 NaN인지 검사
    3. 빌트인 isNaN과 차이
        1. 빌트인 isNaN은 암묵적 타입 변환을하나 Number.isNaN은 하지 않음

    ```jsx
    Number.isNaN(NaN) // true
    Number.isNaN(undefined) // false
    isNaN(undefined) // true
    ```

4. Number.isSafeInteger
    1. 안전한 정수인지 검사
    2. -(253 -1), 253 - 1 사이의 정수값
    3. 암묵적 타입 변환하지 않음

    ```jsx
    Number.isSafeInteger(0) // true
    Number.isSafeInteger(1000000000000000) /// true
    Number.isSafeInteger(10000000000000001) // false
    Number.isSafeInteger(0.5) // false
    Number.isSafeInteger('123') // false
    Number.isSafeInteger(false) // false
    Number.isSafeInteger(Infinity) // false
    ```

5. Number.prototype.toExponential
    1. 숫자를 지수 표기법으로 변환하여 문자열로 반환
    2. 매우 크거나 작은 숫자를 표기할 때 주로 사용, e(Exponent) 앞에 있는 숫자에 10의 n승을 곱하는 형식으로 수를 나태내는 방식
    3. 리터럴 타입에서 사용시 에러 발생
        1. .은 소수 구분기호로 해석
        2. 그룹 연산자 사용 권장

    ```jsx
    (77.1234).toExponential() // '7.71234e+1'
    (77.1234).toExponential(4) // '7.7123e+1'
    (77.1234).toExponential(2) // '7.71e+1'
    77.toExponential() // Uncaught SyntaxError: Invalid or unexpected token
    77.1234.toExponential() // '7.71234e+1'
    77 .toExponential() // '7.7e+1'
    ```

6. Number.prototype.toFixed
    1. 숫자를 반올림하여 문자열로 반환

    ```jsx
    (12345.6789).toFixed() // '12346'
    (12345.6789).toFixed(1) // '12345.7'
    (12345.6789).toFixed(2) // '12345.68'
    (12345.6789).toFixed(3) // '12345.679'
    ```

7. Number.prototype.toPrecision
    1. 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열 반환

    ```jsx
    (12345.6789).toPrecision() // '12345.6789'
    (12345.6789).toPrecision(1) // '1e+4'
    (12345.6789).toPrecision(2) // '1.2e+4'
    (12345.6789).toPrecision(6) // '12345.7'
    ```

8. Number.prototype.toString
    1. 숫자를 문자열로 반환
    2. 인수로 변환도리 진법을 전달 받을 수 있음
    3. 인수 생략 시 기본값 10진법
