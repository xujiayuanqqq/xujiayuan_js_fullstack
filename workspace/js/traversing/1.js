//Map
let iterable = new Map([["a",1],["b",2],["c",3]]);
for(let [key,value] of iterable) {
    console.log(value);
}

for (let key of iterable) {
    console.log(key);
}