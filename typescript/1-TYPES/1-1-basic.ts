{
  /*
   * JavaScript
   * primitive: number, string, boolean, bigint, symbol, null, undefined
   * object: function, array
   */

  // number
  const num: number = 133;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = true;

  // undefined
  let age: number | undefined;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: string | null;

  // unknow
  let notSure: unknown = 0;
  notSure = "she";
  notSure = true;

  // any
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }

  // never
  function throwError(message: String): never {
    // message -> server (log)
    throw new Error("message");
    while (true) {}
  }

  // object
  let obj: object;
  function acceptSomeObj(obj: object) {}

  acceptSomeObj({ name: "yeji" });
  acceptSomeObj({ animal: "dog" });
}
