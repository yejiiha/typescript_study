{
  // [ Type Inference ]

  // 따로 타입을 명시하지 않아도 에러 발생 X
  // 선언함과 동시에 문자열을 할당할 경우 -> 자동으로 string이라는 타입
  let text = "hello";
  text = "hi";

  // 따로 타입을 명시하지 않을 경우, 함수 인자에는 any 타입이 부여된다
  function print(message = "hello") {
    console.log(message);
  }

  print("hello");

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
}
