export function bar(name) {
  document.location(`/ds${name}`);
}

export class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  getUser() {
    return this.name;
  }
}
