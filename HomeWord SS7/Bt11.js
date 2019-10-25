let clk = document.getElementById('but');
console.log(clk);
let name = document.getElementById('inp');
console.log(name);
let res = document.getElementById('res');
console.log(res);
clk.addEventListener('click', () => {
    console.log('Upper it!!! just clicked');
    console.log(`User's name: ${name.value}`);
    console.log(`User's name uppercase: ${inp.value.toUpperCase()}`);
    res.textContent = inp.value.toUpperCase();
})