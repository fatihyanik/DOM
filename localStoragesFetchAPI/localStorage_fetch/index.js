const submitBtn = document.getElementById("submitBtn");
const title = document.getElementById("title");
const body = document.getElementById("body");
const userId = document.getElementById("userId");
const list = document.getElementById("list");

const handleSubmit = function () {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      userId: userId.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((obj) => {
      let listItem = document.createElement("li");
      listItem.textContent = `Title: ${obj.title}, body: ${obj.body}, userId: ${obj.userId}`;
      let liArr;
      if (localStorage.getItem("listData") === null) {
        liArr = [];
      } else {
        liArr = JSON.parse(localStorage.getItem("listData"));
      }
      liArr.push(listItem.textContent);
      localStorage.setItem("listData", JSON.stringify(liArr));
      list.appendChild(listItem);
      title.value = "";
      body.value = "";
      userId.value = "";
      //let text = `Title: ${obj.title}, body: ${obj.body}, userId: ${obj.userId}`;
      //let textNode = document.createTextNode(text);
      //listItem.appendChild(textNode);
      //const appChild = list.appendChild(listItem);
      //appChild = localStorage.setItem;
    });
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  handleSubmit();
});

const localListArr = JSON.parse(localStorage.getItem("listData"));
if (localListArr !== null) {
  localListArr.forEach((el) => {
    let listItem = document.createElement("li");
    listItem.textContent = el;
    list.appendChild(listItem);
  });
}

//let obj = {name:"John"};
//use JSON.stringify to convert JS objects to JSON-formatted strings
//let JSONString = JSON.stringify(obj);

//use JSON.parse() to convert a JSON-formatted string into a JS object
//console.log(JSON.parse(JSONString))
