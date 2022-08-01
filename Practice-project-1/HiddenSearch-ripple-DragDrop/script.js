let searchButton = document.getElementById('search-button')
let rippleButton = document.getElementById('ripple-button')
let searchContainer = document.getElementById('searchConatiner')
let fill = document.querySelector('.fill')
let empties = document.querySelectorAll('.empty')
searchButton.addEventListener('click' , () => {
    searchContainer.classList.toggle('active')
})

rippleButton.addEventListener('click',function (e){
    const circleSpan = document.createElement('span');
    circleSpan.classList.add('circle');
    circleSpan.style.top = -50;
    circleSpan.style.left = 80;
    this.appendChild(circleSpan)
    // setTimeout(()=>{
    //     this.removeChild(circleSpan)
    // },1000)
    
})

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

empties.forEach(empty => {
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
})

function dragStart() {
    console.log('Dragging started')
    this.className += ' hold';
    setTimeout(()=>{
        this.className = 'invisible'
    })
}
function dragEnd() {
    console.log('Dragging Ended')
    this.className = 'fill';
}
function dragOver(e) {
    e.preventDefault();
    console.log('Dragging Over')
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'; 
    console.log('Dragging Entered')
}
function dragLeave() {
    console.log('Dragging left')
    this.className = 'empty'; 
}
function dragDrop() {
    this.className = 'empty'
    console.log('dropped')
    this.appendChild(fill)

}

// there are 6 types of drag events 

// dragstart -- it fires when the draggable element is dragged
// dragend -- fires when the dragging ends
// dragenter -- fires when 
// dragleave
// dragover
// drop
