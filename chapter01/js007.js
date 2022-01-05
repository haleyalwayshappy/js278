/* 007. 상수 사용하기 (const)
    데이터 값에 이름을 지정하여 사용하고 싶을 때 (고정의 의미)
    데이터 값을 반복해서 사용하고 싶을때 
    데이터 값의 수정이 불가능한 상수를 사용하고 싶을ㄸ ㅐ

    상수는 초기화 생략이 불가능하다. 
    상수는 변경이 불가능하다.
    상수는 한꺼번에 여러개를 선언할 수 있다.
    상수는 기본적으로 값을 변경할 수는 없지만, 상수로 선언된 배열과 객체 내부의 값은 변경할 수 있다. 
    let보다는 const를 적극적으로 이용하면 좋다. 
    */

const testName = '사자';
alert (testName);

// 상수는 임의값의 대입이 가능하며, 다음과 같이 문자열과 함수의 대입도 가능하다.
const myString = '사자';
const myFunction = () => console.log('함수확인'); // 함수 대입

const myName = '자바';
// myName = '스크립트'; // 변경이 불가능하다 

// 숫자형 데이터 상수 간의 덧셈
const number1 = 10;
const number2 = 20;
const sum = number1 + number2; 
console.log(sum);

// 문자열 상수의 결합
const familyName = '브랜던';
const firstName = '아이크';
const fullName = familyName + firstName;
console.log(fullName);
