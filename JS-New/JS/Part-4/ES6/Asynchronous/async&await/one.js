let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
console.log(b);


function test() {
    console.log(this);
  }
  test.call(null);