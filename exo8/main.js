let student = {
    name: "Tony",
    favoritefood: "Pizza",
    city: "Paris",
};

let result = 0;
let values = Object.values(student);

values.forEach((value) => {
 result += value, length
});

console.log(result);

result = 0
result = values.reduce((acc,value) => acc + value.length, result)
console.log(result);

if (result % 2) {
    console.log('impair');
} else {
    console.log('pair');
}