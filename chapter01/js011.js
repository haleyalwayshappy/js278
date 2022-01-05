/*  011. 함수 사용하기 
    처리 작업을 하나로 모아 이름을 지정하고 싶을 때 
    처리 작업을 반복하여 사용하고 싶을 때 
*/

/** 
 *  function 함수명(파라미터){ 처리내용 } // 함수를 정의
 *  return 값  // 함수 내부의 값을 반환
 *  함수명(); // 함수를 실행
*/


function myFunction(a){
    const result = a + 2;
    return result;
}

// 파라미터의 개수는 제한이 없으며 콤마(,)로 구분한다.
function calcSum(a,b,c){
    const result = a + b + c;
    return result;
}

// 전달되는 파라미터가 없는 함수를 만들 수도 있다. 
function nonFunction(){
    console.log('안녕하세요');
    return 100;
}

// 함수에서 반환되는 결과를 '반환값' 또는 '결과 반환값'이라고 하며, return 으로 처리한다.
function myFunction2(a){
    const result = a + 2;
    return result;
}

// 반환값이 없는 경우는 반환값 자체를 생략할 수도 있다.
function noResult(){
    console.log('안녕하세요2');
}

// return 구문으로 함수가 종료되기 때문에 return의 아랫부분은 코드를 입력해도 실행되지 않는다.                             
function endFunction(){
    return 100;

    // 실행 안됨
    console.log('안녕하세요 3');
}

// 정의한 함수를 실행하기 위해서는 함수명 뒤에 () 를 붙인다. 파라미터가 있다면 ()안에 적는다.
function calcFunction (price, tax){
    const result = price + price * tax ; 
    return result;
}

const myResult = calcFunction (100,0.1);
console.log(myResult);


// 전달할 파라미터가 없으면 () 안에는 아무것도 입력하지 않는다.
function myFunctional(){
console.log('안녕하세요5');
}

myFunctional();