function add({ one, two }:{ one: number, two: number }): number {
  return one + two;
}

const total = add({ one: 1, two: 2 });
console.log(total);

function getNumber({ one }: { one: number }): number {
  return one;
}

const one = getNumber({ one: 1 });
console.log(one);