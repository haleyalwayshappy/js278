/* 020. 진위여부 판단하기 
    브라우저 버전에 따라 알림창을 띄우고 싶을때
    입력 항목에 따라 확인 버튼을 무효화 하고 싶을 때 
*/

const a = 10;
const b = 20;

console.log(a<b); // true
console.log(a>b); // false


// 주로 if 문과 함께 조건에 따라 작업 처리를 구분하게 된다.

//ios 여부 확인
const isIOs = navigator.userAgent.includes('iphone');

if(isIOs){
    // ios용 처리 작업
alert('ios');
}

// '안녕하세요 홍은' 알림창 표시
const userName = '홍은';
if(userName){
    // alert(`안녕하세요. ${userName}`);
}

// address 가 '' 이므로 알림창을 표시하지 않는다.
const address = '';
if(address){
    alert(`당신은 ${address}에 살고 계신네요!`);
}

// 진릿값에 '!'를 붙이면 반대의 값을 가진다( 논리 부정 연산자 )
const flg = 'JavaScript'.includes('a');
console.log('!를 안 붙였을 때  '+flg); // true
console.log('!를 붙였을 때 '+!flg);  // false

// 다른 타입의 값에 붙이면 값이 참 혹은 거짓으로 변환된다.
console.log(!'홍은');
console.log(!24);
console.log(![1,2,3]);

// '!!'를 쓰면 데이터 타입이 boolean으로 변환된다.
console.log(!!'홍은');
console.log(!!24);
console.log(!![1,2,3]);

