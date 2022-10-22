import Model from "../models/model";
import View from "../views/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  incrementHandler() {
    this.model.increase();
    this.view.updateCounterLabel(this.model.counter);
    if (this.model.isResettable) {
      this.view.enableResetButton(true);
    }
  }

  resetHandler() {
    this.model.reset();
    this.view.updateCounterLabel(0);
    this.view.enableResetButton(false);
  }

  initializeView() {
    this.view.updateCounterLabel(this.model.counter);
    this.view.enableResetButton(this.model.isResettable);
  }

  run(model, view) {
    this.view.incrementButton.addEventListener("click", () =>
      this.incrementHandler(model, view)
    );
    this.view.resetButton.addEventListener("click", () =>
      this.resetHandler(model, view)
    );
  }
}

export default Controller;
