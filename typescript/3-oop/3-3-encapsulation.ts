{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    private coffeeBeans: number = 0; // instance (object) level
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // 외부에서 내부의 상태를 변경할 수 있도록 만든다
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMachine = CoffeeMachine.makeMachine(32);
  console.log(coffeeMachine);
  coffeeMachine.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    // 생성자에 접근제어자를 설정해두면, 멤버변수로 설정이 된다
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Yeji", "Ha");
  console.log(user.fullName);
  // user의 internalAge에는 접근할 수 없지만 age라는 멤버변수처럼 보이는 age 활용
  // age를 통해서 6으로 지정하게 되면 setter가 호출이 되면서 internalAge를 6으로 업데이트 하게 됨
  user.age = 6;
}
