var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;
  const res = [];

  while (left < right && top < bottom) {
    //traverse through right
    for (let i = left; i < right; i++) res.push(matrix[top][i]);
    top += 1;
    //traverse through down
    for (let i = top; i < bottom; i++) res.push(matrix[i][right - 1]);
    right -= 1;
    if (!(left < right && top < bottom)) break;
    //traverse through left
    for (let i = right - 1; i >= left; i--) res.push(matrix[bottom - 1][i]);
    bottom -= 1;
    //traverse through top
    for (let i = bottom - 1; i >= top; i--) res.push(matrix[i][left]);
    left += 1;
  }
  return res;
};
