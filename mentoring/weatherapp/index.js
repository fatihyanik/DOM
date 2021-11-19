let btn = document.querySelector("button")
​
​
async function fetchData (){
​
    try {
        console.log("start fetching data ........")
​
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
​
    console.log("now we are sending second request")
​
    const secondRes=await fetch(`https://jsonplaceholder.typicode.com/users/${data[0].id}`)
    const finalData = await secondRes.json()
​
    /* const finalData = await res.json().then(data=>{
        return fetch(`https://jsonplaceholder.typicode.com/users/${data[0].id}`)
        .then(secondRes=>secondRes.json())
    }) */
​
    console.log("we have recieved our data ", finalData)
    console.log("end fetching ........")
    }
    catch(err){
        console.log(err.message)
    }
​
    
}
/* fetch()
.then((res)=>{}, (err)=>{}) */
​
/* fetch()
then(res=>{})
.catch(err=>{}) */
​
​
btn.addEventListener("click",fetchData)
​
/* console.log("line 41") */
​
async function run(){
    return "string"
}
/* console.log(run()) */
​
/* run().then(data=>console.log(data))
.catch(err=>console.log(err.message))
.finally(()=>console.log("finished promise")) */
​
​
/* console.log("line 48" )
​
​
function MyPromise(){
    return new Promise((resolve,reject)=>{
        console.log("i am inside promise")
       setTimeout(()=>{
            resolve({name:"joseph",age:32})
        },5000) 
})
}
console.log(MyPromise())
​
​
MyPromise().then((data)=>console.log("I received something from promise.........",data))
.catch(err=>console.log("there is something wrong with promise")) */
​
​
/* 
let timerHeader = document.getElementById("time")
let timerButton = document.getElementById("timerButton")
​
let timer = setInterval(()=>{
    let time = new Date().toTimeString()
    timerHeader.innerText=time
}, 1000)
​
​
timerButton.addEventListener("click", ()=>{
    clearInterval(timer)
}) */
​
​
let form = document.querySelector("form")
let cityname = document.querySelector("input")
let weatherDiv = document.querySelector(".weather")
​
​
function getWeatherData(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d68185a8bf5aeed5e1de06743bc9c7d&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        weatherDiv.innerHTML=""
        console.log(data)
        let h2 = document.createElement("h2")
        h2.innerText= data.main.temp+" °C"
        let image= document.createElement("img")
        image.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 
        weatherDiv.append(image,h2)
​
    })
}
​
​
form.addEventListener("submit", (e)=>{
    //stop default behaviour of our form
    e.preventDefault()
    if(cityname.value.trim()!==""){
        getWeatherData(cityname.value) 
    }
    
})
​
window.addEventListener("load",()=>{
   getWeatherData("berlin")
})