let searchButton = document.getElementById('search-button')
let rippleButton = document.getElementById('ripple-button')
let searchContainer = document.getElementById('searchConatiner')
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
