class A1 {}
class B1 {}

function a1() {}

function b1() {}

function c1() {
  const value = '123';

  return value + 'etc';
}

const d1: string | null = null;
let e1: string | null = null;

switch (d1) {
  case '1': {
    e1 = '1';
    break;
  }
  case '2': {
    e1 = '2';
    break;
  }
  default: {
    e1 = d1;
    break;
  }
}

let sum = 0;

for (let i = 0; i < 5; i++) {
    sum += i;
}

sum = 0;

class LinesBetween {
    x;
    y;

    foo(x?: string);
    foo(x?: string, y?: string);
    foo() {
        //...
    }

    bar() {
        //...
    }
}
