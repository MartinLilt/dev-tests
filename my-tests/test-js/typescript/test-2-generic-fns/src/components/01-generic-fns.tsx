const reverse = <T,>(array: T[]) => {
  return [...array].reverse();
};

function isEqual<T, Y>(a: T, b: Y) {
  return Object.is(a, b);
}

const makeArray = <T, Y>(a: T, b: Y) => {
  return [a, b];
};

const foo = async <N, T>(mult: N, ...rest: T[]) => {};

console.log(reverse([1, 2, 3]));
console.log(reverse(['1', '2', '3']));
console.log(isEqual(1, 2));
console.log(isEqual('1', '2'));
console.log(makeArray(1, false));
console.log(makeArray(true, '2'));
console.log(foo(3, [1, 2, 3]));
console.log(foo('mango', ['1', '2', '3']));

export {};
