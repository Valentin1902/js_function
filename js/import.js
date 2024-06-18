export function sum (arr){
let result = 0;
for ( const number of arr ){
result += number;
}
return result;
}


export function average (arr){
    let result = 0;
    for(const number of arr){
        result += number
        result /= arr.length;

    }
    return Math.round(result);
}


export const importArray = "Import name";