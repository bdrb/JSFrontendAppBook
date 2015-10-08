var myMap = {
  "q we": "a sd",
  "r ty": "f gh",
  "u io": "j kl"
};

myMap["p []"] = "z xc";

delete myMap["p []"];
delete myMap["v bn"];

if("v bn" in myMap){;}

var i = 0; key = "", keys = [];
keys = Object.keys(myMap);
for(i = 0; i < keys.length; i++){
  key = keys[i];
  console.log(key, myMap[key]);
}

Object.keys(myMap).forEach(function(key) {
  console.log(myMap[key]);
});