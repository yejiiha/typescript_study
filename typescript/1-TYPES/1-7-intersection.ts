{
  // Intersection Types: &

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interenWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  interenWork({
    name: "yeji",
    score: 100,
    employeeId: 1,
    work: () => {},
  });
}
