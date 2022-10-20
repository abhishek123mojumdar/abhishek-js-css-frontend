import React , {useState} from 'react';
import { expenses } from '../../DataStore/ExpenseData';
import { ExpenseList } from './ExpenseList';
import ExpenseChild from './ExpenseChildComponent'

function ExpenseDashboard() {
  let [expenseList , setExpenseList] = useState(expenses)
  let [parentData , setParentData] = useState('This is the default parent data')
  let [css , setCss] = useState(false)
  const selectedExpense = function(param) {
    alert(param.name + ' ' + param.id )
    //alert(expenseDetails.name + ' whose id is ' + expenseDetails.id)
    //setParentData(param)
  }

  const clickFun = function  () {
    console.log('The fun function has been triggered')
    setCss(!css)
  }
  return (
    <div >
       <ul>
            {expenseList.map((data,index) => {
                return (
                    <ExpenseList key={index} title={data.title} amount={data.amount} id={data.id} expenseSelectHandler={selectedExpense}/>
                )
            })}
       </ul>
       <p className={`${css ? 'paraClassBlack':'paraClassRed'}`}>This is parent component {parentData}</p>
       <button onClick={clickFun}> Fun fun</button>
      <ExpenseChild selectedExpenseHandler={selectedExpense}></ExpenseChild>
    </div>
  );
}

export default ExpenseDashboard;

// each item of the rendered list that has been iterated should have an attribute called key which should have a unique value . 
// its important to understand that key is not a prop we cn not access it in the other component. Key is reserved
// keys helps react to understand which item has been added, deleted and modified
// 