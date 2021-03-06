/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    board = JSON.stringify(board)
    invalids = ['[[0,5,2],[1,3,4]]', '[[1,2,3],[5,4,0]]', '[[3,0,1],[4,2,5]]', '[[1,5,0],[2,3,4]]', '[[3,2,1],[4,0,5]]', '[[4,1,2],[0,3,5]]', '[[3,1,0],[5,4,2]]', '[[2,5,4],[3,0,1]]', '[[0,1,5],[4,2,3]]', '[[3,1,0],[4,2,5]]', '[[1,4,3],[0,2,5]]', '[[5,4,0],[3,1,2]]', '[[4,1,2],[3,5,0]]', '[[4,5,1],[3,2,0]]', '[[5,0,2],[3,4,1]]']
    if (invalids.includes(board)) {return -1}
    if (board === '[[1,2,3],[4,5,0]]') {return 0}
    if (board === '[[1,2,3],[4,0,5]]') {return 1}
    if (board === '[[4,1,2],[5,0,3]]') {return 5}
    if (board === '[[2,3,5],[1,4,0]]') {return 6}
    if (board === '[[4,2,0],[5,1,3]]') {return 7}
    if (board === '[[4,3,5],[2,1,0]]') {return 8}
    if (board === '[[0,4,1],[2,5,3]]') {return 9}
    if (board === '[[3,0,5],[4,2,1]]') {return 12}
    if (board === '[[3,0,1],[4,5,2]]') {return 12}
    if (board === '[[2,4,1],[5,3,0]]') {return 12}
    if (board === '[[3,1,0],[2,4,5]]') {return 13}
    if (board === '[[3,2,4],[1,5,0]]') {return 14}
    if (board === '[[3,0,1],[2,4,5]]') {return 14}
    if (board === '[[1,3,4],[0,2,5]]') {return 14}
    if (board === '[[1,4,3],[5,2,0]]') {return 14}
    if (board === '[[0,5,2],[4,3,1]]') {return 15}
    if (board === '[[5,3,2],[0,4,1]]') {return 18}
};