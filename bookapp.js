// var template = <h1>Hello JS!</h1>
// var approot = document.getElementById("root")
// ReactDOM.render(template,approot)

// Day2

var app = {
    title : "MyBookApp",
    subtitle : "Help me to decide Book!",
   // options : ["Book1","Book2","Book3","Book4"]
   options : []

}



const form_submission = (e)=>{
    e.preventDefault()
    const book = e.target.elements.option.value
    app.options.push(book)
  //  console.log("your form is submitted")
    console.log(app.options)
    renderApp()
}

const remove_all = ()=>{
    app.options =[]
    console.log(app.options)
    console.log("your list is empty")
    renderApp()
}
var count = 0
const Addone = ()=>{
    //console.log("Addone is added")
    count = count + 1
    renderApp()
}
const Subone = ()=>{
   // console.log("Subone is added")
   count = count-1
   renderApp()
}
const reset = ()=>{
   // console.log("reset is added")
   count = 0
   renderApp()
}
const decidebook = () =>{
    
    const random_number = Math.floor(Math.random() * app.options.length)
    console.log(random_number)
    const book = app.options[random_number]
    alert(book)
}

const renderApp = () =>{
    var template = 
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
        <h2>{app.options.length>0?'these are options':'no option'}</h2>
        <ol>
             {app.options.map((book)=>{
               return <li>{book}</li>
                })}
        </ol>
         
        <h1>count:{count}</h1>
        <button onClick={Addone}>+1</button>
        <button onClick={Subone}>-1</button>
        <button onClick={reset}>reset</button>
        <button onClick={decidebook}>Which book shall I read ?</button>
        <form onSubmit={form_submission}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
        <button onClick={remove_all}>remove</button>
    </div>
var approot = document.getElementById("root")
ReactDOM.render(template,approot)

}

renderApp()
