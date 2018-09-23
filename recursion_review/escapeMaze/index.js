// Maze Problem
/*
    Write a function escapeMaze(maze,row,col) that searches for a math out of a given 2-D maze
        - Return true of able to escape, false if not
        - You can move 1 square at a time in any of the 4 directions
        - Mark your path along the way
        - Remove bad paths that do not work
        - Do not explore the same path twice
*/

/*
    [0, 0, x],
    [x, 0, x],   [[0,0,'x'],['x',0,'x'],['x',0,0]] = TRUE
    [x, 0, 0]

    [0, 0, x],
    [x, 0, x],   [[0,0,'x'],['x',0,'x'],['x','x',0]] = FALSE
    [x, x, 0]

    [0, x, x],
    [0, x, x],   [[0,'x','x'],[0,'x','x'],[0,0,0]] = TRUE
    [0, 0, 0]

    [0, 0, 0, x, 0],
    [0, 0, x, x, 0],
    [0, 0, x, x, x], [[0,0,0,'x',0],[0,0,'x','x',0],[0,0,'x','x','x'],['x',0,'x',0,'x'],['x',0,0,0,0]] = TRUE
    [x, 0, x, 0, x],
    [x, 0, 0, 0, 0]
*/


function escapeMaze(maze, row = 0, col = 0) {
    if (row === maze.length - 1 && col === maze[0].length - 1) {
        maze[row][col] = 1;
        console.log(maze);
        return true;
    } else if (row < 0 || row === maze.length || col < 0 || col === maze[0].length) {
        return false;
    } else if (maze[row][col] === 'x') {
        return false;
    } else if (maze[row][col] === 1) {
        return false;
    } else {
        maze[row][col] = 1;

        if (
            // top
            escapeMaze(maze, row - 1, col) ||
            // right
            escapeMaze(maze, row, col + 1) ||
            // bottom
            escapeMaze(maze, row + 1, col) ||
            // left
            escapeMaze(maze, row, col - 1)
        ) {
            return true;
        } else {
            maze[row][col] = 0;
            return false;
        }
    }
}

console.log(escapeMaze([
    [0, 0, 0, 'x', 0],
    [0, 0, 'x', 'x', 0],
    [0, 0, 'x', 'x', 'x'],
    ['x', 0, 'x', 0, 'x'],
    ['x', 0, 0, 0, 0]
]));