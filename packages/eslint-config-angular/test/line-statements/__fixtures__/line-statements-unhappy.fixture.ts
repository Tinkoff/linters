class A2 {}
class B2 {}

function a2() {}
function b2() {}
function c2() {
    const value = '123';
    return value + 'etc';
}

const d2: string | null = null;
let e2: string | null = null;
switch (d2) {
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

let sum2: number = 0;
for (let i = 0; i < 5; i++) {
    sum2 += i;
}
sum2 = 0;

class LinesBetween2 {
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
