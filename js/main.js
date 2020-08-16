// اعادة البناء الكاىن
/*
const ourclient = {
    name: "ahmed", 
    age: 20,
    city: "beni suef",
    raing: 400,
    ex: 10
}
const {name = "mohamed", age = 23} = ourclient;

console.log(`this is name ${name} and this age is ${age}`);
/* 
    this is name ahmed and this age is 20 // if parms undefined = default value;
*/
/*
const ourclient = {
    name: "ahmed", 
    age: 20,
    city: "beni suef",
    raing: 400,
    ex: 10,
    lang: {
        html: "20%",
        css: "26%",
        js: "67%"
    }
}
//const {name: thename = "mohamed", age: theage = 23, lang: {html,css}} = ourclient;
const {html, css, js} = ourclient.lang;

console.log(`this is name ${html} and this age is ${css} and this language ${js}`);
*/

// اعادة البناء المصفوفة
/*
let arr = ["fruit", "vegatables", "meet", ["handia", "egypt", "beba", ["beni madi"]]]
const [one, two, , [ o1, o2, , [ben]]] = arr
console.log(`i love ${one} and ${two} and ${o1}`);
*/

/*
var book = "video",
    video = "book";

// انه الطريقة العقيمة
var sat = book;
book = video
video = sat;
// انهاء الطريقة الجيدة
console.log(book = video , video = book)

console.log(book);
console.log(video)
*/
// اعادة بناء البارميترز
/*         
        return parms
    }
    */ /*
    our (parms)  {
        return parms
    }
}
console.log(user.our("hello ahmed"))
let fun = () => {
    console.log("this is the new fun")
}
fun();
*/
/* to arrange array and remove repeating elements by new Set() and turn it to array by spread operator */ 
/*
let myarr = [1,2,3,3,4,4,5];
let newArr = new Set(myarr)
console.log(myarr)
console.log(newArr)
console.log([...newArr])
*/
/* // new Set
// set تقوم بحذف العناصر المتكررة بدل من المصفوفة لان المصفوفة لا تقوم بحذف العناصر المتكررة وتمثل كائن ويمكن تحويله الي مصفوفة كالاتي
//set => {}
//array => []
let myset = new Set(["mostafa", "rady", "mohamed", "omar"]);

console.log(myset);
console.log([...myset])
myset.add("a"),
myset.delet("omar"),
myset.clear()
myset.size
myset.has("omar") if condation
*/
/* map */
/*
let mymap = new Map([
    ["d", 10],
    ["fun", function my(){}],
    [10, 20],
    ["bollen", true],
    ["arr", []],
]);
mymap.set("ob", {});
mymap.get("ob")
mymap.has(10)
mymap.keys()
mymap.size;
*/

/*
const arr = [1, 2, 3]
// in array we used of insted of in
for(let num of arr) {
    console.log(num)
}

// console.log(typeof(arr[Symbol.iterator])) 
const ob = {
    name: "ahmed",
    age: 20,
    skill: "html"
}
// IN OBJECT we use in instead of of
for (let b in ob) {
    console.log(ob[b])
} 
let object = {
    user: "medo",
    old: 20,
    fun () {
        console.log(this)

        let my = () => {
            console.log(this)
        }
        my()
    },
    o() {
        console.log("yes")
    }

}
console.log(object.old);
*/
/*
let or = {
    username: "ahmed",
    job: "student"
}
let {username, job} = or;  
for(let num in or) {
    console.log(username)
}
*/

/*
// factory
function newfun(name, age) {
    return {name, age}
}
console.log(newfun("ahmed", 20))
console.log(newfun("mohamed", 18))

// constructor
function NewFun(year, city) {
    this.year = year,
    this.city = city
}
let f = new NewFun(2001, "benisuef")
console.log(f);
*/

/*
function fun(n  = 5, a = 9) {
    console.log(a , n)
}
let os = {
    name: "beni",
    age: 19,
}
let child = {
    cv: "html"
}
os.__proto__ = child;
console.log(os.cv);
console.log(child.__proto__)
*/
/*
function Usser(username, lastname, age, phone) {
    this.username = username;
    this.lastname = lastname;
    this.age = age;
    this.phone = phone;
    this.fullName = this.username + this.lastname;
    this.ageday = function () {
        return `this day ${this.age * 365} `
    }
    this.idenfileage = function () {
        if(age <= 18) return  "you cant show age"; else return `this age ${this.age}`
    }
}
let ob = new Usser("ahmed", "haggag", 19, "010");

console.log(ob.fullName)
console.log(ob.ageday())
console.log(ob.idenfileage())
*/
/*
// creating method in js with prototype
// creat method which neeed to name and say to i love you
String.prototype.rc = function () {
    return `${this} i love you`
}
console.log("ahmed".rc())
creat method in number to discount
Number.prototype.dsct = function (dis) {
    return this - dis;
} 
let num = 5
console.log(num.dsct(2))
*/
/*
class cl {
    constructor (say, t, f) {
        this.say = say;
        this.t = t;
        this.f = f;
    }
    sayhello() {
        return `${this.say} ${this.t} ${this.f}`
    }
}
let ob = new cl("ahmed", "myfrend", "mmmm");
console.log(ob.sayhello())
*/
/*
class user {
    // special class
    static counter = 1;
    // special object
    constructor (username, age, counter) special function  {
        this.username = username;
        this.age = age;
        this.counter = counter; 
    }
    // special class
    static sayhello = function () {
        console.log(user.counter);
    }
}

let ob = new user("ahmed", 19, 25)
console.log(ob.counter)
console.log(user.counter)
*/
// inhertas 
/*
class user {
    // special class
    static counter = 1;
    // special object
    constructor (username, age, counter) {
        this.username = username;
        this.age = age;
        this.counter = counter; 
    }
    // special class
    static sayhello = function () {
        console.log(user.counter);
    }
    heyuser() {
        return `this name is ahmed ${this.username}`
    }
}
class admin extends user {
    static counter = 254;
}
let ob = new admin("ahmed", 19, 25);
console.log(ob.heyuser());
console.log(admin.counter) // 254
*/