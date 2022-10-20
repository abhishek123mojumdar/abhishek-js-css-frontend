import React , {useState} from 'react';
function ExpenseChild(props) {
  let [data , setData] = useState('This is data from Child')
  const sendDataToParent = function() {
    //alert(expenseDetails.name + ' whose id is ' + expenseDetails.id)

    props.selectedExpenseHandler(data)
  }
  return (
    <div>
        <h2 >This is Child Component</h2>
        <button onClick={sendDataToParent}>Send Data</button>
    </div>
  );
}

export default ExpenseChild;