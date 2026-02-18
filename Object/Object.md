# Objects

### What is a Objects

what is Object - object is a data structure
data structure means where we store multiple datatype in one sigle element

### How to Create a Object

**_Object Literals - {}_**
Object work on key and value pairs
Advantages :Simple 
this is not act as a blue Print 

```JAVASCRIPT
const obj1 = {
    name : "vinay",
    age : 21,
    occupation : 'Developer',
    //Add the Methods 
    getName : function(){
        console.log(`Hello`)
    }
}
console.log(obj1)

***How to Access the Objects***
console.log(obj1["name"])
console.log(obj1.occupation)
obj1.getName()
```


### Constructor Functions
base Blur Print 
what is Constructor Functions - basically ek asa function jo Object ko Construct karna ma help Karaga

Normal Function - camelCasing
for Example - getAge() , addNums(), pintThis()

Constructor - PascalCasing
Constructor function (notice capital first letter)

```JAVASCRIPT
function Person(naam,umar,kaam){
    this.name = naam
    this.age = umar
    this.occupation = kaam
    this.sayHello = function(){
        console.log(`Hello ${this.name}`)
    }
}
//Creating objects using the constructor
const obj1 = new Person("vinay",21,"Developer") //instance's 
const obj2 = new Person("vikas",21,"Graphic Designer") //instance's 
console.log(obj2)
console.log(obj1.name)
obj1.Hello()
console.log(obj1 instanceof Person);   // true
```
Before ES6 - Object Literals {} , Constructor functions 
After ES6 - Class Keywords 

