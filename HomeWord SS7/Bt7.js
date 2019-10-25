let tit = document.getElementsByTagName('Button');
console.log(tit);
tit[0].addEventListener('click', (e) => {
    e.target.style.color = 'red';
});
console.log(tit[0]);
tit[1].addEventListener('click', (e) => {
    e.target.style.color = 'brown';
});
console.log(tit[1]);



let doc = document.getElementsByTagName('input');
doc[0].addEventListener('keydown', (e) =>{
    e.target.style.color = 'violet';
})