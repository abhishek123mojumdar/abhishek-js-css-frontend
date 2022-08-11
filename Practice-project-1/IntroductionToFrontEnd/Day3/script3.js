let p = document.getElementById('showResult')
console.log(p)

let radio = document.getElementsByName('fav_language').forEach(radio => {
    radio.addEventListener('click',(e)=> {
        p.innerHTML = e.target.value
    })
})
//console.log(radio)