
/* ******************** document.querySelector(css selector) returns single element (only first element inside your dom tree) (universal selector) ******************************  */

/* let h1 = document.querySelector(".head")
console.dir(h1)
h1.style.backgroundColor="green" */
​
/* let span = document.querySelector(".head span")
console.dir(span) */
​
​
​
/* ************* document.getElementsByClassName() returns HTMLCollection (array like object but not an array) ****************** */
​
/* let allParas= document.getElementsByClassName("para") */
// Array.from() 
/* let allParas= Array.from(document.getElementsByClassName("para")) */
​
//spread operator
/* let allParas = [...document.getElementsByClassName("para")] */ //converted HTMLCollection into an Array
​
/* console.dir(allParas)
allParas.forEach(para=>{
    para.style.border="2px solid red";
})
 */
/* for(let i=0;i<allParas.length;i++){
    allParas[i].style.backgroundColor="blue"
}
 */
​
/* document.getElementsByTagName()  returns you HTMLCollection*/
​
/* Array.from()
spread [... ] */
/* let allParas= [...document.getElementsByTagName("p")]
console.dir(allParas )*/
​
​
​
​
/* document.querySelectorAll(css selector) returns you NodeList (universal method) */
let AllParas= document.querySelectorAll("p")
console.dir(AllParas)
AllParas.forEach(elem=>{
    elem.setAttribute("class","para")
})
​
​
/* document.getElementById(id) returns single element */
//target you header
​
/* let h1 = document.getElementById("header")
console.dir(h1)
​
h1.style.backgroundColor="yellow" */
​
/* h1.innerText="Text Changed"
h1.className="heading" */
​
​
/* css
background-color: red; */ 
/* JS
backgroundColor:"red" */
​
​
​
​
//set src for image
let image= document.querySelector("img")
let btn = document.querySelector("button")
/* image.setAttribute("src","https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
​
image.removeAttribute("src") */
​
image.src= "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
/* image.src="" */
image.alt="image"
image.width="200"
image.height="200"
image.style.position="relative"
image.style.transition="transform 3s"
let x=100; 
​
btn.addEventListener("click",()=>{
    image.style.transform=`translateX(${x}px)`
    x=x+100;
  /*   if(image.style.animationPlayState==="running"){
        image.style.animationPlayState="paused"
    }else{
           image.style.animationPlayState="running"
    } */
 
})
​
/* console.dir(document)
​
​
​
let h1 = document.createElement("h1")
let image1 = document.createElement("img")
let p = document.createElement("p")
​
p.innerHTML="New para added"
p.style.backgroundColor="blue"
h1.innerText="New Heading"
image1.src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
​
document.body.append(p,image1,h1) */
​
/* p.remove() */
/* document.body.removeChild(p) */
​
​
​
let data= [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg"
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg"
    }
    ]
​
​
    data.forEach(user=>{
        let card = document.createElement("div") // <div></div> 
        card.style.textAlign="center"
        //image
        let image= document.createElement("img") //<img src="" alt="" />
        image.src=user.avatar; //<img src="https://reqres.in/img/faces/7-image.jpg" alt="" />
        image.width="200";//<img src="https://reqres.in/img/faces/7-image.jpg" alt="" width="200" />
​
        //attached event listener 
        image.addEventListener("click",()=>{
            head.style.backgroundColor="purple"
            head.style.color="white"
        })
​
        
        //header
        let head = document.createElement("h2") // <h2></h2> 
        head.innerText= user.first_name + " " + user.last_name ; // <h2>Michael Lawson </h2> 
       /*  head.style.border="2px solid green" */
​
        //user email
        let para = document.createElement("p") //<p></p> 
        para.innerText= user.email;//<p>michael.lawson@reqres.in</p> 
​
        card.append(image, head, para) ; /* 
        <div>
        <img src="https://reqres.in/img/faces/7-image.jpg" alt="" width="200" />
        <h2>Michael Lawson </h2>
        <p>michael.lawson@reqres.in</p> 
        </div>  */
​
        document.body.append(card)
    })