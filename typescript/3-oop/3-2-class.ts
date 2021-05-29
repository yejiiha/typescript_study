{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    coffeeBeans: number = 0; // instance (object) level
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

  const coffeeMachine = new CoffeeMachine(32);
  coffeeMachine.makeCoffee(3);
  console.log(coffeeMachine);

  const coffeeMachine2 = CoffeeMachine.makeMachine(3);
  console.log(coffeeMachine2);
}
