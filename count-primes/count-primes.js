const countPrimes = (n, count = 0, array = []) => {
  for (let i = 2; i < n; i++) {
    if (array[i]) continue
    else count++
    for (let j = i+i; j <= n; j+=i) array[j] = true
  }
  
  return count
};