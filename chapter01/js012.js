/*  012. 화살표 함수 사용하기  
    함수를 간략히 정의하고 싶을 때 
    this를 지정하고 싶을때 
    (파라미터) => {처리내용 } 
 */


const calcSum = (a,b,c) =>{
    const result = a+ b+ c;
    return result;
}

const test = calcSum(1,2,3);
console.log(test);


/* 화살표 함수는 일반 함수와 달리 일부를 생략할 수 있다. 
파라미터가 하나인 경우는 ()의 생략이 가능하나, 파라미터가 없거나 2개 이상인 경우에는 생략할 수 없다. 
입력 a에 대해 a + 2 의 결과를 반환하는 함수를 학인해보자 */

// 함수의 정의
const myFunction1 = (a) =>{
 return a + 2;   
};

//합수의 정의 (괄호를 생략 )
const myFunction2 =  a => {
    return a + 2;
};

// 화살표 합수의 정의가 한 줄인 경우 {} 와 return 을 생략할 수 있다. 
const myFunction3 = (a) => a + 2; 
