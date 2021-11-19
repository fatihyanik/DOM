//map =>returns an array with exact items in original array
//filter => returns an array but less items than original array
//reduce => returns an array, string, number ,object



/* let numbers = [1,2,3,4,5,6] */ /* =>typeof number */


/* Array.reduce((accumulator, currentItem)=>{}, initialValue) */

/* acc is just like a container */

/* let sum = numbers.reduce((acc, number)=>{
    acc= acc+number 
    return acc 
}, 0) //callback is depending on each iteration

console.log(sum) */


/* let sqaureNumbers= numbers.reduce((acc,number)=>{
    acc.push(number*number)
    return acc
},[])

console.log(sqaureNumbers)

let ObjectReduce= numbers.reduce((acc,number)=>{
    acc[number]=number*2
    return acc
},{})

console.log(ObjectReduce)


let nestedArray= [ ["item1","item2"] ,  ["item3","item4"] ]*/

/* result = { firstItem: ["item 1", "item 2"] , secondItem:  ["item 3","item 4"] } */



/* let result = nestedArray.reduce((acc,each)=>{
    if(acc["firstItem"]){
        acc.secondItem = each.map(num=>num.slice(0,4)+ " "+num.slice(-1))
    }else{
          acc.firstItem = each.map(num=>num.slice(0,4)+ " "+num.slice(-1))
    }
  
    return acc
},{} )

console.log(result) */


//Synchronous and Asynchronous coding

//Asynchronous => parallel to each other
/* setTimeout(()=>{
    console.log("console from setTimeout 1")
}, 5000)

setTimeout(()=>{
    console.log("console from setTimeout 1")
}, 5000) */

//Synchronous // blocking code => top to bottom
/* console.log("start")

console.log("line 62")

setTimeout(()=>{
    for(let i=0;i<10000000000;i++){
        if(i===999999999){
            console.log("done")
        }
    }
},0)



let a = "hello world"

console.log(a)

console.log("ending") */

//all synchronous code execute before asynchronous code



//hoisting
/* console.log(a) */
/* printname() */
/* 

let a= 23;

let printname=()=>{
    console.log("hello naqvi")
}
 */

/* async function normal(){
  let data = await fetch("https://jsonplaceholder.typicode.com/users") 
  let parsedData= await data.json()
  console.log(parsedData)
}

console.log("start")
normal()
console.log("end") */



//lets make coffee
//function declration
/* function firstTask(task2,task3){
    setTimeout(()=>{
           console.log("boiled water") 
           task2(task3)
    },5000)

}

function secondTask(task3){
    setTimeout(()=>{
          console.log("added coffee into boiled water")
          task3()
    }, 2000)
  
}

function thirdTask(){
    setTimeout(()=>{
    console.log("added sugar in our coffee")
    console.log("your coffee is ready!")
    },1000)
   
}

firstTask(secondTask,thirdTask) */


function printUser(user){
    console.log(user.first_name)
    console.log(user.email)
    console.log(user.id)
}


/* let array= [1,2,3]
let convertedData= JSON.stringify(array)

let originalArray= JSON.parse(convertedData) //sychronous coding

console.log(originalArray) */


/* function fetchUser(anyfuncDependingonUser){
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json()) //asynchronous
    .then(result=> anyfuncDependingonUser(result.data[0]))
}

fetchUser(printUser) */



/* let student1 = {
    name:"naqvi",
    age:23,
    classname:"fbw44",
    printDetails(){
        console.log(`student name is ${this.name}`)
    }
}

let student2 = {
    name:"joseph",
    age:23,
    classname:"fbw46",
    printDetails(){
        console.log(`student name is ${this.name}`)
    }
} */

/* function CreateStudent(name,age,classname){
    this.name=name
    this.age= age
    this.classname=classname
}
CreateStudent.prototype.printUser=function(){
    console.log(`student name is ${this.name}`)
}


console.log(CreateStudent.prototype)

let student1= new CreateStudent("naqvi",23,"fbw44")
let student2= new CreateStudent("robert",32,"fbw45")

console.log(student1)
console.log(student2) */


class CreateStudent{
    constructor(name,age,classname){
        this.name= name;
        this.age=age;
        this.classname=classname;
    }
}

CreateStudent.prototype.printUser=function(){
    console.log(`student name is ${this.name}`)
}

let student3 = new CreateStudent("Ali",34, "fbw32")
let student4 = new CreateStudent("John",34, "fbw32")
let student5 = new CreateStudent("Joseph",34, "fbw32")