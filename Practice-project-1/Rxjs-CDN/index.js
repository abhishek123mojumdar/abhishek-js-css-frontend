const { range  } = rxjs;
const { filter, map} = rxjs.operators;

console.log(rxjs)
let obsBtn = document.getElementById('initiateObservable')
let subscription = rxjs.Observable.create((observer)=> {
    observer.next('Hey welcome to RXJS')
})
subscription.subscribe(data => {
    console.log(data)
})


rxjs.fromEvent(obsBtn,'click').throttleTime(1000).subscribe((e)=> {
    console.log(e)
})

