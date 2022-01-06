/*  017. 반복문 사용하기(for) */
/* for (초기화; 반복문 조건; 반복 중 처리 구문){반복처리내용}  // 반복 작업 처리 */

for (let index = 0; index < 10; index++) {
    console.log('for '+index);
}

/* 018. 반복문 사용하기 (while) */
/* while(반복조건){반복처리내용} // 반복 작업 처리  */

let myNumber = 0;
while (myNumber < 10) {
    console.log('while '+myNumber);
    myNumber += 1;
}