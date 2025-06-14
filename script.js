function makeChange(amount) {
  const change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0  
  };

  change.q = Math.floor(amount / 25);
  amount %= 25;

  change.d = Math.floor(amount / 10);
  amount %= 10;

  change.n = Math.floor(amount / 5);
  amount %= 5;

  change.p = amount;

  return change;
}
console.log(makeChange(47));
console.log(makeChange(24));
console.log(makeChange(99));
console.log(makeChange(1));
