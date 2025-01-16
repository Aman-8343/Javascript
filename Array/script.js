let marks=[23,45,3,56,7,74];

// forloop

console.log(marks);
// console.log("length=", marks.length);
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

//for of

// for(let val of marks){
//     console.log(val)
// }


let sum=0;
for(let val of marks){
    sum=sum+val;
}
let avg= sum/marks.length;
console.log("sum=",sum);
console.log("average=",avg)


// marks.push(67,78);

// console.log(marks)
// marks.pop();
// console.log(marks)

// console.log(marks.toString())


// let marks2=[45,6,34,67,56];

// let totalmarks= marks.concat(marks2);
// console.log(totalmarks)