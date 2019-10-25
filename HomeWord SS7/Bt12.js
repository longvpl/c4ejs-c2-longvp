let items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);
let menu = document.getElementById('mi');
console.log(menu);
for(let i = 0; i < 3; i++) {
    menu.insertAdjacentHTML(`beforeend`, `<li><h3><span>${items[i]}</span><button id="rmv">Remove</button></h3></li>`)
}
document.getElementById('t1').remove();
document.getElementById('t2').remove();
let clk = document.getElementById('but');
let ni = document.getElementById('inp');
let rmv = document.getElementById('rmv');
clk.addEventListener('click', () =>{
    console.log('Add button clicked');
    console.log(`${ni.value}`);
    items[items.length] = ni.value;
    console.log(items);
})
for(let i = 0; i < 3;i++) {
    rmv.addEventListener('click',()=> {
        console.log('Remove');
    })
}