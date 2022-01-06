/* 019. 반복처리 스킵 */
// 반복 처리 중 특정 조건에 대해 스킵하고 싶을 때 
// for문 루프 중 처리를 스킵하고 싶을 때 

// continue // for문 루프 중 스킵처리

for(let index =0; index< 10; index++){
    if(index % 2 === 0){
        continue;
    }
    console.log(index);
}

console.log('루프가 종료됨.');  

/* 다음 함수는 flagA가 참이자 for 문의 index가 홀수인 경우에만 실행되는 코드로, 
if 문이 중펍되어 코드가 복잡하고 가독성이 떨어진다. */

function myFunction(flagA){
    for(let index = 0; index<10; index++){
        if(flagA === true){
            if(index%2 !== 0 ){
                console.log('flagA'+index);
            }
        }
    }
}


/* 하지만 다음과 같이 continue 문을 사용하게 되면 중첩을 줄이고 가독성을 높일 수 있다, */

function myFunction2(flagB){
    for(let index = 0; index<10; index++){
        if(flagB === false){
            continue;
            }
            if(index % 2 === 0 ){
                continue;
            }
            console.log(index);
        }
    }

