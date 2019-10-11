const arr = [3, 4, 6, -9, 10, -88, 2];
let num = Number(prompt('Enter a number'));
let index = 0;
for(let i = 0; i < arr.length; i++) {
    if(num == arr[i]) {
        index = i;
    }
}
if(index == 0) {
    alert(`${num} is not FOUND in my array`);
} else {
    alert(`${num} is FOUND in my array at index ${index}`);
}