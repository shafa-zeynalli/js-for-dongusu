// **Kolay Səviyyə:** 
// Task1

const array1=new Set([1, 5, 6, 3, 32, 45, 23, 13, 21])
const array2= new Set([8, 9, 34, 54, 67, 6, 7, 0, 8, 3])

function concatArr(arr1, arr2){
    var a = new Set([...arr1, ...arr2]);
    console.log('//////////////////////////////////Task 1')
    console.log(a)
}
concatArr(array1, array2)


// Task2


const string = 'bacdsfxrdzvewythq27687900-=0-0yr12040-r/;jnfjlm,./l,l,//.,lvldmp[lpuygdbcnal'

function stringArr(str){
    var d = str.split('')
    var e = new Set();
    for(let i=0; i< d.length; i++){
        e.add(d[i])
    }
    console.log('\n//////////////////////////////////Task 2')

    console.log(e)
}
stringArr(string)




// Task3 task 1in eynisidi

// Task4  
const arrA=[1, 5, 6, 3, 32, 45, 23, 13, 21]
function max(arr){
    var c = arr.sort((a,b)=> b-a)
    var b = new Set ([...c])
    console.log('\n//////////////////////////////////Task 4')

    console.log(b)
    console.log([...b][0])
}
max(arrA)




// Task5
//**Orta Səviyyə:**

const arrayB=new Set([1,12, 5, 8, 7, 0,  67,6, 3, 32, 45, 23, 13, 21])
const arrayC= new Set([8, 1, 3, 4, 67, 6, 7, 0, 8, 9, 12, 45, 23,13, 12, 21, 3])

function kesisme(arr1, arr2){ 
    let x=arr1.size>arr2.size ? arr1.size : arr2.size

    console.log("xin deyeri",x)
    let y = new Set()
    for(let i=0; i<=x; i++){
        // console.log('arr1 has',arr1.has([...arr2][i]))

        if(arr1.has([...arr2][i])){
            y.add([...arr2][i])  
        }
       
    }
    console.log('\n//////////////////////////////////Task 5')
    console.log(y)
}
kesisme(arrayB, arrayC)



// ### MAPLAR (XƏRİTƏLƏR):
//Task2


function siraObyektlariToMap(obj) {
    const myMap = new Map();

    obj.forEach((item, index) => {
      myMap.set(index, item);
    });

    return myMap;
  }

  const obj = [
    [1,3,4,2,6,7], 
    [15, 7, 8, 9, 56,78],
    [78,5,6,7,23, 45,5],
    ];

  const myMap = siraObyektlariToMap(obj);

  console.log(myMap);



  //Task3
  function wordCurrent(sentence){
    var arr=sentence.trim('').split(' ')
    var array = new Map()

    for(let i in arr){
        array.set(i,arr[i])
        // console.log(array.size)
    }
    console.log('\n'+array.size)
  }
  wordCurrent('       Men bir frontend developerem   ')



//   ### SINIFLAR (CLASSES):
// Task1


class Human{
    constructor(name, old){
        this.name=name,
        this.old=old
    }

    tanit(){
        console.log(`\n menim adim ${this.name}, yasim: ${this.old}`)
    }

}
let human= new Human('Shafa',21)

human.tanit()





//Task2

class Bank{
    constructor(number, human, balans){
        this.number = number,
        this.human = human,
        this.balans = balans
    }
    runMoney(money){
        this.balans+=money
    }
    deleteMoney(money){
        this.balans-=money
    }
    checBalance(){
        console.log(this.balans)
    }
}

let bank = new Bank('234', 'Shafa', 21)

bank.checBalance()
bank.runMoney(25)
bank.checBalance()
bank.deleteMoney(12)
bank.checBalance()




//Task3

class Mehsul{
    constructor(productName, price, ){
        this.productName = productName,
        this.price = price,
        this.quantity = 1
        this.tPrice=0
    }

    totalPrice(miqdar){
        return this.tPrice = miqdar * this.price
    }
}
let mehsul = new Mehsul('qelem', 23)


console.log(mehsul.totalPrice(3))





//Task4

class Dikdortgen{
    constructor(width, height, ){
        this.width = width,
        this.height = height, 
        this.sahe=0
    }

    area(){
        return this.sahe = this.width * this.height
    }
}
let dordbucaq = new Dikdortgen(34, 5)
dordbucaq.area()
console.log(dordbucaq.area())

//Task5






class humanList{
    constructor(){
        this.list =[]
    }
    add(element){
        var arr = new Map()

       arr.set('humanName', element.hName)
       arr.set('job', element.hJob) 
       this.list.push(arr)

    }
    get(element){
        // return this.arr.find(e => e===element )

        for(let index in this.list){
            let isTrue= this.list[index].get('humanName') === element
            // console.log(isTrue1, isTrue2, isTrue3)
            if(isTrue){
                console.log(this.list[index])
            }
        }
    }
    delete(element){
        for(let index in this.list){
            // console.log('this booksun indexi' ,this.books )

            let isTrue= this.list[index].get('humanName') === element

            if(isTrue){
                this.list.splice(index,1)
                // console.log(index)
            }
        }
    }
    changeJob(existingItem, changeItem){
        for(let index in this.list){
            // console.log('this booksun indexi' ,this.books )

            let isTrue= this.list[index].get('humanName') === existingItem

            if(isTrue){
                 this.list[index].set('job', changeItem)
                // this.list.splice(index,1)['']
                // console.log(index)
            }
        }
    }
}

const set = new humanList()

function list(name,job,){
    let y={
        hName: name,
        hJob: job,
    }
    set.add(y)
    console.log(set)
}

list('Shafa', 'Developer')
list('Cebr', 'fvdfv')
list('Biologiya', 'klop;9ol')
list('Kimya', 'kiuik')
list('Fizika', 'werwer')
list('Ana-dili', 'asada')
set.changeJob('Shafa', 'Proqramist')
// set.delete('Cebr')
console.log(set)
//  set.get('Shafa')
