//RXJS is actually used for 

import { Observable , fromEvent ,throttleTime ,filter, observable } from 'rxjs';

//let getFromEventBTN = document.getElementById('getFromEvent')


//Streams are value or events that are emitted over a time , eg: users chatting in a chatroom 

// Observable is something that is facilitates this stream of data
// It helps us to emit the value and also react to the emitted value
// Observables are something that emit data over a period of time , Whenever there is a change in data we will always get the updated value . 
// Observables need to be subscribed then only we can get some DataTransfer.
// Observer will have 3 methods  --> next , complete and error

//let obs = Observable.create(()=>{}) 
// Observale.create is the way of creating an observable which accepts a single argument which is a subscribe function ,
// The subscribe function accepts and observer argument  

// -------------------------------------------- This is a cold observable ---------------------------------------------
// In this case the producer of the observable is activated once the observable is subscribed

let obs = Observable.create((observer:any)=> {
    try {
        observer.next('Here we are')
        observer.next('We are learning Rxjs')
        // setInterval(()=> {
        //     observer.next('Its Fun')
        // },2000)
        // observer.complete()
        // observer.next('We can not emit any data from observable once it is completed')
    } catch {
        observer.error('Some problem was encountered')
    }
   
})



let sub = obs.subscribe((data:any) => {
    createData(data)
}, (err : any) => {
    alert('An Error occured')
},()=> {
    console.log('Observable is complete')
})

setTimeout(()=>{
    sub.unsubscribe() // we can unsubscribe the subscription of any observable which will inturn stop the monitoring of stream of Data
},8000)

function createData(data:any) {
    let li = document.createElement('li')
    let text  = document.createTextNode(data)
    li.appendChild(text)
    document.getElementById('list')?.appendChild(li)
    
}