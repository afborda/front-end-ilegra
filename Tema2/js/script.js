screen = document.getElementById("result");

var element = document.querySelectorAll(".num");

console.log(element);

var len = element.length;

for (let i = 0; i < len; i++) {
  element[i].addEventListener(
    "click",
    function() {
      num = this.value;
      output = this.screen.innerHTML += num;
      limit = output.length;
      if (limit > 16) {
        alert("Numero invalido");
      }
    },
    false
  );
}
