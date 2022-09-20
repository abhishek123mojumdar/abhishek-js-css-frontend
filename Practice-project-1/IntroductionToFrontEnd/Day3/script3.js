let p = document.getElementById('showResult')
console.log(p)

let radio = document.getElementsByName('fav_language').forEach(radio => {
    radio.addEventListener('click',(e)=> {
        p.innerHTML = e.target.value
    })
})
//console.log(radio)

// let var const
function check () {
    var a = 10 ; 
    
    if (a === 10 ) {
      let b = 20 ;
      const c =90;
      var d = 88;
      console.log(b)
      console.log(c)
      console.log(d)
    }
  
    console.log(a)
    console.log(d)
    console.log(b)
    console.log(c)
    
  }
  
  check()
  
  // function expression
  let check1 = function  () {
    var a = 10 ; 
    
    if (a === 10 ) {
      let b = 20 ;
      const c =90;
      var d = 88;
      console.log(b)
      console.log(c)
      console.log(d)
    }
  
    console.log(a)
    console.log(d)
    console.log(b)
    console.log(c)
  }
  
  check1()

// call back

  function seeCB (callBack) {
    var a = 10 ; 
    
    if (a === 10 ) {
      let b = 20 ;
      const c =90;
      var d = 88;
      console.log(b)
      console.log(c)
      console.log(d)
    }
  
    console.log(a)
    console.log(d)
    //console.log(b)
    //console.log(c)
    
    callBack(a,d)
    
  }
  
  seeCB(add)
  
  
  function add (n1,n2) {
    console.log('addition --> '+n1+n2)
  } 