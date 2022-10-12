import React , {useState} from 'react';
import './Expense.css'

export function ExpenseList(props) {
  let {title,amount} = props
  function selectExpenseData() {
    props.expenseSelectHandler({name : props.title , id:props.id})
  }
  return (
    <div>
       <li>Title : {props.title}  amount : {props.amount} <button onClick={props.expenseSelectHandler}> Select Expense</button></li>
       {/* <li>Title : {title}  amount : {amount}</li> */}
    </div>
  );
}


//  Desctructing let {name , std, roll } = {
//   name:'Abhishek',
//   std:12,
//   roll:2
// }

// console.log(name , std , roll)