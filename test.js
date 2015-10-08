//
var a = [1,2,3];

a[8] = 1;
a[5]

for(i in a)
   console.log(i);

a.length

var i = 0;
for(i = 0; i < a.length;i++){
  console.log(i, a[i]);
}

a.forEach(function(elem) {
  console.log(elem);
});