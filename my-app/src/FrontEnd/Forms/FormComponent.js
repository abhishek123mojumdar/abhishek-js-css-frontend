// Form elements which are controlled by react are called Controlled Components


import React , {Component} from "react";

const formCss = {
    border:'1px solid black',
    padding:'1 rem'
}

class FormHandler extends Component {
    constructor (props) {
        console.log('Constructore has been called')
        super(props)
        this.state = {
            name : '',
            language : '',
            description : ''
        }
    }
   
    static getDerivedStateFromProps(props,state) {
        console.log('get Derived state from props has been called //  When the state depends upon the changes in props over time')
    }

    getInputValue (e) {
        this.setState({name:e.target.value})
    }
    getDescriptionValue (e) {
        this.setState({description:e.target.value})
    }
    getLanguageValue (e) {
        this.setState({language:e.target.value})
    }


    componentDidMount() {
        //This gets called immediately after the component and all the child component have been rendered
        console.log('Component did mount method called')
    }



    render () {
        console.log('Rendered // This is the only required method in the component')
       return ( <div style={formCss}>
        <h4> {this.props.name}</h4>
        <form>
            <div> 
                <label> Name : </label>
                <input type="text" value={this.state.name} onChange={this.getInputValue.bind(this)}/>
            </div>
            <br/>
            <div>
                <label> Description : </label>
                <textarea type="text" value={this.state.description} onChange={this.getDescriptionValue.bind(this)}/>
            </div>
            <br/>
            <div>
                <label> Language : </label>
                <select value={this.state.language} onChange={this.getLanguageValue.bind(this)}>
                    <option value="React"> React</option>
                    <option value="Angular"> Angular</option>
                    <option value="Vue"> Vue</option>
                </select>
            </div>
            <br/>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        <p>The Name is  : {this.state.name}</p>
        <p>The Language is : {this.state.language}</p>
        <p>The Description is : {this.state.description}</p>
        </div>)
    }
}

export default FormHandler;


// Life cycle methods :

// Mounting :  When an instance of a component is created and inserted into the DOM
// Updating : Component is re-rendered when there is a change in props or state
// Unmounting : Component is removed from the DOM
// Error Handling : When there is an error while rendering the component