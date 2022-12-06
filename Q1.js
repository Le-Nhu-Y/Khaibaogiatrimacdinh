function lastIndexOf(arr, elt, start=4) {
    for (let i = start - 1; i >= 0; i--)
        if (arr[i] === elt){
            return  i
        }
    return -1
}
console.log(lastIndexOf([1, 8, 1, 5], 3))


