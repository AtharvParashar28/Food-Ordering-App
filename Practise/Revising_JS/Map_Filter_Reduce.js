// REVISION OF MAP, FILTER AND REDUCE

const arr = [10,2,3,4]
const user = [
  {fname : "atharv",lname : "parashar", age : 23},
  {fname : "bat",lname : "man", age : 100},
  {fname : "iron",lname : "man", age : 22},
  {fname : "spider",lname : "man", age : 32},
]

// {23 : 1, 22 : 1, 100:1, 32:1}

let count = user.reduce((acc,curr) => {
  /*
  acc[curr.age] => return 
  True - if curr.age is present in acc
  False - if curr.age is not present in acc
   */
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
  }
  else{
    acc[curr.age] = 1
  }
  return acc
},{})
console.log(count)


let fname_arr_2 = user.reduce((acc,curr) => {
    if(curr.age > 23)
      acc = curr.fname
    return acc
},[])

console.log(fname_arr_2)
let fname_arr = user.map((obj) => obj.fname + " " +obj.lname)

console.log(fname_arr)
console.log(typeof(arr.filter((item) => (item > 1))))
console.log(typeof(arr.map((item) => (item > 1))))

/*
*code to ensure react is working in browsers console-----------------
var script = document.createElement('script');
script.src = 'https://unpkg.com/react/umd/react.development.js';
document.head.appendChild(script);

var scriptDOM = document.createElement('script');
scriptDOM.src = 'https://unpkg.com/react-dom/umd/react-dom.development.js';
document.head.appendChild(scriptDOM);

script.onload = function() {
    console.log(React); // React should now be defined
};
*/