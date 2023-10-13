let a = "Jean"
let b = "Paul"

function checkName (Name1, Name2) {
    if (Name1 == Name2) {
        return true;
    } else {
        return false;
    }
}
let result = checkName(a, b);
console.log(result);