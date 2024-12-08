let arr = [1,-7,2,-9,11,45,-7];
function invert(arr){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        let calcule= arr[i] * (-1);
        newArr.push(calcule)
    }
    return newArr
}
console.log(arr)
console.log("------------")
console.log(invert(arr))

// Question:
// Write a JavaScript function that takes
// an array of integers and returns a new 
// array where each element is inverted