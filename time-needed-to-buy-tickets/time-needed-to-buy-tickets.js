var timeRequiredToBuy = function(tickets, k) {
    i = 0; count = 0; len = tickets.length-1
    while (tickets[k] > 0) {if (tickets[i] > 0) {count += 1; tickets[i] -= 1}; i = i === len ? 0 : i+1}
    return count
};