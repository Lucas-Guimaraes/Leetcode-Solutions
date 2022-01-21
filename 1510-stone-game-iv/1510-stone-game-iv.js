var winnerSquareGame = function(n) {
    let dp = Array(n + 1);
    for (let i = 1; i <= n; i += 1) {
        for (let j = 1; !dp[i] && j * j <= i; j += 1) {
            dp[i] = !dp[i - j * j]; 
        }
    }  
    return dp[n];
};