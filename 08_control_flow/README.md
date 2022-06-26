# 제어문

제어문은 코드의 실행 흐름을 인위적으로 제어하기 위해서 사용한다. 

코드는 원래 위에서 아래로 순차적으로 실행되지만 제어문을 만나면 조건에 따른 실행 혹은 반복 실행 하게 된다.

## 블록문

블록문은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부른다.

자바스크립트는 블록문을 하나의 실행단위로 취급한다. 

## 조건문

### `if...else` 문

주어진 조건식의 평가 결과 (참, 거짓)에 따라 실행할 코드 블록을 결정한다.

```tsx
const x:number = 1
const y:number = 2 
if(x < y) {
	console.log(x) // 참일 때 실행될 조건문
} else {
	// 거짓일 때 실행될 조건문
}
```

조건식을 추가하고 싶으면 `else if` 문을 사용한다.

### `switch` 문

주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문을 실행한다.

일치하는 문이 없다면 default로 이동한다.

```tsx
switch(표현식) {
	case 표현식1:
	console.log(x) // switch 문의 표현식과 일치하면 실행될 문
	break
	case 표현식2:
	console.log(y) // switch 문의 표현식과 일치하면 실행될 문
	break
	default:
		console.log(z) //  switch 문의 표현식과 일치하는 case가 없을 때 실행될 문
}
```

`if...else` 문과 다르게 switch 문의 표현식은 불리언 값보다는 다양한 상황에 따라 실행할 코드 블록을 결정할 때 사용한다.

### `for` 문

조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.

```tsx
for (let i = 0; i < 5; i++) {
	console.log(i) // 0,1,2,3,4
}
```

### `while` 문

주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다.

`**for` 문은 반복 횟수가 주로 사용하고 `while` 문은 반복횟수가 불명확할 때 주로 사용한다.**

```tsx
let count = 0;
// count가 3보다 작을 때까지 코드 블록을 계속 반복한다.
while(count < 3) {
console.log(count)
count++
}
```

### `do...while` 문

코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.

```tsx
let count = 0;
do {
	console.log(count) // 0 1 2
	count++
} while (count < 3)
```

### `break` 문

break 문은 레이블  문, 반복문, switch문의 코드 블록을 탈출한다.

그 외의 코드 블록에서 break문을 사용하며 문법 에러가 발생한다.

### `continue` 문

break문과는 조금 다르게 continue문은 반복을 끝내지 않는다.

for문이나 while문의 코드 블록 안에서 continue 문장을 만난 순간 continue문 아래에 있는 실행해야 하는 문장들을 건너 뛰고, 다음 반복을 시작한다.