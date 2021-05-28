{
  // [ Enum ]

  // JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 30;

  // 묶을 수 있는 타입이 존재하지 않음
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  // 최대한 enum에 가깝게 표현하려면
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TS
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Friday);

  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  // But, enum을 쓰게 되면 타입을 정확하게 보장받을 수 없기 때문에 가능한 쓰지 않는 것이 좋다
  // -> union 이용하기
  type DaysofWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayofweek: DaysofWeek = "Monday";
  // dayofweek = "sunday" -> 유니온 타입에 지정된 변수가 아니면 에러 발생
  dayofweek = "Wednesday";
}
