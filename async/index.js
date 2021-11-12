let btn = document.querySelector("button");

/* btn.addEventListener("click", () =>{
    console.log("start fetching data .......")
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => console.log("received data from server", data))

    console.log("end fetching .......")
}) */

//Yukaridakiyle ayni
/* function fetchData(){
    console.log("start fetching data .......")
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => console.log("received data from server", data))

    console.log("end fetching .......")
}
btn.addEventListener("click", fetchData); */

/* async function fetchData(){
    console.log("start fetching data .......")
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    console.log("we have received our data ", data);
    console.log("end fetching .......");
}
btn.addEventListener("click", fetchData); */

//BUnu scharif sordu. Bunu kullanmana gerek yok.
/* async function fetchData(){
    console.log("start fetching data .......")
    
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{return res.json()})
    
    console.log("we have received our data ", data);
    console.log("end fetching .......");
}
btn.addEventListener("click", fetchData); */

//Bu da scharif'in dedigi sey ama cok okunakli degil alttaki daha iyi
/* async function fetchData(){
    console.log("start fetching data .......")
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const finalData = await res.json().then(data => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${data[0].id}`)
        .then(secondRes=> secondRes.json())
    });
    
    console.log("we have received our data ", finalData);
    console.log("end fetching .......");
}
btn.addEventListener("click", fetchData); */

//Bu daha iyi sadece async-await kullanilmis
/* async function fetchData(){
    console.log("start fetching data .......")
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    
    console.log("now we are sending second request")
    
    const secondRes = await fetch(`https://jsonplaceholder.typicode.com/users/${data[0].id}`)
    const finalData = await secondRes.json();
    
    console.log("we have received our data ", finalData);
    console.log("end fetching .......");
}
btn.addEventListener("click", fetchData); */

//ustekinin try-catch halini kullandik
/* async function fetchData() {
  try {
    console.log("start fetching data .......");

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log("now we are sending second request");

    const secondRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${data[0].id}`
    );
    const finalData = await secondRes.json();

    console.log("we have received our data ", finalData);
    console.log("end fetching .......");
  } 
  catch (err) {
    console.log(err.message);
  }
}
btn.addEventListener("click", fetchData); */

console.log("line 100");

async function run() {
  return "line 103";
}
//console.log(run())
/* run().then(data=> console.log(data))
.catch(err => console.log(err.message))
.finally(()=> console.log("finished promise"));

console.log("line 106"); */

function MyPromise() {
  return new Promise((resolve, reject) => {
    console.log("i am inside promise");
    setTimeout(()=>{
        resolve({ name: "joseph", age: 32 });
    },5000)
  });
}
console.log(MyPromise())

MyPromise()
  .then((data)=>console.log("I received something from promise .......", data))
  .catch((err) => console.log("there is something wrong with promise"));
