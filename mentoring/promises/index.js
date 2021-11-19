//JS engine will execute synchronous code first before any asynchonous code
//synchronous code //blocking code
​
/* console.log("line 1");
console.log("line 2");
console.log("line 3"); */
​
//asynchronous code
/* let student = setTimeout(()=>{
    let data = {name:"Joseph",age:23}
    console.log("it is your setTimeout", new Date().getTime())
    return data
},1000)
​
console.log(student) */
​
/* setTimeout(()=>{
    console.log("it is your setTimeout", new Date().getTime())
},0)
setTimeout(()=>{
    console.log("it is your setTimeout", new Date().getTime())
},0) */
/* 
let MyPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //sending request to an external api to get 5 users
        //waiting for 2 second => pending
        //you will get data => resolved
        // you will get an error => rejected
        let users = [{}, {},{}]
      console.log("it is your setTimeout", new Date().getTime()) 
        if(status){
            resolve(data)
        }else{
            reject("error inside our asynchonous code")
        }
    },2000)
})
​
MyPromise.then((result)=>console.log(result)) //asynchronous */
​
/* function printName(name) {
  console.log(name);
}
​
printName("Nicolas");
​
let a = "string";
​
console.log(a); */
​
/* for(let i=0; i<10000000000; i++){
​
} */
​
let usersList = [];
​
function createUserProfile(user) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.avatar);
}
​
function addUserintoList(user) {
  usersList.push(user);
}
​
function getUser() {
  setTimeout(() => {
    //received data from server
    /* let user = { name:"Mike", email:34, avatar: "//image.url"}
        console.log(user) */
    //send another request to server and get nore detail about that user
    setTimeout(() => {
      let hobbies = ["cricket", "reading", "coding"];
      console.log(user, hobbies);
    }, 3000);
  }, 2000);
}
​
/* getUser(); */
​
/* getUser(addUserintoList)
​
getUser(createUserProfile) */
​
/* Promise.then().then().then().then();
 */
​
function testing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = new Error("server is down");
      resolve(error);
    }, 3000);
  });
}
​
/* testing().then((result) => {
  document.querySelector("p").innerText = result.message;
});
​
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    return users[0];
  })
  .then((user) => user.name)
  .then((name) => fetch(` https://users/${name}`)) */
​
/* 
let obj = {name:"Ali", age:23 }
let array = ["item1","item2"]
​
let convertedArray = JSON.stringify(array)
let string  = JSON.stringify(obj)
console.log(string, convertedArray)
​
​
let originalData = JSON.parse(string)
console.log(originalData) */
​
function firstFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("setTimout after 5s, first data we want to fetch ");
      resolve("finished with first fetch");
    }, 5000);
  });
}
​
function secondFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("settimeout after 2s, second data we want to fetch");
      resolve("finished with second fetch");
    }, 2000);
  });
}
​
function thirdFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("setTimeout after 1s, third data we want to fetch");
      reject("there is an error in this fetch");
    }, 1000);
  });
}
​
/* firstFetch()
  .then((value) => secondFetch())
  .then((value1) => thirdFetch())
  .then(result=>console.log(result))
  .catch(err=>console.log(err)) */
​
  //async await
​
  async function handlePromises(){
      try{ 
             await firstFetch()
            await secondFetch()
             await thirdFetch() 
      }
      catch(err){
          alert(err)
      }
     
  }
​
 /*  handlePromises() */
​
​
 // async function returns a Promise
async function returnValue(){
    /* return new Promise((resolve,reject)=>{
        resolve({name:"Joe"})
    }) */
    return {name:"Joe"}
}
​
returnValue().then(data=>console.log(data))
​
/* async function getUser(){
    let data = await returnValue()
    console.log(data)
}
getUser() */
​
/* fetch("./text.txt")
.then(response=>response.text()).then(text=>console.log(text)) */
​
/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=> response.json())
.then(data=>{
    let ul = document.querySelector("ul")
​
    data.forEach(post=>{
        let li = document.createElement("li")
        li.innerText= post.title
        ul.append(li)
    })
}) */
​
let createPosts=  async ()=>{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    let ul = document.querySelector("ul")
    data.forEach(post=>{
        let li = document.createElement("li")
        li.innerText= post.title
        ul.append(li)
    })
}
createPosts()