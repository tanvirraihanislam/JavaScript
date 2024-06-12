console.log("hello");

let myUl = document.querySelectorAll("ul");
console.log(myUl);

console.log(document.getElementById("firstHeading").innerHTML);
console.log(document.getElementById("001").innerHTML);
console.log(document.getElementById("001").id);
console.log(document.getElementById("001").class);
console.log(document.getElementById("001").className);
console.log(document.getElementById("001").getAttribute("id"));

document.getElementById("001").setAttribute("class", "test"); //this will always override the code

let title = document.getElementById("001");
title.style.backgroundColor = "blue";
title.style.padding = "15px";
title.style.borderRadius = "1 5px";

console.log(document.querySelectorAll("p"));
console.log(document.querySelector(".content"));
console.log(document.querySelector("#firstHeading"));
console.log(document.querySelector('input[type = "password"]'));
console.log(document.querySelector("input"));

let liList = document.querySelectorAll("li");
console.log(liList);

liList[1].style.backgroundColor = "green";

let parent = document.getElementById("testList");
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

let divTest = document.createElement("div");
console.log(divTest);

divTest.className = "main";
divTest.id = Math.round(Math.random() * 10 + 1);
divTest.setAttribute("title", "generate title");
divTest.style.backgroundColor = "green";
divTest.style.padding = "15px";

let addDivTest = document.createTextNode("test div");
divTest.appendChild(addDivTest);

document.body.appendChild(divTest);

document.getElementById("eventTest").addEventListener("click", function (e) {
  console.log(e);
});

console.log(document.getElementById("001"));

console.log(document.getElementById("001"));
