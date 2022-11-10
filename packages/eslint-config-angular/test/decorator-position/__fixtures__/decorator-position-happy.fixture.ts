function Output() {
  return function (target: any, propertyKey: string) {};
}

function enumerable() {
  return function (target: any, propertyKey: string) {};
}

class A {
  @Output()
  name: any;

  @enumerable()
  foo() {}
}
