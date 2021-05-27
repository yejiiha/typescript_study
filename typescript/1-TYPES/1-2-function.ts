{
  // [함수에서 타입 이용하기 (JS 💩 → TS ✨)]

  // JS 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JS 💩
  function jsFetNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TS ✨
  function fetNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // [함수 타입 이용 (rest, default, optional)]

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Yeji", "Ha");
  printName("yejii");
  printName("yejiiii", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
