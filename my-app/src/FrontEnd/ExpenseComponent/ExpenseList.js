import React , {useState} from 'react';
import './Expense.css'
const selectExpenseBtn = {
  borderColor: 'transparent',
  borderRadius: '10px',
  color:'black',
  backgroundColor:'white',
  boxShadow: '0px 2px 4px grey'
}
export function ExpenseList(props) {
  //let {title,amount} = props
  function selectExpenseData() {
    props.expenseSelectHandler({name : props.title , id:props.id})
  }
  return (
    <div>
       <li>Title : {props.title}  amount : {props.amount} <button style={selectExpenseBtn} onClick={selectExpenseData}> Select Expense</button></li>
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