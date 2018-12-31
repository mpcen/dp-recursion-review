// You are at the top left of a mxn grid.
// you can only move right or down, 1 space at a time.
// How many possible ways can you get to the bottom right of the grid?

/**
 * [-1, -1, -1, -1]
 * [-1, -1, -1, -1]
 * [-1, -1, -1, -1]
 * [-1, -1, -1, -1]
 * 
 * [-1, -1, -1,  1]
 * [-1, -1, -1,  1]
 * [-1, -1, -1,  1]
 * [ 1,  1,  1,  1]
 * 
 * work from bottom up starting at m-1, n-1
 * 
 * [-1, -1, -1,  1]
 * [-1, -1, -1,  1]
 * [-1, -1,  S,  1]
 * [ 1,  1,  1,  1]
 * 
 * S = grid[m+1][n] + grid[m][n+1]
 * and so on...
 */


 function numWays(m, n) {
     // create and initialize empty mxn grid
     let grid = [];

     for(let i = 0; i < m; i++) grid.push(new Array(n));
     
     // initialize last col to all 1's
     for(let i = 0; i < m; i++) grid[i][n-1] = 1;

     // initialize last row to all 1's
     for(let i = 0; i < n; i++) grid[m-1][i] = 1;

     // work from bottom up
     for(let i = m-2; i >= 0; i--) {
         for(let j = n-2; j >= 0; j--) {
             grid[i][j] = grid[i+1][j] + grid[i][j+1];
         }
     }

     return grid[0][0];
 }