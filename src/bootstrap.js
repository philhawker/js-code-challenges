var array1 = [3, 4, 5, 6, 7]
var sum1 = 0


 for (var n = 0; n < array1.length; n++) 
    sum1 += parseInt(array1[n])


console.log(sum1)


const array2 = [3, 4, 9, 3, 5]

function total(arr) {
    if (!Array.isArray(arr)) return;
    let totalNumber = 0, i = -1;
    while (++i < arr.length) {
        totalNumber += arr[i];
    }
    return totalNumber;
}
console.log(total(array2))



