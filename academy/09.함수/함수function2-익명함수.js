/*
  익명 함수: 이름이 없는 함수
    이름이 없기 때문에 주로 변수에 대입하여 사용
    함수 호출이 필요.
    이름이 없기 때문에 반드시 함수를 호출하는 코드보다 함수가 먼저 작성되어야 함.

  let 변수명 = function () {
    실행문;
    // return;
  }  
  변수명(); 함수 호출
*/

// fn(); 익명 함수에서는 반드시 함수 다음에 호출해야 실행. 현재 이 호출은 실행 x

let fn = function() {
  console.log('이름이 없는 익명 함수입니다.');
}

fn();
fn();
fn();
fn();