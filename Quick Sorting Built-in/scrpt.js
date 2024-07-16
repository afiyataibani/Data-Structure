let quickSort = (arr) => {
    if (arr.length <= 1) return arr

    let pivot = arr[0]
    let leftArray = []
    let rightArray = []

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            leftArray.push(arr[i])
        } else{
            rightArray.push(arr[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];

}

console.log(quickSort([12, 25, 78, 24, 45, 7, 36]))