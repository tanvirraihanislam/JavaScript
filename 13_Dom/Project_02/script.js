let body = document.querySelector("body");
console.log(body);
body.style.backgroundColor = "black";

let form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault(); //don't submit just wait
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  console.log(height, weight);
  let result = document.querySelector("#results");

  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  result.innerHTML = `<span>${bmi}</span>`;
});
