// what is Array - Arrays is a datastrcture 

// let a = [38,"Hello",true,undefined,null]


// let a = []
// a = [1,2,3,4,5,6,7]
// console.log(a)



// constrcutor function
// let arr = new Array(0,9,8,7,6,5)
// console.log(arr)


// index 
// let a = [1,2,3,4,5,6,7]
// console.log(a[4])


// Array itration 
// for(let i = 0; i<7; i++){
//     console.log(a[i])
// }

// Print thr Reviser Array 
// let arr = [5,4,3,3,2,1]
// for(let i = 5; i>=0; i--){
//     console.log(arr[i])
// }

// add the Array index 
// let arr = [1,2,3,4,5]
// add the Array
// arr[5] = 45

// replace 
// arr[1] = "two"

// arr[7] = "Hello"
// console.log(arr)


// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i<9; i=i+2){
//     console.log(arr[i])
// }


// let arr = [23,32,34,3,10,434,55,54,52,15]
// for(let i = 0; i<10; i++){
//     if(arr[i]%2==0){
//         console.log("Even",arr[i])
//     }else{
//         console.log("Odd",arr[i])
//     }
// }



// for(let i = 0; i<10; i++){
//     if(arr[i]%2==0 && arr[i]%5==0){
//         console.log(arr[i])
//     }
// }

// let sum = 0
// for(let i = 0; i<10; i++){
//     sum = sum + arr[i]
// }
// console.log(sum)




// let arr1 = []
// for(let i =0; i<8; i++){
//     arr1[i] = i*5
// }
// console.log(arr1)







// Even Number 

// let arr = [32,34,53,32,4,43,54,56,21,57]
// let maxindex = arr.length-1
// for(let i = 0; i<=maxindex; i++){
//     if(arr[i]%2==0){
//         console.log("Even",arr[i])
//     }
// }


// let arr = [32,34,53,32,4,43,54,56,21,57]
// for(let i = 0; i<=arr.length-1; i++){
//     if(arr[i]%2==0){
//         console.log("Even",arr[i])
//     }
// }


// let arr = [32,34,53,32,4,43,54,56,21,57]
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         console.log("Even",arr[i])
//     }
// }


// let arr = [32,34,53,32,4,43,54,56,21,57]
// for(let i = 0; i<=arr.length-1; i++){
//     if(arr[i]%2==0){
//         console.log("Even",arr[i])
//     }
// }




// let arr = [32,-34,53,-32,4,-43,54,-56,21,57]
// let postive = 0
// let negitive = 0

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>0){
//         postive++
//     }else{
//         negitive++
//     }
// }
// console.log(postive)
// console.log(negitive)



// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>=0){
//         console.log("Postive",arr[i])
//     }else{
//         console.log("Negitive",arr[i])
//     }
// }



// let arr = [1,2,3,4,5,6,7,8,9]
// let rev = []
// for(let i = arr.length-1; i>=0; i--){
//     console.log(arr[i])
//     rev[i] = arr[i]
// }
// console.log(rev)


// let arr = [1,2,3,4,5,6,7,8,9]
// let rev = []
// let index = 0
// for(let i = arr.length-1; i>=0; i--){
    // console.log(arr[i])
//     rev[index] = arr[i]
//     index++
// }
// console.log(rev)



// find the Maxnumber 
// let arr = [43,43,45,34,34,-33,4,43,-40,-102,100]
// let max = arr[0] // you also user number 0 Zero with positive number
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > max){
//     max = arr[i]
// }}
// console.log(max)






// let arr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let prime = []
// let index = 0
// for(let i = 0; i<arr.length; i++){
//     let count = 0
//     for(let j = 2; j<arr[i] ;j++){
//         if(arr[i]%j==0){
//             count++
//         }
//     }
//     if(count==0){
//         prime[index] = arr[i]
//         index++
//     }
// }
// console.log(prime)





// let arr = [1,2,3,4]
// let temp = arr[0]
// arr[0] = arr[arr.length-1]
// arr[arr.length-1] = temp
// console.log(arr)









// let arr = [1,2,3,3,1,2,3,4,5,6,7,4,3,5]
// let target = 1
// let count = 0
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == target){
//         count++
//     }
// }
// console.log(count)




let arr = [1,2,3,1,2,4,5,3,4,6,7,8,3,9,5,10]
let ans = []
let index = 1
ans[0] = arr[0]
for(let i = 0; i<arr.length; i++){
    let count = 0;
    for(let j = 0; j<ans.length; j++){
        if(arr[i] == ans[j]){
            count++
        }
    }
    if(count == 0){
        ans[index] = arr[i]
        index++
    }
}
console.log(ans)



