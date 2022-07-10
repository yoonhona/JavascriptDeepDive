# 9장 타입 변환과 단축 평가

## 9.1 타입 변환이란?

- `명시적 타입 변환`(explicit coercion) / `타입 캐스팅`(type casting)  
  : 개발자가 의도적으로 값의 타입을 변환하는 것
- `압묵적 타입 변환`(implicit coercion) / `타입 강제 변환`(type coercion)  
  : 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것

예제)

```
var x = 10;
var y = 10;

// 1. 명시적 타입 변환
// 숫자를 문자열로 타입캐스팅한다.
var str = x.toString();
console.log(typeof str, str);  // string 10

// 2. 암묵적 타입 변환
// 문자열 연결 연산자를 사용하여 새로운 문자열을 생성한다.
var str2 = y + '';
console.log(typeof str2, str2);  // string 10

// x, y 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x);  // number 10
console.log(typeof y, y);  // number 10
```

- 명시적 타입변환이나 암묵적 타입변환이 기존 원시 값을 직접 변경하는 것은 아니다. 원시값은 변경 불가능한 값이므로 변경할 수 없다.
- `타입변환`이란 기존 원시 값을 사용해 다른 타입의 `새로운 원시 값을 생성`하는 것이다.

<br>

## 9.2 암묵적 타입 변환

- 자바스크립트 엔진은 표현식을 평가할 때, 코드의 문맥에 부합하지 않는 상황이라도 가급적 에러를 발생하지 않도록 압묵적 타입 변환을 통해 표현식을 평가한다.
- 압묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환한다.

### 1. 문자열 타입으로 변환

```
1 + '2'     // '12'
```

- \+ 연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다.

예제)

```
// 숫자 타입 -> 문자열 타입
0 + '';                 // "0"
NaN + '';               // "NaN"
Infinity + '';          // "Infinity"

// 불리언 타입 -> 문자열 타입
true + '';              // "true"

// null / undefined 타입 -> 문자열 타입
null + '';              // "null"
undefined + '';         // "undefined"

// 심벌 타입 -> 문자열 타입
(Symbol()) + '';        // TypeError: Cannot convert a Symbol value to a string

// 객체 타입 -> 문자열 타입
({}) + '';              // "[object Object]"
Math + '';              // "[object Math]"
[] + '';                // ""
[10, 20] + '';          // "10,20"
(function(){}_ + '';    // "function(){}"
Array + '';             // "function Array() { [native code] }"
```

### 2. 숫자 타입으로 변환

```
1 - '1'     // 0
1 * '10'    // 10
1 / 'one'   // NaN
```

- 위 \-, \*, / 산술 연산자의 역할은 숫자 값을 만드는 것이다. 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 압묵적 타입 변환한다.
- 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 된다.

예제)

```
// 문자열 타입 -> 숫자 타입
+''             // 0
+'1'            // 1
+'string'       // NaN

// 불리언 타입 -> 숫자 타입
+true           // 1
+false          // 0

// null / undefined 타입 -> 숫자 타입
+null           // 0
+undefined      // NaN  (⭐)

// 심벌 타입 -> 숫자 타입
+Symbol()       // TypeError: Cannot convert a Symbol value to a number

// 객체 타입 -> 숫자 타입
+{}             // NaN  (⭐)
+[]             // 0
+[10, 20]       // NaN  (⭐)
+(function(){}) // NaN  (⭐)
```

### 3. 불리언 타입으로 변환

- 자바스크립트 엔진은 불리언 타입이 아닌 값을 `Truty 값` (참으로 평가되는 값) 또는 `Falsy 값` (거짓으로 평가되는 값)으로 구분한다.

- false로 평가되는 Falsy 값  
  false  
  undefined  
  null  
  0, -0  
  NaN  
  '' (빈 문자열)

- Falsy 값 외의 모든 값은 모두 true로 평가되는 Truthy 값이다.

<br>

## 9.3 명시적 타입 변환

명시적으로 타입을 변경하는 방법

- `표준 빌트인 생성자 함수(String, Number, Boolean)`를 new연산자 없이 호출하는 방법
- 빌트인 메서드를 사용하는 방법
- 암묵적 타입 변환을 이용하는 방법

### 1. 문자열 타입으로 변환

- `String` 생성자 함수를 new연산자 없이 호출하는 방법
- Object.prototype.`toString` 메서드를 사용하는 방법
- 문자열 연결 연산자를 이용하는 방법 (`+ ''`)

```
String(1);          // "1"
String(false);      // "false"

(1).toString();     // "1"
(false).toString(); // "false"

1 + '';             // "1"
false + '';         // "false"
```

### 2. 숫자 타입으로 변환

- `Number` 생성자 함수를 new연산자 없이 호출하는 방법
- `parseInt`, `parseFloat` 함수를 사용하는 방법 (문자열→숫자 만 가능)
- `\+` 단항 산술 연산자를 이용하는 방법
- `\*` 산술 연산자를 이용하는 방법

