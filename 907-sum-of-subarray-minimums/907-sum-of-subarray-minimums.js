
const mod = 1e9 + 7;
const sumSubarrayMins = (A) => {
    let n = A.length;
    let res = 0;
    
    for (let i = 0; i < n; i++) {
        let min = A[i];
        for (let j = i; j < n; j++) {
            if (A[j] < min) {
                min = A[j];
                res += min;
            } else {
                res += min;
            }
        }
    }
    
    return res % mod;
};