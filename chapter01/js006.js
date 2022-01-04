

/* 006. 변수 선언하기 let 
    - 데이터 값에 이름을 지정하여 사용하고 싶을 때 
    - 데이터 값을 반복 사용하고 싶을 때
    - 값 변경이 가능한 변수를 사용하고 싶을 때 
*/

// 변수 myName 에 '제이펍'을 대입
let myName = '제이펍';
// alert(myName);

// 변수는 임의 값의 대입이 가능하며, 다음과 같이 문자열이나 날짜, 함수의 대입도 가능하다. 
let myString = '제이펍';
let currentDate = new Date();
let myFunction = () => console.log('함수 확인');
// let 으로 선언한 변수는 값 변경이 가능하다. 대입한 변수의 값을 변경하는 샘플
let thisName = '펭귄';
console.log(thisName); // --> 펭귄이라는 값 출력

thisName = '하마';
console.log(thisName); // --> 하마라는값으로 변경되어 출력 

// 변수는 초기화를 생략할 수 있다.
let value;
// 한꺼번에 변수를 선언할 수 있다
let d = 1,
    e = 2,
    f; // 한번에 선언 + 초기화 생략한것
