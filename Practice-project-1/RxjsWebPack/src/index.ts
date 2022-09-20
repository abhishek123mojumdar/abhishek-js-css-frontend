import { Observable , fromEvent ,throttleTime ,filter } from 'rxjs';

let getFromEventBTN = document.getElementById('getFromEvent')
let subscription  = Observable.create((observer:any) => {
    let arr = [1,2,4,5,67,8,90]
    observer.next(arr)
}).subscribe((data:any) => {console.log(data)})

