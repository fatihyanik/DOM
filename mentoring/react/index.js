/* console.log(React);
console.log(ReactDOM)
console.dir(React.Component) */

//JSX
/* const main = <h1>Hello World</h1> //Normal element
ReactDOM.render(main, document.getElementById("root")); */

/* const main = () =>{
    return(
        <h1>Hello World</h1>
    )
}
ReactDOM.render(main(), document.getElementById("root")); */

/* const Main = () =>{
    return(
        <h1>Hello World</h1>
    )
}
ReactDOM.render(<Main/>, document.getElementById("root")); */

/* class Main extends React.Component{
    render(){
        return (
            <h1>Hello World</h1>       
        )
    }
}
ReactDOM.render(new Main().render() , document.getElementById("root")); */

/* class Main extends React.Component{
    render(){
        return (
            <h1>Hello World</h1>       
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById("root")); */

const Child = (text) => {
    return(
        <p> {text.value}</p>
    )
}

Child({name:"Ali"})

class Main extends React.Component{
    render(){
        
        let styling = {
            backgroundColor:"yellow",
            display:"flex",
            listStyle:"none"
        }

        let data = [
        "This is para 1",
        "This is para 2", 
        "This is para 3"
        ]
        return (
            <div> 
                <ul style={styling}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Child value={data[0]} />
                <Child value={data[1]} />
                <Child value={data[2]} />

                <h1 style={{color:"red", border:"2px solid black"}}>Hello World</h1>       
                <h2 className="heading">This is your second heading</h2>
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById("root"));