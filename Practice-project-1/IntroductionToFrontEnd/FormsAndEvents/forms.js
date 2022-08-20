//teach what is an array

console.log(document)

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  let para = document.getElementById('demo')
  para.style.cursor = 'pointer'
  para.style.color = 'red'
  para.addEventListener('click' , () => {
    alert(12)
  })

//   let form = document.getElementById('myForm')
//   form.addEventListener('submit', (e)=>{
    
//   })

  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value

  let htmlRadioButton = document.getElementById('html').value
  let cssRadioButton = document.getElementById('css').value
  let javascriptRadioButton = document.getElementById('javascript').value

  let vehicle1 = document.getElementById('vehicle1').value
  let vehicle2 = document.getElementById('vehicle2').value
  let vehicle3 = document.getElementById('vehicle3').value

  let swapBtn  = document.getElementById('swapBtn')

  let selectBoxValue = document.getElementById('ddlViewBy').value

  swapBtn.addEventListener('click',swapValue)

  function swapValue() {
    document.getElementById('fname').value = lastName
    document.getElementById('lname').value = firstName
  }

  let checkBoxSelectedValue = []
  let checkBoxes = document.querySelectorAll('input[type=checkbox]')
  checkBoxes.forEach((checkBox,index) => {
    checkBox.addEventListener('click' , (e) => {
        if(e.target.checked) {
            checkBoxSelectedValue.push(e.target.value)
        }else {
            let idx = checkBoxSelectedValue.findIndex(val => val === e.target.value)
            checkBoxSelectedValue.splice(idx,1)
        }
        console.log(checkBoxSelectedValue)
    })
  })

  function submitData() {
    console.log(firstName , lastName)
    console.log(htmlRadioButton , cssRadioButton , javascriptRadioButton)
    console.log(vehicle1 , vehicle2 , vehicle3)
    console.log(selectBoxValue)
    // let select = document.getElementById('ddlViewBy')
    // console.log(select)
    // console.log(select.options[select.selectedIndex].text)
    console.log(checkBoxSelectedValue)
  }