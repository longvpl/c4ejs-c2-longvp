let names = prompt('Enter a sequence of name');
names = names.split(',');
let ArrNames = [];
for(let i = 0; i < names.length; i++ ) {
    ArrNames[i] = `<${names[i]}>`;
} alert(`${names} => ${ArrNames}`);