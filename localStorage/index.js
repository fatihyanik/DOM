const users = {
    "firstName" :"Murat",
    "lastName" :"Yanik"
}


localStorage.setItem("age", 28);
localStorage.getItem(users["firstName"]);
localStorage.getItem(users["lastName"]);

const lastName = localStorage.getItem("lastName");
console.log(lastName);