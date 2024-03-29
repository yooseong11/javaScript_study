/*실습과제
숫자형을 담고 있는 변수들(material1, material3, material5)과 문자열을 담고 있는 변수들(material2, material4)이 있습니다.

변수들끼리 연산을 하여 result1에는 문자열 '34'를, result2에는 숫자형 34를 만들어 넣어주세요!

단, 절대 숫자값을 사용하지 마세요. result1과, result2는 반드시 material1~5 변수들의 연산식만 할당해야 합니다.

실행결과는 다음과 같아야 합니다.

출력예시
34
string
34
number */



// 숫자형과 문자열 재료
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1 = material2 + material4;
let result2 = material3 *3 + material5;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요.
// 코드를 작성해주세요.

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);