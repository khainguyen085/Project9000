const sum = a => a.reduce((a, e) => a + e);
const diag = m => m.map((row, i) => row[i]);
const rotate = m => 
  m.map((_, i) => m.map((_, j) => m[j][i]).reverse())
;
const isMagic = square => {
  const targetSum = square.length && sum(square[0]);
  const valid = a => sum(a) === targetSum;
  const rotated = rotate(square);  
  const flat = square.flat();
  return new Set(flat).size === flat.length &&
    square.every(valid) &&
    rotated.every(valid) &&
    valid(diag(square)) &&
    valid(diag(rotated))
};

[
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  [
    [8,1,6],
    [3,5,7],
    [4,9,2]
  ],
  [
    [16,3,2,13],
    [5,10,11,8],
    [9,6,7,12],
    [4,15,14,1]
  ],
].forEach(e => console.log(isMagic(e)));