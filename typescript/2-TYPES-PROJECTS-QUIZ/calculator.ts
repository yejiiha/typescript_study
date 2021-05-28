/**
 * Let's make a calculator 🧮
 */

// 내가 만든 함수
type Operator = "add" | "substract" | "multiply" | "divide" | "remainder";

// function calculate(operator: Operator, num1: number, num2: number): any {
//   if (operator === "add") {
//     return num1 + num2;
//   } else if (operator === "substract") {
//     return num1 - num2;
//   } else if (operator === "multiply") {
//     return num1 * num2;
//   } else if (operator === "divide") {
//     return num1 / num2;
//   } else if (operator === "remainder") {
//     return num1 % num2;
//   }
// }

// 엘리가 만든 함수

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw new Error("unknown error");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
