//Map data structure

const myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("b", 3);
myMap.delete("b", 3);
console.log(myMap.has("a"));
myMap.clear();

for (let [key, value] of myMap) {
  console.log({ key, value });
}