```
Number('1');        // 1
Number(false);      // 0

parseInt('-1');     // -1
parseFloat('10.53');// 10.53

+'0';               // 0
+false;             // 0

'0' * 1;            // 0
true * 1;           // 1
```

### 3. 불리언 타입으로 변환

- `Boolean` 생성자 함수를 new연산자 없이 호출하는 방법
- ! 부정 논리 연산자를 두 번 사용하는 방법

```
Boolean('false');       // true
Boolean('');            // false
Boolean(0);             // false
Boolean(NaN);           // false
Boolean(Infinity);      // true

Boolean(null);          // false
Boolean(undefined);     // false

Boolean({});            // true
Boolean([]);            // true

!!'x';                  // true
!!'';                   // false
```

<br>

## 9.4 단축 평가

### 1. 논리 연산자를 사용한 단축 평가

<u>논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한 쪽으로 평가된다.</u>

- 논리곱(&&) : 두 개의 피연산자가 모두 true -> true 반환.  
  첫 번째 피연산자가 true로 평가될 때, 두번째 피연산자가 논리곱 연산자 표현식의 평가 결과를 결정한다. 이 때, `두 번째 피연산자` 를 그대로 반환한다.

```
'Cat' && 'Dog'      // "Dog"
```

<br>

- 논리합(||) : 두 개의 피연산자가 중 하나만 true -> true 반환.  
  첫 번째 피연산자가 true로 평가될 때, 두번째 피연산자까지 평가해 보지 않아도 표현식을 평가할 수 있다. 이 때, 논리 연산의 결과를 결정한 `첫 번째 피연산자` 를 그대로 반환한다.

```
'Cat' || 'Dog'      // "Cat"
```

- `단축 평가` : 논리곱(&&) 연산자와 논리합(||) 연산자는 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다.단축평가는 표현식을 평가하는 도중에 `평가 결과가 확정된 경우 나머지 평가 과정을 생략`하는 것을 말한다.

- 단축 평가 규칙

|  단축 평가 표현식  | 평가 결과 |
| :----------------: | :-------: |
| true \|\| anyting  |   true    |
| false \|\| anyting |  anyting  |
|  true && anyting   |  anyting  |
|  false && anyting  |   false   |

예제)

```
// 논리합(||) 연산
"Cat" || "Dog";     // "Cat"
false || "Dog";     // "Dog"
"Cat" || false;     // "Cat"

// 논리곱(&&) 연산
"Cat" && "Dog";     // "Dog"
false && "Dog";     // "false"
"Cat" && false;     // "false"
```

<br>

<u>단축 평가를 사용하면 if문을 대체할 수 있다.</u>

- `조건이 Truthy값`일 때 무언가를 해야한다면 논리곱(`&&`) 연산자 표현식으로 if문 대체

```
var done = true;
var message = '';

if (done) message = '완료';

// if문을 단축 평가로 대체
message = done && '완료'; (⭐)
```

- `조건이 Falsy값`일 때 무언가를 해야한다면 논리합(`||`) 연산자 표현식으로 if문 대체

```
var done = false;
var message = '';

if (!done) message = '미완료';

// if문을 단축 평가로 대체
message = done || '미완료'; (⭐)
```

- `삼항 조건 연산자`는 if ... else 문을 대체할 수 있다.

```
var done = true;
var message = '';

if (done) message = '완료';
else      message = '미완료';

// if문을 단축 평가로 대체
message = done ? '완료' : '미완료'; (⭐);
```

- 활용 : 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

```
var elem = null;
var value = elem.value;  // TypeError: Cannot read property 'value' of null

// 단축 평가를 사용하면 에러 발생시키지 않는다.
var elem = null;
var value = elem && elem.value;   // null
```

- 활용 : 함수 매개변수에 기본값을 설정할 때
  매개변수에 할당된 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.

```
fuction getStringLength(str) {
    str = str || '';
    return str.length;
}
```

<br>

### 2. 옵셔널 체이닝 연산자

`?.` : 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

```
var elem = null;
var value = elem?.value;  // undefined
```

- 좌항 피연산자가 false로 평가되는 Falsy값(false, undefined, null, 0, -0, NaN, '') 이라도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.

```
var str = '';
var length = str?.length;  // 0
```

<br>

### 3. null 병합 연산자

`??` : 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.  
null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다.

```
var foo = null ?? 'default string';
console.log(foo);  // "default string"
```

- null 병합 연산자(??) 이전에는 논리합 연산자(||) 사용함.
- 논리합 연산자 : 좌항의 피연산자가 Falsy값(false, undefined, null, 0, -0, NaN, '')이면 우항의 피연산자를 반환한다.
  만약 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.

```
var foo = '' || 'default string';
console.log(foo);  // "default string"
```

- null 병합 연산자 : 좌항의 피연산자가 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.

```
var foo = '' ?? 'default string';
console.log(foo);  // ""
```
