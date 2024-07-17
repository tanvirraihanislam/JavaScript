//console.log("Hello");

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise p1 has been resolved");
  }, 10000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise p2 has been resolved");
  }, 20000);
});

async function handlePromise() {
  console.log("Hello");
  let val = await p1;
  console.log(val);
}

function getPromise() {
  p1.then((res) => console.log("p1 has been resolved without async await"));
  console.log("promise is resolved");
}

//getPromise();
//handlePromise();
async function handlePromises() {
  console.log("function handlePromises is called");
  let val1 = await p1;
  console.log("after p1");
  console.log(val1);

  let val2 = await p2;
  console.log("after p2");
  console.log(val2);
}

//handlePromises();
setTimeout(() => {
  console.log("15 seconds have passed");
}, 15000);
console.log("hello from outside handlePromises");

//fetch

const fetchURL = "https://api.github.com/users/tanvirraihanislam";
async function asyncFetch() {
  try {
    let data = await fetch(fetchURL);
    let jsonData = await data.json();
    console.log(jsonData);
  } catch (e) {
    console.log(e);
  }
}

asyncFetch();
