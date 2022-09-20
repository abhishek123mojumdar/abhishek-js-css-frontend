//teach what is an array
//globa and local variable
//flex box
//let var const
//foreach 
//eleById , elebytagName , queryselector
//string + operator
//string concat
//template variables

console.log(document)

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  let para = document.getElementById('demo')
  para.style.cursor = 'pointer'
  para.style.color = 'red'
  para.addEventListener('click' , (e) => {
    console.log(e)
    para.style.cursor = 'pointer'
    alert(e.target.outerText)
  })

  let inputConatiner = document.querySelector('.input-container')

  let btnGroup = document.querySelectorAll('.btn')
  btnGroup.forEach(btn => {
    console.log(btn)
    btn.disabled = true
    btn.classList.add('disabled')
  })


  let btnStart = document.querySelector('.btn-start').addEventListener('click',()=> {
    btnGroup.forEach(btn => {
      console.log(btn)
      btn.removeAttribute('disabled')
      btn.classList.remove('disabled')
      inputConatiner.style.display = 'block'
    })
  })


 

  let htmlRadioButton = document.getElementById('html').value
  let cssRadioButton = document.getElementById('css').value
  let javascriptRadioButton = document.getElementById('javascript').value

  let vehicle1 = document.getElementById('vehicle1').value
  let vehicle2 = document.getElementById('vehicle2').value
  let vehicle3 = document.getElementById('vehicle3').value
  

  let swapBtn  = document.getElementById('swapBtn')
  let selectBoxValue = document.getElementById('ddlViewBy').value

  swapBtn.addEventListener('click',swapValue)

  

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

  


  let fullName = document.getElementById('fullName')
  let language = document.getElementById('lang')
  let vehicle = document.getElementById('vehicle')
  let country = document.getElementById('country')
  let desc = document.getElementById('desc')

  // let select = document.getElementById('ddlViewBy').addEventListener('change',(e)=> {
  //   //console.log(e)
  //   selectElement = document.querySelector('#ddlViewBy'); // with this we get access to the select box
  //   output = selectElement.options[selectElement.selectedIndex].value; // with this we get access to the options in the select box [options is an array] the selectedIndex gives us the index that is selected 

  // })
  
  function submitData() {
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let description  = document.getElementById('description').value
    let countryValue = document.getElementById('ddlViewBy').value

    let full = 'Full name : ' +  firstName.concat(', ', lastName) //concatenation
    fullName.innerHTML = full

    let radioBtns = document.querySelectorAll('input[type=radio]') //querySelectorAll  gets all elements with the same queries
    let langValue = ''
    radioBtns.forEach(radio => { // forEach loop
        if (radio.checked) {
          langValue = radio.value
        }
    })

    //console.log(langValue)

    language.innerHTML = 'Programming Lang: ' + langValue

    let li = ``
    checkBoxSelectedValue.forEach(checkBoxValue => {
      li = li + `<li>${checkBoxValue}</li>` // template variables
    })

    li  = li ? li : 'No vehicles selected' // Ternary operators

    let ul = `<ul>${li}</ul>`
    let listHTML = `<label>Vehicles owned</label> ${ul}`
    //console.log(listHTML)
    vehicle.innerHTML = listHTML
    desc.innerHTML = ' Description : ' + description

    country.innerHTML = 'You have selected the country as : ' + countryValue

  }


  function swapValue() {
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    document.getElementById('fname').value = lastName
    document.getElementById('lname').value = firstName
  }


  let inputString = ''
  let operString = ''
  let paraGraph = ''

  function charAT() {
    getValues()
    operString = parseInt(operString)
    let char = inputString.charAt(operString)
    paraGraph.innerHTML = `Character At ${operString} is '${char}'` 
    removeValues()
  }

  function repeat() {
    getValues()
    let repeat = operString.repeat(3)
    paraGraph.innerHTML = `${inputString} is ${repeat} !!` 
    removeValues()
  }

  function includes() {
    getValues()
    let bool = inputString.includes(operString)
    paraGraph.innerHTML = `string '${operString}' found in '${inputString}' :  ${bool}` 
    removeValues()
  }
  function match() {
    getValues()
    operString = parseInt(operString)
    let char = inputString.charAt(operString)
    paraGraph.innerHTML = `Character At ${operString} is '${char}'` 
    removeValues()
  }
  function replace() {
    getValues()
     inputString.replace('good',operString)
    paraGraph.innerHTML = inputString.replace('good',operString)
    removeValues()
  }

  
  function search() {
    getValues()
    operString = parseInt(operString)
    let char = inputString.charAt(operString)
    paraGraph.innerHTML = `Character At ${operString} is '${char}'` 
    removeValues()
  }


  function getValues () {
    inputString = document.getElementById('inpStr').value
    operString = document.getElementById('oprInt').value
    paraGraph = document.getElementById('showOutput')
  }

  function removeValues() {
    inputString = document.getElementById('inpStr').value = ''
    operString = document.getElementById('oprInt').value = ''
  }


  let interval
  let timer = 10
  let para12 = document.getElementById('showTime')
  let btn = document.getElementById('starttime').addEventListener('click',startTimer)
  
  
  function startTimer() {
     console.log('Starting')
    interval = setInterval(()=>{
      para12.innerHTML = `Time passed : ${timer} secs`
      console.log('Time passed : '+ timer + ' secs')
      timer = timer - 1

      if(timer === 0 ) {
        para12.innerHTML = `10 seconds have paseed stopping the timer`
        console.log('10 seconds have paseed stopping the timer')
        clearInterval(interval)
      }
  }, 1000);
  }
  
  function stopInterval() {
    console.log('Stopping interval')
    clearInterval(interval)
  }