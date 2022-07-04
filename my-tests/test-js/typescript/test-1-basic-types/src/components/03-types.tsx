type ID = number;
type Coords = [number, number];
type ReqStatus = 'request' | 'success' | 'error';
type Cell = 2 | 3 | 4 | 5;

const userId: ID = 5;
const coords: Coords = [12.43433, 32.32535];
const requestStatus: ReqStatus = 'success';
const cell: Cell = 5;

console.log(userId, coords, requestStatus, cell);

export {};
