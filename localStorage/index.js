/* const users = {
    "firstName" :"Murat",
    "lastName" :"Yanik"
}

localStorage.getItem(users["firstName"]);
localStorage.getItem(users["lastName"]);
localStorage.setItem("users", JSON.stringify(users));


const newUser = JSON.parse(localStorage.getItem("users"));
console.log(newUser);
console.log(newUser["lastName"]); */

const ulList = document.querySelector('.list');
const nameArr = JSON.parse(localStorage.getItem('nameList'));

if (nameArr != null) {
    nameArr.forEach(function (name) {
        const newList = document.createElement('li');
        newList.textContent = name;
        ulList.appendChild(newList);
    }); 
}


document.querySelector('#form').addEventListener('submit', function (e) {
    const newName = document.querySelector('.name').value;
    let nameArr;

    if (localStorage.getItem('nameList') === null) {
        nameArr = [];
    } else {
        nameArr = JSON.parse(localStorage.getItem('nameList'))
    }

    nameArr.push(newName);

    localStorage.setItem('nameList', JSON.stringify(nameArr));
    const newList = document.createElement('li');
    newList.textContent = newName;
    ulList.appendChild(newList);


    e.preventDefault();
});