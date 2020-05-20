const utils = (message) => {
  message.ds = 'dsa';
}

export function bar(name) {
  document.location('/ds' + name);
}

export class User {
  constructor(name, lastName) {
    this.name = name
    this._lastName = lastName
  }
  getUser() {
    return this.name
  }
}
