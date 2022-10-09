let set1 = [12, 13, 6, 10]
let set2 = [13, 10, 16, 15]
// solution1
// const solve = (set1 , set2) => {
//     let newarr =[]
    
//     for(let i = 0;  i<set1.length; i++ ){
//         let arr1 = set1[i]
//        for (let j = 0; j<set2.length; j++){
//             let arr2 = set2[j]
//             if( arr1 == arr2){
//                 newarr.push(arr2)
//             }
//        }
       
//     }
//     const sum = newarr.reduce((partialSum, a) => partialSum + a, 0);
// return sum
    
// }
// solution2
function calc(ans){
  let cat = 0
  for(var k in ans){
    cat += ans[k]
  }
  return cat
}
function determine( set1 , set2){
     let newarr=[]
     for(const number of set1){
        for(const item of set2){
            if(number == item){
                newarr.push(item)
            }
        }
     }
     
     return calc(newarr)
}


// soltion1 argument
// console.log(solve([12, 13, 6, 10, 11], [13, 10, 16, 15, 11]))

// solution2 argument
console.log(determine([12, 13, 6, 10, 11], [13, 10, 16, 15, 11]))