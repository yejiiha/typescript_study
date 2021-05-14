interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "yeji",
  age: 25,
  gender: "female",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} years old and you are a ${person.gender}.`;
};

console.log(sayHi(person));

export {};
