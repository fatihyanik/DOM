const users = {
    "firstName" :"Murat",
    "lastName" :"Yanik"
}

localStorage.getItem(users["firstName"]);
localStorage.getItem(users["lastName"]);
localStorage.setItem("users", JSON.stringify(users));


const newUser = JSON.parse(localStorage.getItem("users"));
console.log(newUser);
console.log(newUser["lastName"]);
