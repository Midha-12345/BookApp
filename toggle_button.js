let state = false
const toggle = ()=>{
    state = !state
    renderApp()
}

  

const renderApp = () =>{
    var template = 
    <div>
        <button onClick={toggle}>{state?'show':'hide'}</button>
        {!state&&<h1>Hello World!</h1>}
    </div>
var approot = document.getElementById("root")
ReactDOM.render(template,approot)
}
renderApp()