{
  // Type Aliases

  type Text = string;
  const name: Text = "yeji";
  const address: Text = "korea";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "yeji",
    age: 25,
  };

  // String literal Types

  type JSON = "json";
  let json: JSON;
  // json = "d"; 오류
  json = "json";
}
