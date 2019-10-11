let item = ['Jeans', 'T-shirt', 'Socks'];
while(true) {
let command = prompt('Hi there, welcome to shop admin panel, what do you want?(C, R, U, D)');
if(command == 'C' || command == 'c') {
    item.push(prompt('Enter the new item'));
} else if(command == 'R' || command == 'r') {
    alert('Done');
    alert(item);
} else if(command == 'U' || command == 'u') {
    let i = Number(prompt('Enter the position you want to update'));
    let OtherItem = prompt('Enter the new name');
    item[i] = OtherItem;
} else if(command == 'D' || command == 'd') {
    let j = Number(prompt('Enter the position you want to delete'));
    item = item.splice(j, 1);
} else {
    alert('This command is not supported');
}
}