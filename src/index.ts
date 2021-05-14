const name = "yeji",
  age = 25,
  gender = "female";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age} years old and you are a ${gender}.`;
};

console.log(sayHi(name, age, gender));

export {};
