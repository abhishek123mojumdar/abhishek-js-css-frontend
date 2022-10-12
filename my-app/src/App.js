import './App.css';
import React , {useState} from 'react';
import FrontEndComponent from './FrontEnd/FrontEndComponent'
import ExpenseDashboard from './FrontEnd/ExpenseComponent/ExpenseDashboard'

function App() {
  let [showComponent,setShowComponent] = useState(false)
  function switchComponent() {
    setShowComponent(!showComponent)
  }

  return (
    <div className="App">
        <button onClick={switchComponent}> Switch </button>
       <h1>Let us learn React</h1>
       {showComponent ? <ExpenseDashboard/>:<FrontEndComponent/>}
    </div>
  );
}

export default App;

//ternary operators