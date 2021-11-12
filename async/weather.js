let form = document.querySelector("form")
let cityName = document.querySelector("input")
let weatherDiv = document.querySelector(".weather")
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
    })
}
form.addEventListener("submit", (e)=>{
    //stop default behaviour of our form
    e.preventDefault()
    if(cityName.value.trim()!==""){
        getWeatherData(cityName.value) 
    }
    
})
window.addEventListener("load",()=>{
    fetch("https://geolocation-db.com/json/")
    .then(res=>res.json())
    .then(location=> getWeatherData(location.city))
})
