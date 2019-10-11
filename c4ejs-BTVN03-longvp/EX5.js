let str = prompt('Enter a squence of Number, separated by commans(,)');
let num = str.split(",");
let sum = 0;
for(let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
}
alert(`The sum of them is ${sum}`);
