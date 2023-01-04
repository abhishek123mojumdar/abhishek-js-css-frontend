let animals = [ 'Tiger' , 'Lion' , 'Monkey' , 'Orangutan' , 'Rat' , 'Cat' , 'Dog' , 'Fish' ]
let employees = [
  {
    name : 'Abhishek',
    organization : 'Pure Storage',
    empid : '11244',
    phoneNumber : 7250819791,
    address:'Bangalore'
  },
  {
    name : 'Jaideep',
    organization : 'Dell EMC',
    empid : '98673',
    phoneNumber : 987634512,
    address:'Jaipur'
  },
  {
    name : 'Sumit',
    organization : 'Inautix',
    empid : '87312',
    phoneNumber : 976436721,
    address:'Pune'
  },
  {
    name : 'Somreh',
    organization : 'Nike',
    empid : '87453',
    phoneNumber : 7659012436,
    address:'Bhubaneshwar'
  },
  {
    name : 'Lily',
    organization : 'Accenture',
    empid : '00987',
    phoneNumber : 6098345689,
    address:'Inodre'
  },
  {
    name : 'Roman',
    organization : 'Unacademy',
    empid : '76432',
    phoneNumber : 5643812564,
    address:'Bhatinda'
  },
  {
    name : 'Ashu',
    organization : 'Amazon',
    empid : '72332',
    phoneNumber : 7865098123,
    address:'Patiala'
  },
  {
    name : 'Ankit',
    organization : 'Microsoft',
    empid : '77632',
    phoneNumber : 9873245671,
    address:'Kolkata'
  }
]
let showAnimalData = document.getElementById('showAnimalData')

function showData() {
  let li =``;
  let ul=``;
  animals.forEach((animal,index) => {
    li = li + `<li id="${index+1}" class="animalList">${animal}</li>`
  } )
  ul = ul + `<ul>${li}</ul>`
  showAnimalData.innerHTML = ul

}

function search() {
  let searchInput  = document.getElementById('search').value;
  let errorSpan = document.getElementById('error')
  let index = animals.findIndex(animal => animal === searchInput)
  console.log(index)
  if (index > -1) {
    let foundList = document.getElementById(index+1)
    foundList.classList.add('animalListFound')
    errorSpan.style.display = 'none'
  } else {
    errorSpan.innerText = 'Searched element not found'
    errorSpan.classList.add('errorSpan')
    errorSpan.style.display = 'block'
  }
  
}

function showCard() {
  console.log(employees)
  let card = ``
  let cardLayout = document.getElementsByClassName('cards-layout')
  console.log(cardLayout)
  employees.forEach((employee,index)=> {
    card = card + `<div class="box" style="background-color:${index%2 === 0 ? 'crimson' : 'blue'}"><p>Name : ${employee.name}</p>
    <p>Organization : ${employee.organization}</p>
    <p>Address : ${employee.address}</p>
    <p>Employee Id : ${employee.empid}</p>
    <p>Phone number : ${employee.phoneNumber}</p>
    <button  onclick="deleteEmp('${employee.empid}')" id="del-${index}">Delete</button>
    </div>
    `
  })

  cardLayout[0].innerHTML = card

}

function deleteEmp(id) {
  console.log(id)
  let index = employees.findIndex(emp => emp.empid === id)
  console.log(index)
  employees.splice(index,1)
  showCard()
}