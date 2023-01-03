let animals = [ 'Tiger' , 'Lion' , 'Monkey' , 'Orangutan' , 'Rat' , 'Cat' , 'Dog' , 'Fish' ]
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