const commentForm = document.querySelector(".comment-form");
const title = document.querySelector(".title");
const textArea = document.querySelector(".text-area");
const buttonAdd = document.querySelector(".btn-add");

const userId = 1;
const comments = [];
// buttonAdd.addEventListener("click", (e) => {
//   e.preventDefault();
//   let commentObj = new Object();
//   commentObj.userId = 1;
//   commentObj.id = comments.length + 1;
//   commentObj.title = title.value;
//   commentObj.body = textArea.value;
//   comments.push(commentObj);
//   console.log(comments);
// });
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let commentObj = new Object();
  commentObj.userId = 1;
  commentObj.id = 1;
  commentObj.title = title.value;
  commentObj.body = textArea.value;
  const postData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        body: textArea.value,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  postData();
});
