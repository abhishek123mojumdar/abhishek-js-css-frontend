

 let heading  = document.getElementById('name123')
 let button  = document.getElementById('btn')

 button.addEventListener('click',changeAppearance)

 function changeAppearance() {
  console.log(heading)
  heading.style.backgroundColor = 'red';
  heading.style.color ='white';
  heading.style.border ='1px solid black'
 }