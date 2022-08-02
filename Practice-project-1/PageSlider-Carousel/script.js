let next = document.getElementById('next')
let prev = document.getElementById('prev')
let carouselEffectBtn = document.getElementById('carouselEffectBtn')
let imgs = document.querySelectorAll('.img')
let body  = document.getElementsByTagName("BODY")[0]
let counter = 0;
let interval 
let carouselEffect = false

next.addEventListener('click' , nextElement )

prev.addEventListener('click' , previousElement)

carouselEffectBtn.addEventListener('click',startAutoCarouselEffect)


function nextElement () {
    counter++;
    if (counter >= imgs.length) {
        counter = 0
    }
    imgs.forEach((element,index) => {
        if (index === counter) {
            let backGroundImage = element.style['background-image']
            body.style['background-image'] = backGroundImage
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    });
}


function previousElement () {
    counter--;
    if (counter <= 0) {
        counter = imgs.length-1
    }
    imgs.forEach((element,index) => {
        if (index === counter) {
            let backGroundImage = element.style['background-image']
            body.style['background-image'] = backGroundImage
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    });
}

function reset() {
    clearInterval(interval);
    interval = setInterval(nextElement,1000)
}

function startAutoCarouselEffect () {
    if (!carouselEffect) {
        interval = setInterval(nextElement,1000)
        carouselEffectBtn.innerHTML = 'Stop Carousel'
        carouselEffect = true
    } else {
        carouselEffect = false
        clearInterval(interval);
        carouselEffectBtn.innerHTML = 'Start Carousel'
    }
}
