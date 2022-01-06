/* 014.다수의 파미를 가는 함수 정의 하기
    임의의 파미를 가는 함수를 정의하고 싶을 때*/


/**
 *  function 함수명(...파라미터) {} // 파라미터의 개수가 미정인 함수를 정의
 *  (...파라미터) => {}  // 파라미터의 개수가 미정인 함수를 정의
 *  파라미터[인덱스]  // 인덱스를 지정해서 파라미터를 사용
 */


/* 파라미터의 합계를 반환하는 함수
    @param prices
    @returns {number}*/

    function calcSum(...prices){
        let result =0;
        for (const value of prices){
            result += value;
        }
        return result;
    }

    const twoResult = calcSum(10,20);
    console.log (twoResult);

    const result2 = calcSum(10,42,22);
    console.log(result2);