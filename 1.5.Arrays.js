var a = [1,2,3];
a.length //3

a[7] = 8;
a.length //8

var i;
for(i = 0; i < a.length; i ++) {
  console.log(i, " = ", a[i]);
}
// 0 = 1
// 1 = 2
// 2 = 3
// 3 =
// 4 =
// 5 =
// 6 =
// 7 = 8

for (i in a){
  console.log(i);
}
// 0
// 1
// 2
// 7

a.push(9);
a.length //9

i = 1; //pos of elem
a.splice(i, 1);

a.indexOf(3);

a.forEach(function(elem) {
  console.log(elem);
});

// 1
// 3
// 8
// 9

var clone = a.slice(0);