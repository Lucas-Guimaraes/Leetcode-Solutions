var dailyTemperatures = function(temperatures) {
    arr = []
    for (let i = 0; i < temperatures.length; i++){
        arr.push(0)
        for (let j = i+1; j < temperatures.length; j++){
            if (temperatures[j] > temperatures[i]){
                arr[i] = j-i; break
            }
        }
    }
    return arr
};