x = document.getElementById('num');
clk1 = document.getElementById('bt+');
clk2 = document.getElementById('bt-');
let y = Number(x.textContent)
clk1.addEventListener('click', () => {
    y += 1;
    x.textContent = `${y}`;
});
clk2.addEventListener('click',() => {
    y -= 1;
    x.textContent= `${y}`;
})