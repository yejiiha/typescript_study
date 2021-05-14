class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const yeji = new Human("Yeji", 25, "female");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} years old and you are a ${person.gender}.`;
};

console.log(sayHi(yeji));

export {};
