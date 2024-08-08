document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Handle form submission here
});

document.getElementById("changeColor").addEventListener("click", function () {
  document.getElementById("myForm").style.backgroundColor = getRandomColor();
});

document.getElementById("changeFont").addEventListener("click", function () {
  var fonts = ["Arial", "Times New Roman", "Verdana", "Georgia", "Helvetica"];
  varrandomFont = fonts[Math.floor(Math.random() * fonts.length)];
  document.getElementById("myForm").style.fontFamily = randomFont;
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
