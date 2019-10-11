let ss = [5,7,300,90,24,50,75];
console.log(`Hello, my name is Long and here is my sheepsize: \n ${ss}`);
console.log(`Now my biggest sheep has size ${Math.max(...ss)}, let's shave it:`);
ss[ss.indexOf(300)] = 8;
console.log(`After shearing, here is my flock:\n ${ss}`);
for(let i = 1; i <= 4; i++){
    for(let i = 0; i < ss.length; i++) {
        ss[i] = ss[i] + 50;
    } 
    console.log(`MONTH ${i} \n One month has, passed, my sheep have grown, here is their size:\n ${ss}`);
}
let sum = 0;
for(let i = 0; i < ss.length; i++) {
    sum += ss[i]
} console.log(`My flock has size in total: ${sum} \n I would get ${sum} * 2$ = ${sum*2}$`);