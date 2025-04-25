const P1 = new Promise((function(resolve,reject) {
    let flag = false
    if(flag){
        setTimeout(()=>resolve("Fulfilled"),1000)
    }
    else{
        setTimeout(()=>reject("error"),1000)
    }
}))

const P2 = new Promise((function(resolve,reject) {
    let flag = true
    if(flag){
        setTimeout(()=>resolve("Fulfilled"),5000)
    }
    else{
        setTimeout(()=>reject("error"),5000)
    }
}))

const P3 = new Promise((function(resolve,reject) {
    let flag = true
    if(flag){
        setTimeout(()=>resolve("Fulfilled"),5000)
    }
    else{
        setTimeout(()=>reject("error"),5000)
    }
}))

Promise.all([P1,P2,P3]).then(result => console.log(result)).catch(error => console.log(error))




