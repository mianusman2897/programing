const SumMinMax = (arr) => {
    let minCount = 0;
    let maxCount = 0;

    let result = 0;

    if(arr.length===0) return 0; 
    let filtered = arr.filter(item => typeof (item) === "number")
    const minValue = Math.min(...filtered)
    const maxValue = Math.max(...filtered)
    if (minValue === maxValue) return minValue * arr[0];

    filtered.forEach((x) => {
        
        if (x === minValue)
            minCount++;
        if (x === maxValue)
            maxCount++;
    }

    )
    
    result = (minCount * minValue) + (maxValue * maxCount);




    return result;
}

console.log(SumMinMax([]))
console.log(SumMinMax([5]))
console.log(SumMinMax([89, 3, 3, 3, 4]))
console.log(SumMinMax([22, 2, 2, 4, 4, 4,]))
console.log(SumMinMax([2, "string", "y"]))
console.log(SumMinMax([1, 1, 1, 1, 1, 1]))