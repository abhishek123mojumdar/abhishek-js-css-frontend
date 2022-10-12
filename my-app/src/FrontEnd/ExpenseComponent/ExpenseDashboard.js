import React , {useState} from 'react';
import { expenses } from '../../DataStore/ExpenseData';
import { ExpenseList } from './ExpenseList';

function ExpenseDashboard() {
  let [expenseList , setExpenseList] = useState(expenses)
  const selectedExpense = function(expenseDetails) {
    alert('This is being triggered from child component')
    //alert(expenseDetails.name + ' whose id is ' + expenseDetails.id)
  }
  return (
    <div>
       <ul>
            {expenseList.map((data,index) => {
                return (
                    <ExpenseList key={index} title={data.title} amount={data.amount} id={data.id} expenseSelectHandler={selectedExpense}/>
                )
            })}
       </ul>
    </div>
  );
}

export default ExpenseDashboard;