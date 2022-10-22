class View {
  constructor() {
    this.counterLabel = document.createElement("h2");
    document.body.appendChild(this.counterLabel);

    this.incrementButton = document.createElement("button");
    this.incrementButton.innerText = "Increment";
    document.body.appendChild(this.incrementButton);

    this.resetButton = document.createElement("button");
    this.resetButton.innerText = "Reset";
    this.enableResetButton(false);
    document.body.appendChild(this.resetButton);
  }

  updateCounterLabel(value) {
    this.counterLabel.innerText = value;
  }

  enableResetButton(enable) {
    this.resetButton.disabled = !enable;
  }
}

export default View;
