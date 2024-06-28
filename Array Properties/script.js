var data1 = [1, 2, 3, 4, 5];
var data2 = [6, 7, 8, 9, 10];
var data3 = [];

// INSERTING
var index = 3;
var value = 100;
for (var i = data1.length - 1; i >= 0; i--) {
  if (i >= index) {
    data1[i + 1] = data1[i];
    if (index == i) {
      data1[i] = value;
    }
  }
}

console.log(data1)

// DELETING
var deleteData = 2
for (var i = deleteData; i < data1.length - 1; i++) {
    data1[i] = data1[i + 1]
}

data1.length = data1.length - 1
console.log(data1)

// LINEAR SEARCHING
let max = 5
var index = undefined

for(var i = 0; i < data1.length; i++){
    if(max === data1[i]){
        index = i
        break
    }
}
console.log(index)

// MERGING
for (var i = 0; i < data1.length; i++) {
  data3[i] = data1[i];
}

/*
loop 1 : 
  i = 0 
  i<data1.length => 0 < 5 true
  data3[0] = data1[0]
  i++ => i = 1

loop 2 : 
  i = 1 
  i<data1.length => 1 < 5 true
  data3[1] = data1[1]
  i = 2

loop 3 : 
  i = 2 
  i<data1.length => 2 < 5 true
  data3[2] = data1[2]
  i = 3
  
loop 4 : 
  i = 3 
  i<data1.length => 3 < 5 true
  data3[3] = data1[3]
  i = 4

  
loop 5 : 
  i = 4 
  i<data1.length => 4 < 5 true
  data3[4] = data1[4]
  i=5

loop 6 : 
  i = 5  
  5<5 false
*/

for (var i = 0; i < data2.length; i++) {
  data3[data1.length + i] = data2[i];
}

/*
loop 1 : 
  i = 0
  i<data1.length => 0 < 5 true
  data3[5] = data1[0]
  i++ => i = 1

loop 2 : 
  i = 1 
  i<data1.length => 1 < 5 true
  data3[6] = data1[1]
  i = 2

loop 3 : 
  i = 2 
  i<data1.length => 2 < 5 true
  data3[7] = data1[2]
  i = 3

loop 4 : 
  i = 3 
  i<data1.length => 3 < 5 true
  data3[8] = data1[3]
  i = 4


loop 5 : 
  i = 4 
  i<data1.length => 4 < 5 true
  data3[9] = data1[4]
  i=5

loop 6 : 
  i = 5  
  5<5 false
*/

console.log(data3);
