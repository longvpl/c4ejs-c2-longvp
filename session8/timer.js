function jdo() {
    let x = document.getElementById('num').value;
    let y = document.getElementById('stt');
    y.textContent= x;
    let z = setInterval(function () {
        x--;
        y.textContent = x;
        if(x == 0) {
            clearInterval (z);
            y.textContent = "Time's up";
        }
    }, 1000);
    let clk = document.getElementById('but2');
    clk.addEventListener('click', () => {
        clearInterval (z);
        y.textContent = 'Stopped';
    })
}
