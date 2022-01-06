/* 016. 조건문 사용하기 (switch) */

/**
 *  switch(식) // 식에 따라 처리를 분기
 *  case 값 : 처리내용 // 해당조건 만족시 처리
 *  default : 처리내용 // 만족하는 조건이 하나도 없는 경우의 처리 
 */

const myFruit = '사과';

switch (myFruit) {
    case '사과':
        alert('사과입니다.');
        break;
    case '귤':
        alert('귤입니다.');
        break;
    default : 
        alert('기타 과일 입니다.');
        break;
}


//  switch 는 === 비교를 한다. 