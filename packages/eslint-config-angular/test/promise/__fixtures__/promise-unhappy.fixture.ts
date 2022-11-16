const unhappyBar = new Promise(() => {});
unhappyBar;
const unhappyFoo = void unhappyBar;

function unhappyBaz() {
  return void 0;
}
unhappyBaz();
