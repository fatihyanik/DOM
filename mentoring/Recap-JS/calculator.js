
let calcuator= (()=>{


function sum(a,b){
    return a+b
}
function multiply(...arg){
    if(Array.isArray(arg)){
        return "its an array"
    }else{
        let multiple= arg.reduce((acc,num)=>{
        acc= acc*num
        return acc
    },1)
    return multiple
    }
    
}
function substract(){
    return a-b
}
function divide(){
    return a/b
}

return {
    sum, 
    substract,
    divide,
    multiply
}
})();




/* export default calcuator */


//Directive keyword
//Export 
//Import


