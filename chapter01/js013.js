/* 013. 함수의 파라미터 초깃값 설정하기 
    함수 파라미터의 초깃값을 설정하고 싶을 때 
    함수 파라미터를 생략 가능하도록 설정하고 싶을 때

    function 함수명 (파라미터1, 파라미터2 = 초깃값2, 파라미터 = 초깃값3){}
    (파라미터1, 파라미터2 = 초깃값2, 파라미터 = 초깃값3) =>{}
*/

/* 세금이 포함된 가격을 반환하느 함수 
    @param price 가격
    @param tax 세율
*/
function calcFunction(price, tax = 0.08){
const result = price + price * tax;
return result;
}

// tax의 인수를 생략하면 초깃값 0.08이 사용됨
const result1 = calcFunction(100);
console.log(result1);

// tax의 전달 값을 지정하면 해당값이 사용된다.
const result2 = calcFunction(100,0.1);
console.log(result2);
