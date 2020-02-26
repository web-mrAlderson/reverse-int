module.exports = function reverse(n) {
  if (n < 0) {
    let str = String(n);
    str = str.substr(1);
    let strReverse = str.split("").reverse().join("");
    n = Number(strReverse);
    return n;
  }
  else {
    let str = String(n);
    let strReverse = str.split("").reverse().join("");
    n = Number(strReverse);
    return n;
  }
}
