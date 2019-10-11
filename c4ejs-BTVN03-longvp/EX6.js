let str = prompt('Enter a squence of Number, separated by commans ","');
var num = str.split(",");
for(let i = 0; i < num.length; i++) {
    num[i] = Number(num[i]);
}
alert(`The smallest number is ${Math.min(...num)}`);