interface ILength {
  length: number;
}

interface IPerson {
  firstName: string;
  lastName: string;
}

const logLength = <T extends ILength>(arg: T) => {
  console.log(arg.length);
};

const addFullName = <P extends IPerson>(person: P) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};

console.log(logLength([1, 2, 3, 4, 5, 6]));
console.log(logLength('qwe'));
// console.log(logLength(5));

export {};
