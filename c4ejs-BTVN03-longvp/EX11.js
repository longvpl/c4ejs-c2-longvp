let str_num = prompt('Enter a sequence of number');
let num = str_num.split(',');
for(let i = 0; i < num.length; i++) {
    num[i] = Number(num[i]);
}
let OddNum = [];
let j = 0;
for(let i = 0; i < num.length; i++ ) {
    if(num[i] % 2 == 1) {
        OddNum[j] = num[i];
        j++;
    }
} alert(`${num} => ${OddNum}`);
