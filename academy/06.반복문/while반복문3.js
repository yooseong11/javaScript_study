// 1~30까지의 숫자 중 2의 배수이자 6의 배수인 경우만 출력
/*
for (let i=1; i<=30; i++) {
  if(i%2 == 0 && i%6 == 0 ) {
    console.log(i);
  }
}
*/

let i = 1;
while (i <= 30) {
  if(i%2 == 0 && i%6 == 0 ) {
    console.log(i);
  }
  
  i++;
}