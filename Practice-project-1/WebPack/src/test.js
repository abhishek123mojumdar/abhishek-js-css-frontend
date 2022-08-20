import axios from 'axios'

export function testFN () {
    console.log(90)
    return 'We are here to test webback';
}

export function getDadJoke () {
    let headers = {
        headers : {
            Accept : 'application/json'
        }
    }
    let bodyText = document.getElementById('card-body-text')
    axios('https://icanhazdadjoke.com/',headers).then(dadJoke => {
        bodyText.innerHTML = dadJoke.data.joke
    })
}
