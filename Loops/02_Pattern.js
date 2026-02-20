//? * * * *
//? * * * *
//? * * * *
//? * * * *
// for(let i = 1; i<=4; i++){
//     for(let i = 1;i<=4; i++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }

//? Print the character Pattern 
//? A B C D 
//? A B C D 
//? A B C D 
//? A B C D 
// for(let i = 1; i<=4; i++){
//     for(let i = 0;i<4; i++){
//         let char = String.fromCharCode(i+65)
//         process.stdout.write(`${char} `)
//     }
//     console.log()
// }


//? 1 2 3 4 
//? 1 2 3 4 
//? 1 2 3 4 
//? 1 2 3 4 
// for(let i = 0; i<4; i++){
//     for(let j = 1; j<5; j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }


//? 1 1 1 1 
//? 2 2 2 2
//? 3 3 3 3
//? 4 4 4 4
// for(let i = 1; i<=4; i++){
//     for(let j = 1; j<=4; j++){
//         process.stdout.write(`${i} `)
//     }
//     console.log()
// }


//? 2 4 6 8 
//? 2 4 6 8 
//? 2 4 6 8 
//? 2 4 6 8 
// for(let i = 1; i<=4; i++){
//     for(let j = 1; j<=4; j++){
//         process .stdout.write(`${j*2} `)
//     }
//     console.log()
// }


// for(let i = 1; i<=4; i++){
//     for(let j = 2; j<=8; j = j + 2){
//         process .stdout.write(`${j} `)
//     }
//     console.log()
// }


//? * 
//? * *
//? * * *
//? * * * *
// for(let i = 1; i<=4; i++){
//     for(let j = 1 ;j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


//? 1 2 3 4 
//? 1 2 3  
//? 1 2 
//? 1 
// for(let i = 4; i>=1; i--){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }


//? 1 
//? 2 3 
//? 4 5 6 
//? 7 8 9 10

// let num = 1
// for(let i = 1; i<=4; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(`${num} `)
//         num++
//     }
//     console.log()
// }


//? * * * * * 
//? * * * *  
//? * * *  
//? * *  
//? *  
// for(let i = 5; i>=1; i--){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }   


//? 1
//? 1 2 
//? 1 2 3 
//? 1 2 3 4 
//? 1 2 3 4 5
// for(let i = 1; i<=5; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }


//? 5 4 3 2 1
//? 5 4 3 2 
//? 5 4 3
//? 5 4 
//? 5 
// for(let i = 1; i<=5; i++){
//     for(let j = 5; j>=i; j--){
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }


//? 1
//? 0 1 
//? 1 0 1 
//? 0 1 0 1 
//! To understand the question make a matrix Even 1 and odd 0
for(let i = 1; i<=4; i++){
    for(let j = 1; j<=i; j++){
        if((i+j)%2==0){
            process .stdout.write("1 ")
        }else{
            process.stdout.write("0 ")
        }
    }
    console.log()
}




//?         *   
//?       * *   
//?     * * *   
//?   * * * *  
//? * * * * *  



//? * * * * *  
//? * * * *  
//? * * * 
//? * *
//? *  
