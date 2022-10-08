let set1 = [12, 13, 6, 10]
let set2 = [13, 10, 16, 15]

const solve = (set1 , set2) => {
    let newarr =[]
    
    for(let i = 0;  i<set1.length; i++ ){
        let arr1 = set1[i]
       for (let j = 0; j<set2.length; j++){
            let arr2 = set2[j]
            if( arr1 == arr2){
                newarr.push(arr2)
            }
       }
       
    }
    const sum = newarr.reduce((partialSum, a) => partialSum + a, 0);
return sum
    
}
console.log(solve([12, 13, 6, 10, 11], [13, 10, 16, 15, 11]))