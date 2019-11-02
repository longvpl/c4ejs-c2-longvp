function KC(x,y,z,t) {
    return Math.sqrt(Math.pow((x - z),2) + Math.pow((y - t),2));
}
let d = KC(3,0,10,6);
console.log(d);
if (d !== 5) {
    console.log("Failed: the calculation is wrong");
    } else {
    console.log("Passed, bravo");
    }
