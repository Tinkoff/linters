export function bar(name) {
  var modifyName = name;
  var count = 0;
  document.location(`/ds${modifyName}`, count++);
}

export class User {
  constructor(name, lastName) {
    this.name = name;
    var module = 0;
    this.lastName = lastName;
    this.module = module;
  }

  getUser() {
    return this.name;
  }

  kkk() {
    const __under = 'result';
    return __under;
  }
}
