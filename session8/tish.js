let timeSheetData = [
    {
        Project: 'Learn front-end',
        Task: 'Learn HTML',
        TimeSpent: 6,
    },
    {
        Project: 'Learn front-end',
        Task: 'Learn CSS',
        TimeSpent: 8,
    },
    {
        Project: 'Learn front-end',
        Task: 'Learn JS Variaables and Data Types',
        TimeSpent: 6,
    },
    {
        Project: 'Learn git',
        Task: 'Learn git basics',
        TimeSpent: 2,
    }
]
let tb = document.getElementById('tbl');
console.log(tb);
let t1 = document.getElementById('t1');
console.log(t1);
t1.textContent = '';
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
document.getElementById('bt').addEventListener('click', function() {
    document.getElementById('tbb').insertAdjacentHTML('beforeend',
    `<tr>
    <td>${inp1.value}</td>
    <td>${inp2.value}</td>
    <td>${inp3.value}</td>
    <td><button class="cl">X</button></td>
    <td><button>U</button></td>
    </tr>`
    );
});
let del = document.getElementsByClassName('cl');
for(let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', function(){
        let dlt = document.getElementsByTagName('tr');
        dlt[i+1].remove();
    })
}