/*  015. 조건문 사용하기 */

/**
 * if(조건1){처리1} // 조건1 o -> 처리 1 실행
 * else if (조건2){처리2} // 조건 1 x, 조건 2 o -> 처리 2 실행
 * else {처리3}  // 조건1,2 x -> 처리 3 실행 
 */


const myPrice = 100;
if(myPrice >= 50){
    alert('myPrice는 50이상입니다.');
}else if (myPrice >=10){
    alert('myPrice는 10 이상 50 미만입니다.');
}else {
    alert('myPrice는 10미만입니다.');
}