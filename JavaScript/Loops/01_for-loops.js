//! syntax of for 
// for(let i = 0; i<=10; i++){
//     console.log("Vinay",i)
// }

//? Print the table of 2 from 2 to 20
// for(let i = 1; i<=10; i++){
//     console.log(i*2)
// }

// for(let i = 1; i<=20; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }   

//? Print the number from 10 to 1
// for(let i = 10; i>0; i--){
//     console.log(i)
// }


//? Print the even number from 1 to 10
// for(let i = 1; i<=10; i++){
//     if(i%2==0){
//         console.log(i,"Even")
//     }
// }


//? Print the odd number from 1 to 10
// for(let i = 1; i<=10; i++){
//     if(i%2 != 0){
//         console.log(i,"Odd")
//     }
// }

// for(let i = 1; i<=10; i++){
//     if(i%2==1){
//         console.log(i,"Odd")
//     }
// }


//? Find the sum of numbers from 1 to 10
// let sum = 0
// for(let i = 1; i<=10; i++){
//     sum = sum + i
// }
// console.log(sum)

//? ap formula of sum 1 to 10
// let num = 10
// let ans = num*(num+1)/2
// console.log(ans)


//? Find the multiply of numbers from 1 to 10
// let multiply = 1
// for(let i = 1; i<=5; i++){
//     multiply = multiply * i
// }
// console.log(multiply)


//? Print multiples of 3 and 5 up to 100
// for(let i = 0; i<=100 ;i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

// for(let i = 0; i<=100 ;i++){
//     if(i%5==0){
//         console.log(i)
//     }
// }


//? Print divisible of 3 and 5 up to 100
// for(let i = 1; i<=100; i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }
// }

// ? Print all prime numbers between 1–100
// let count = 0
// let num = 151
// for(let i = 2; i<num; i++){
//     if(num%i==0){
//         count++
//         break
//     }
// }
// if(count>0){
//     console.log("Not Prime")
// }else{
//     console.log("Prime")
// }




// let i;
// let num = 25
// for(i = 2; i<num; i++){
//     if(num%i==0){
//         break
//     }
// }
// if(i == num-1){
//     console.log('Prime')
// }else{
//     console.log("Not Prime")
// }





//! come to this Question after do pattern Question first  
//! Without 2 Number Prime cheak
// let num = 100
// for(let i = 3; i<num; i++){
//     let count = 0
//     for(let j = 2; j<i ;j++){
//         if(i%j==0){
//             count++
//             break
//         }
//     }
//     if(count == 0){
//         console.log('Prime',i)
//     }
   
// }


// let num = 100
// for(let i = 2; i<=num; i++){
//     let count = 0
//     for(let j = 2; j<=i ;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count <= 1){
//         console.log('Prime',i)
//     }   
// }




// for of loops Array
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(hello of arr){
//     console.log(hello)
// }

// for in loops Object
// let obj = {
//     name : "vinay",
//     age : 21,
//     city : "delhi",
//     country : "Inda"
// }

// for(hello in obj){
//     console.log(hello,obj[hello])
// }