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