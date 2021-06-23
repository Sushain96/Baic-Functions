let array = [1,21,12,21,21,21,22,12,12,12,12,15,4,54,52,54,21,21,2];
let firstLargest = array[0];
let secondLargest = array[0];
for(let i = 1; i < array.length; i++ ){
    if  (firstLargest < array[i]){
        secondLargest = firstLargest
        firstLargest = array[i];
    } if ( secondLargest < array[i] && array[i] < firstLargest){
        secondLargest = array[i];
    }
} 
console.log(firstLargest);
console.log(secondLargest);