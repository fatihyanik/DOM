//JS engine will execute synchronous code first before any asynchronous code
//synchronous code // blocking code
console.log("line 1");
console.log("line 2");
console.log("line 3");

//asynchronous code
/* let student = setTimeout(() => {
    let data = {name: "Joseph", age:23}
    console.log("It is your set time out1", new Date().getTime())
    return data
},1000)
console.log(student);

setTimeout(() => {
    console.log("It is your set time out2", new Date().getTime())
},0)

setTimeout(() => {
    console.log("It is your set time out3", new Date().getTime())
},0) */

/* let MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //sending request to an external api to get 5 users
        //waiting for 2 second => pending
        //you will get data =>  resolved
        //you will get an error => rejected
        let users = [{},{},{}];
        //console.log("It is your set time out3", new Date().getTime());
        if(status){
            resolve("everything is okay")
        }else{
            reject("error inside our asynchronous code")
        }
    },2000)
})
MyPromise.then((result) => console.log(result)) //asynchronous */

function printName(name) {
  console.log(name);
}

printName("Nicolas");

let a = "string";
console.log(a);

/* for(let i=0; i<10000000; i++){

} */

let usersList = [];

function createUserProfile(user) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.avatar);
}

function addUserintoList(user) {
  usersList.push(user);
}

function getUser() {
  setTimeout(() => {
    //received data from server
    /*   let user = {name:"Mike", email:34, avatar:"//image.url"}
        console.log(user); */
    //send another request to server and get more detail about that user
    setTimeout(() => {
      let hobbies = ["cricket", "reading", "coding"];
      console.log(user, hobbies);
    }, 3000);
  }, 2000);
}

/* getUser(); */

/* getUser(addUserintoList)

getUser(createUserProfile) */

//Promise.then().then().then();
/* 
function testing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = new Error("server is down");
      resolve(error);
    }, 3000);
  });
}

testing().then((result) => {
  document.querySelector("p").innerText = result.message;
});

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then(users => console.log(users));


let obj = {name: "Ali", age:23};
let string = JSON.stringify(obj);
console.log(string);

let array = ["item1", "item2"]
let convertedArray = JSON.stringify(array);
console.log(convertedArray);

let originalData = JSON.parse(string)
console.log(originalData); */

