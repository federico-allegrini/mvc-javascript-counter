class Model {
  constructor() {
    this.counter = 0;
    this.isResettable = false;
  }

  increase() {
    this.counter++;
    if (this.counter === 5) {
      this.isResettable = true;
    }
  }

  reset() {
    if (this.isResettable) {
      this.counter = 0;
      this.isResettable = false;
    }
  }
}

export default Model;
