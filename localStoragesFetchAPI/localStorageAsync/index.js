const submitBtn = document.getElementById("submitBtn");
const title = document.getElementById("title");
const body = document.getElementById("body");
const userId = document.getElementById("userId");
const list = document.getElementById("list");
// check if localStorage stores a value at key "textArr"; if so, parse this value
// as JSON and assign it to the textArr constant; else assign an empty array
const textArr = JSON.parse(localStorage.getItem("textArr")) || [];
// for each string (text) in textArr, create a list item with this string (text)
// as textContent and append it to the list
textArr.forEach((text) => {
  let listItem = document.createElement("li");
  listItem.textContent = text;
  list.appendChild(listItem);
});

async function handleSubmit() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      userId: userId.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await response.json();
  let listItem = document.createElement("li");
  let text = `Title: ${data.title}, body: ${data.body}, userId: ${data.userId}`;
  textArr.push(text);
  listItem.textContent = text;
  localStorage.setItem("textArr", JSON.stringify(textArr));
  list.appendChild(listItem);
}
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  handleSubmit();
  title.value = "";
  body.value = "";
  userId.value = "";
});