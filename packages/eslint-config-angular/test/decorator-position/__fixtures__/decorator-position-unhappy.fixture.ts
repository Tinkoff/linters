function Input() {
  return function (target: any, propertyKey: string) {};
}

function pure() {
  return function (target: any, propertyKey: string) {};
}

class B {
  @Input() name: any;

  @pure() foo() {}
}
