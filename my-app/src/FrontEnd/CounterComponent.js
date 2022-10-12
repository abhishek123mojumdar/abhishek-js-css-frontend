import React , {Component} from "react";
import './counter.css'

class Counter extends Component {
    constructor () {
        super()
        this.state = {
            counter : 0,
            prevStateCounter : 0
        }
    }

    increaseCount() {
        this.setState(
            {counter: this.state.counter + 1},
            // ()=>{
            //     console.log('Inside callback ' , this.state.counter)
            // }
            
        )
        console.log(this.state.counter)
    }

    //Important point to remember is that calls to setState are asynchronous , As this is aynchronous the console.log in line number 20 gets 
    //called before the setState is called (concepts of event loop) and hence there is a discrepency in the state values.
    //If there is any operation that needs to be performed after the setState method has updated the variable it should be done in side the callback fn



    increaseCountFORPrev() {
        this.setState({
            prevStateCounter : this.state.prevStateCounter + 1
        })

        // this.setState(
        //     (prevState)=> ({
        //         prevStateCounter : prevState.prevStateCounter + 1
        //     }))
        console.log(this.state.prevStateCounter)
    }

    increaseFive() {
        this.increaseCountFORPrev()
        this.increaseCountFORPrev()
        this.increaseCountFORPrev()
        this.increaseCountFORPrev()
        this.increaseCountFORPrev()
    }

    // Its is important to note that if we need to update some information based on the the prev state we should not use the setState normally 
    // We should update the state corresponding to the prev state inside an arrow function which should be passed insided the setState

    // This is because React groups multiple setState calls into a single update for better performance

   
    render () {
        //console.log('Rendered')
       return ( <div className="counterClass">
            <div>Count : <span>{this.state.counter}</span></div>
            <button onClick={this.increaseCount.bind(this)}>Increase Counter</button> 
            <hr/>
            <div>Prev Count : <span>{this.state.prevStateCounter}</span></div>
            <button onClick={this.increaseFive.bind(this)}>Update counter based on prevState</button> 
        </div> )
    }
}

export default Counter;

//Never modify the state directly  , always use the useState method to modify the state 
// what is bind ? show what is call apply and bind