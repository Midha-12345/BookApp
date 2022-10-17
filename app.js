// class Bookapp extends React.Component{
//     render(){
//         const title = 'mybookapp'
//         const subtitle = 'help me to decide book'
//         const options = ['book1','book2','book3','book4']
//         return(
//             <div>
//                 <Header title={title} subtitle={subtitle} />
//                 <Options options={options} />
//                 <Action />
//                 <Addoption />
                 
                
//             </div>
//         )
//     }
// }
// class  Header extends React.Component{
//      render(){
//         return(
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>
//         )}
//     }

// class Action extends React.Component{
//     handlepick(){
//         console.log("Handle Pick is called")
//     }
//     render(){
//         return(
//         <div>
//              <button onClick={this.handlepick}>choose book</button>
//         </div>
//         )
//     }
// }

 


// class Options extends React.Component{
//     constructor(props){
//         super(props)
//         console.log(this.props.options)
//         this.Handle_remove_all = this.Handle_remove_all.bind(this)
//     }
//     Handle_remove_all(){
        
//         console.log(this.props.options)
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.Handle_remove_all}>Remove all</button>
//                 {
//                     this.props.options.map((book)=>{ 
//                         return <Option key={book} optiontext={book} />
//                     })
//                 }
                 
//             </div>
//         )
//     }
// }

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.optiontext}
//             </div>
//         )
//     }
// }

// class Addoption extends React.Component{
//     formsubmit(e){
//         e.preventDefault()
//         console.log('form submitted')
        
//     }
//     render(){
//         return(
//         <div>
//             <form onSubmit={this.formsubmit}>
//                 <input type="text" name="option"></input>
//                 <button>Add Option</button>
//             </form>
            
//         </div>
//         )
//     }
// }

// var approot = document.getElementById("root")
// ReactDOM.render(<Bookapp />,approot)



class Counter extends React.Component{
    constructor(){
        super()
        this.addone = this.addone.bind(this)
        this.subone = this.subone.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
    addone(){
         this.setState((previousState)=>{
            return {
                count: previousState.count + 1
            }
         })
    }

    subone(){
        this.setState((previousState)=>{
            return {
                count: previousState.count - 1

            }
        })
    }

    reset(){
        this.setState((previousState)=>{
            return {
                count: 0

            }
        })
    }
    render(){
        
        return(
             
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.addone}>addone</button>
            <button onClick={this.subone}>subone</button>
            <button onClick={this.reset}>reset</button>
            </div>
            

        )
    }
}




class Toggle extends React.Component{
    constructor(){
        super()
        this.toggle_state = this.toggle_state.bind(this)
        this.state = {
            toggle:false
        }
    }

    toggle_state(){
        this.setState((previousState)=>{
            return {
                toggle: !previousState.toggle

            }
        })
    }
    render(){
        
        return(
             
            <div>
            <button onClick={this.toggle_state}>{this.state.toggle?'hide':'show'}</button>
            {this.state.toggle&&<h1>Good Morning!</h1>}
            </div>
            

        )
    }
    
}


var approot = document.getElementById("root")
ReactDOM.render(<Toggle />,approot)
