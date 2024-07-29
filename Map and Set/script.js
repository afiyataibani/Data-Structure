/*
---> Map:-
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

let mapp = new Map();

mapp.set("key1", "value1");
mapp.set("key2", "value2");
mapp.set("key3", "value3");
mapp.set("key4", "value4");

console.log(mapp.get("key1"));
console.log(mapp.has("key1"));
console.log(mapp.delete("key4"));

// mapp.clear()

mapp.forEach((itemm) => {
  console.log(itemm);
});

/*
---> Set:-
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size - returns the current element count.
*/

let setting = new Set();

setting.add("Afiya");
setting.add(7);
setting.add(9);
setting.add(5);
setting.add(0);

setting.delete(0);

let result = setting.has("Afiya");

// setting.clear()

setting.forEach((item) => {
  console.log(item);
});

console.log(result);
