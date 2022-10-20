import React , {useState} from 'react';
import Counter from './CounterComponent'

function FrontEndComponent() {
  const [name, setName] = useState('Abhishek'); 

  function changeName() {
    setName('Abhishek Mojumdar')
  }

  return (
    <div>
       <h1>This is a React Component</h1>
       <p>Name is {name}</p>
       <button onClick={changeName}>Click me</button>
       <Counter name="abhishek"></Counter>
    </div>
  );
}

export default FrontEndComponent;