var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const n = num1.length,
    m = num2.length;
  const result = new Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const mul = (num1[i] - "0") * (num2[j] - "0");
      const p1 = i + j,
        p2 = i + j + 1;

      const sum = mul + result[p2];

      result[p2] = sum % 10;
      result[p1] += Math.floor(sum / 10);
    }
  }

  // Convert result array to string
  let resultStr = result.join("").replace(/^0+/, "");
  return resultStr.length ? resultStr : "0";
};
