// // synchronous
 console.log("hii");
 console.log("hello1");
 console.log("hello2")

// // asynchronous

 console.log("hello");
setTimeout(function () {
 console.log("he1");

 },2000)

 console.log("he2");

// // constructor

// // type of two constructor
// // 1. class constructor

// // class Home {
// //     constructor(vill,city,state) {
// //         this.city=city
// //         this.state=state
// //         this.vill=vill
        
// //     }
// // }

// // const add = new Home ("bahuara","gorari","bihar")

// // console.log(add);

// // 2.function constructor 

// // function Boy(name,age,gender){
// //     this.name=name;
// //     this.age=age;
// //     this.gender=gender

// // }

// // const allDetails = new Boy ("Ravi",22,"male")
// // console.log(allDetails);


// console.log("h1");
// console.log("h2");
// setTimeout(function(){
//     console.log("h3")
    
    
// }, 0);
// console.log("h4");


// Promise

var pro=new Promise((res,rej)=>{
   if (true){
    return res();
   }else{
    return rej();
   }
})
pro

.then(function(){
    console.log("resolve done");
    

})

.catch(function(){
    console.log("not resolve");
    
})

var chk = Promise((res,rej)=>{
    var n = Math.floor(Map.random()*10)

    if(n<5){
        return res();
    }else{
        return rej();
    }
})

chk.then(function(){
    console.log("below");

    
})
.catch(function(){
    console.log("above");
    

})

