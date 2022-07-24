# 22. this
## 22.1 this키워드
- 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메소드를 하나의 논리적인 단위로 묶은 복합적인 자료구조
- 동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고, 변경할 수 있어야하는데 변경하려면
- 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 함

- 객체 리터럴방식의 식별자 재귀적 참조 예시
``` 
const circle = {
//프로퍼티 : 객체 고유의 상태 데이터
radius : 5,
 getDiameter(){
    //이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
    //자신이 속한 객체인 circle을 참조할 수 있어야 한다
    return 2 * circle.radius;
 }
};

console.log(circle.getDiameter());//10
```
- 위와같은 방식은 바람직한 방식은 아님.

- 생성자 함수 방식으로 인스턴스를 생성하는 방식

```
function Circle(radius){
    //이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
    ????.radius = radius;
}

Circle.prototype.getDiameter = function(){
//이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
return 2*????.radius;
}

const circle = new Circle(5);

```

- this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기참조 변수다.
- this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
- this는 자바스크립트 엔진에 의해 암묵적으로 생성되며 코드 어디든 참조 가능
- this도 지역변수처럼 사용할 수 있다.
- this가 가리키는 값, 즉 this바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

객체리터럴과 생성자 함수의 예제
```
//객체리터럴
const circle = {
//프로퍼티 : 객체 고유의 상태 데이터
radius : 5,
 getDiameter(){
    //이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
    //자신이 속한 객체인 circle을 참조할 수 있어야 한다
    return 2 * this.radius;
 }
};

console.log(circle.getDiameter());//10

//생성자함수
function Circle(radius){
    // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
}

Circle.prototype.getDiameter = function(){
//이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
return 2*this.radius;
}

const circle = new Circle(5);
console.log(circle.getDiameter());//10
```

- 자바, C++과 달리 JS의 this는 함수가 호출되는 방식에 따라 this 바인딩이 동적으로 결정된다. 또한 strict mode역시 바인딩에 영향을 준다
- this는 코드 어디에서든 참조 가능하다. 전역과 함수 내부에서도 참조 가능


## 22.2 함수 호출 방식과 this 바인딩
- this 바인딩(this에 바인딩될 값)은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
- 함수도 다양한 방식으로 호출가능
1. 일반 함수 호출
- 기본적으로 this에는 전역 객체가 바인딩됨(중첩함수, 콜백함수 포함)
2. 메서드 호출
- 다른 객체의 메서드가 될 수도 있고, 일반 변수에 할당하여 일반 함수로 호출될 수도 있음
- 따라서 메서드 내부의 this프로퍼티로 메서드를 가리키고 있는 객체와 관계가 없고 메서드를 호출한 객체에 바인딩 된다.
3. 생성자 함수 호출
- 생성자 함수가(미레에)생성할 인스턴스가 바인딩된다.
4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
- Function.prototype.apply/call/bind 메서드에 첫번째 인수로 전달한 객체



