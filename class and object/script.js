// const student={
//     marks:55,
//     fullName:"aman don",
//     printMarks:function(){
//         console.log("marks=",this.marks)
//     },
// };


// const emp={
//     calcsal()
//     {
//         console.log("salary inc");
//     },
// };
// const sanju={
//     salary:2,
// };
// sanju.__proto__=emp;



// class car{
//     constructor(brand){
//         console.log("crearing new object")
//         this.brand=brand;
//     }
//     start(){
//         console.log("start");
//     }

// stop(){
//     console.log("stop");
// }}

// let curv=new car("curv");


////INTERHITNACE

class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{

}
let  obj=new child();