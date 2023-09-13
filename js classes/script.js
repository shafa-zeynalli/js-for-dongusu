// class User{
//     constructor (name , password){
//         this.name =name
//         this.password = password
//     }
//     getName(){
//         return this.name
//     }
//     getPassword(){
//         return this.password
//     }
//     login(){
//         if(this.name==='Rasad' && this.password==='123'){
//             return true
//         }else{return false}

//     }
// }

// let user = new User("Rasad","123");

// console.log(user)
// console.log(user.getName())
// console.log(user.getPassword())
// console.log(user.login())

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
// const rectangle = { Width: 20, Height: 10, Area: 200 };
// const arr = [1, 5, 3, 7,2, 45, 23]
// countries dizisini forEach ile ayrıştırma
// countries.forEach(([country, capital]) => {
//   console.log(`Ülke: ${country}, Başkent: ${capital}`);
// });

// // rectangle nesnesini forEach ile ayrıştırma
// Object.entries(rectangle).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// arr.sort((a,b)=> a-b)
// console.log(arr)

// const array = [1, 2, 2, 3, 4, 6, 4, 8]

// function findDublicate(arr){
//     const mySet = new Set();
//     const arr1=[]

//     arr.map(a => {
//         if(mySet.has(a)){
//             arr1.push(a)
//         }
//         mySet.add(a)
//     })
//     console.log(mySet)
//     console.log(arr1)
// }
// findDublicate(array)



function findDublicate(sentence, word) {
    const word1 = sentence.split(" ");
    const mySet = new Set();
    const arr1 = new Map()
    var currentArray 
    var y=[]

    word1.map((a) => {
        if (mySet.has(a)) {
            arr1.set(a);
        }
        mySet.add(a);
    }); 
    
    for(index of arr1){
        currentArray = arr1[index] 
        currentArray = word1.reduce(
            (counter, currentWord) =>
            index[0] === currentWord ? counter + 1 : counter,
            0 
        );
        arr1.set(index[0], currentArray)
        // console.log(`${word1} icinde ${currentArray} eded ${x} var `) 
        y.push(currentArray)
        y.sort((a,b)=>b-a)  
    }

    for(i of arr1 ){ 
        if(i[1] === y[0]){
        console.log(`en cox ${i[0]} ededi isledilib, ${y[0]} denedi`) 
        }
    }
    console.log( arr1 )






///////// Taskin basqa usulu ////////////////////




    // const obj = {};
    // var y = [];
    // word1.forEach(element => { 
    //     obj[element] =  (obj[element] || 0) + 1;
        
    // });

    // Object.keys(obj).forEach(key =>{  
    //    y.push(obj[key])
    // })  
    // y.sort((a,b)=>b-a)
    // Object.keys(obj).forEach(key =>{   
    //         if(obj[key] === y[0]){
    //             console.log(`en cox ${key} ededi isledilib, ${obj[key]} denedi`)
    //         } 
    // }) 
    // console.log(obj);
}
// findDublicate("1 4 5 5 4 5 5 5 5 6 7 8 3 2 2 2 2 2 2 2 2 2 2 4 3 2 1 4 1 1 1");



function armstrong(num1, num2){
    var digit=0
    for(let i=num1; i<=num2; i++){
        var reverse=[]
        var sum=0
        var n=i
        while(n>0){
            digit = n%10 
            reverse.push(digit)
            n = Math.floor(n/10)
        }
        reverse.map(a=>{
            sum+=a**reverse.length
        })
        if(sum===i){
            console.log(i)
        }
         
    }
     
    
    // console.log(3**3+7**3)

}
armstrong(1,2000)