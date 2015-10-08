var l = [1,0,9,3,5,6,4];

l.sort(function(x,y) {
  return x - y;
});


var list = [[2,1],[1,4],[1,2],[2,2]];
list.sort(function(x, y) {
  return ((x[0] === y[0]) ? x[1] - y[1] : x[0] - y[0]);
});

//--------------

var a = 1;
function f1(b) {
  return function (c) {
    return a + b + c
  }
}

var f2 = f1(2);

f2(3); //6

a = 4;

f2(3); // 9

//--------------