# 15장 let, const 키워드와 블록 레벨 스코프

1. var 키워드로 선언한 변수의 문제점
    1. 변수 중복 선언 허용

        ```jsx
        var x = 1;
        var y = 1;
        
        /**
         * 같은 스코프 내에서 중복 선언 허용
         * 초기화문이 있는 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작
         */
        var x = 100;
        
        // 초기화문이 없는 변순 선언문의 무시
        var y;
        
        console.log(x); // 100
        console.log(y); // 1
        ```

2. 함수 레벨 스코프
    1. 모두 전역 변수로 사용되는 문제

        ```jsx
        var x = 1;
        if (true) {
            var x = 10;
        }
            
        console.log(x) // 10
        ```

3. 변수 호이스팅
    1. 변수 선언문 이전에 참조가 가능
    2. 값은 undefined
    3. 오류를 발생시킬 여지
4. let 키워드
    1. 변수 중복 선언 금지
        1. 변수 중복 선언시 문법 에러 발생
    2. 블록 레벨 스코프
        1. 모든 코드 블록(함수, if, for, while, try/catch 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따름
    3. 변수 호이스팅
        1. let 선언단계, 초기화단계가 분리되어 진행

       ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b9a311c-fbee-41a1-953e-9e62f0a77291/Untitled.png)

        1. 자바스크립트 엔진에 의해 선언단계가 실행
        2. 초기화단계는 변수 선언문에 도달했을 때 실행
        3. 초기화 이전에 변수 접근시 참조 에러
        4. 이를 변수를 참조할 수 없는 구간 Temporal Dead Zone TDZ라 부름

        ```jsx
        try {
            console.log(foo); // reference error
        } catch (e) {
            console.log(e)
        }
        
        let foo;
        console.log(foo); // undefined
        
        foo = 1;
        console.log(foo) // 1
        ```

    4. 전역 객체와 let
        1. var 키워드로 선언한 전역 변수, 함수는 전역 객체 즉, window 프로퍼티가 됨
        2. let 키워드로 선언한 전역 변수를 전역 객체의 프로퍼티가 아님
            1. 23장 실행 컨텍스트에서 자세히
    5. const 키워드
        1. 선언과 초기화
            1. const 키워드는 선언과 동시에 초기화
            2. 아니면 문법에러
            3. let과 동일하게 블록 레벨 스코프
            4. 변수 호이스팅이 발생하지 않는 것처럼 동작
        2. 재할당 금지
        3. 상수
            1. 상수는 재할당이 금지된 변수
            2. 원시 값을 할당한 경우 변경할 수 없는 값, 변경할 수 있는 방법은 없음
        4. const 키워드와 객체
            1. 객체를 할당한 경우 값 변경 가능
            2. 재할당을 금지할 뿐 **불변**을 의미하지 않음
        5. var vs let vs const
            1. const → let
            2. 권장
                1. ES6 환경에서 var 사용하지 말기
                2. 재할당이 필요한 경우에만 let, 이 때 스코프는 최대한 좁게
                3. 최대한 const를 사용
