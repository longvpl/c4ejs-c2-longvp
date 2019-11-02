function LoDeCoBac(a, b) {
    return Math.floor(Math.random() * 101);
}
const x = LoDeCoBac(0,99);
console.log(x);
if (x < 0) {
    console.log("Failed: the number is smaller than 0");
    } else if (x > 99) {
    console.log("Failed: the number is bigger than 99");
    } else {
    console.log("Passed, bravo");
    }
    