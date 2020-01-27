import "./style.css";
class Botao {
  constructor() {
    this.title = "Tests Dos guri";
    this.callback = () => {};
  }

  setTitle(t) {
    this.title = t;
  }

  setClick(f) {
    this.callback = f;
  }

  render() {
    let createButton = document.createElement("button");
    createButton.classList.add("botao");
    createButton.innerHTML = this.title;
    createButton.addEventListener("click", this.callback);
    return createButton;
  }
}

export default Botao;
