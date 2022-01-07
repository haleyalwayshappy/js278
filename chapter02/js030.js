/* 030. 문자열 검색하기 (부분 검색)
    지정 문자열의 포함 여부를 확인하고 싶을 때 
    입력폼의 부적절한 문자를 체크하고 싶을 때
*/

/** 
 *  대상 문자열.includes(검색대상문자열 , [검색시작인덱스; 생략가능]) // 의미 : 문자열 포함 여부 확인 // 반환 : 진릿값
 *  대상 문자열.startsWith(검색대상문자열 , [검색시작인덱스; 생략가능]) // 의미 : 문자열 포함 여부 확인 // 반환 : 진릿값
 *  대상 문자열.endsWith(검색대상문자열 , [검색시작인덱스; 생략가능]) // 의미 : 문자열 포함 여부 확인 // 반환 : 진릿값
 */

// const myString ='JavaScript를 배우자';

// const a1 = 'JavaScript를 배우자'.includes('JavaScript');
// console.log(a1); // true

// const a2 = 'JavaScript를 배우자'.startsWith('배우자');
// console.log(a2); // false

// const a3 = 'JavaScript를 배우자'.endsWith('배우자');
// console.log(a3); // true
 
// const a4 = 'JavaScript를 배우자'.includes('Script');
console.log(a4); // true



/** *******chapter030.html 연동 ******* */

const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerHTML=targetString.includes('JavaScript');
document.querySelector('.result2').innerHTML=targetString.includes('배우자');