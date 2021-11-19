//Dom Events
​
//any action taken by user or browser itself within the browser is called event
//click
//input
//focus
//change
//keyboard events (keydown,keyup)
//resize
//submit (form event , it belongs to form only)
​
​
const h1 = document.querySelector("h1")
​
console.dir(h1)
​
​
/* Event handler */
/* Event Object */
​
/* h1.onclick = function(event){
    h1.style.backgroundColor="blue"
    h1.style.color="white"
    console.log(event)
}
​
h1.onmouseenter = function(event){
    h1.style.backgroundColor="red"
    console.log(event)
} */
​
/* h1.className="heading" */
/* h1.setAttribute("class","heading") */
/* h1.classList.add("heading") */
​
​
/* h1.addEventListener("mouseenter", ()=>{
    h1.style.backgroundColor="blue";
​
}) */
​
​
let input =document.querySelector("input")
//input and keyup are same
//trigger in real time
/* input.addEventListener("input",()=>{
    console.log(input.value)
} ) */
​
/* input.addEventListener("focus",()=>{
   input.style.backgroundColor="gray"
   input.style.padding="5px"
} ) */
​
//trigger when you focus out from input field
/* input.addEventListener("change",()=>{
    console.log(input.value)
} ) */
​
​
/* input.addEventListener("keydown",()=>{
    console.log(input.value)
} ) */
​
/* input.addEventListener("keyup",()=>{
    console.log(input.value)
} ) */
​
​
​
/* let form = document.querySelector("form")
​
form.addEventListener("submit", (event)=>{
    //stopping default behaviour of your form(referesh)
    event.preventDefault()
    console.log("form submitted")
    console.log(input.value)
}) */
​
​
/* window.addEventListener("resize",()=>{
   console.log(window.innerWidth)
   if(window.innerWidth<500){
       document.body.style.backgroundColor="green"
       h1.innerText= "Mobile mode"
   }else{
    document.body.style.backgroundColor="white"
    h1.innerText= "Dom Events"
   }
}) */
​
​
​
/* window.addEventListener("load",()=>{
    console.log("page loaded ")
}) */
​
​
//Bubbling and Capturing phases 
​
​
/* let main = document.querySelector(".main")
let box = document.querySelector(".box")
let innerbox= document.querySelector(".innerbox")
​
document.body.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log("user clicked on body")
})
​
main.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log("user clicked on main")
})
box.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log("user clicked on box")
})
​
innerbox.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log("user clicked on innerbox")
})
 */
​
​
let lis = document.querySelectorAll("li") // NodeList
let spans = document.querySelectorAll("span")
​
lis.forEach(li=>{
    li.addEventListener("click",()=>{
        li.style.backgroundColor="gray"
        console.log("running ")
    })
})
​
spans.forEach(span=>{
    span.addEventListener("click", (e)=>{
        e.stopPropagation() //stopping bubbling phase
        e.stopImmediatePropagation() // stopping other events attach to this element 
        span.parentElement.remove()
    })
})
​
​
//Event delegation
//instead of attaching to many event listeners to children ,attach one single event listener to parent element