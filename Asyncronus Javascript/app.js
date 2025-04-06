// console.log("one");
// console.log("two");
// console.log("three");



// setTimeout(()=>{
//     console.log("helo");
// },6000)

//callback hell

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//         getNextData();
//         }
//     },3000)
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// });



// Promises

// let promise=new Promise((resolve,reject)=>{
// console.log("this is aa Proimise");
// reject("xxx");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success")
//         if(getNextData){
//         getNextData();
//         }
//     },3000)
// })
// }

// const getPromise=()=>{
//   return new Promise((resolve,reject)=>{
// console.log("this is aa Proimise");
// reject("network error");
// })
// }


// let promise=getPromise()
// promise.then((res)=>{
//     console.log("promise Fullfilled",res)
// })
// promise.catch((err)=>{
//     console.log("rejected",err)
// })



// function asyncfunc1(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log("data 1");
// resolve("success");
// },3000);
//   });
// }

// function asyncfunc2(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log("data 2");
// resolve("success");
// },3000);
//   });
// }

// console.log("fetching data 1....")

// asyncfunc1().then((res)=>{
 
// console.log("fetching data 2....")
// asyncfunc2().then((res)=>{
  
// })
// })







// Async-Await


// async function hello() {
//   console.log("hello");
// }

function api(){
  return new Promise((resolve,reject)=>{
   setTimeout(() => {
    console.log("data")
    resolve(200)
   }, 2000);
  })
}

async function getData() {
  await api()
}