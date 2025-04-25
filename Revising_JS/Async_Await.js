// const p1 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("p1 is resolved")
//         }, 3000);
// })

async function handlepromise(){
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
    // console.log("end of async function")
}


console.log(handlepromise())


