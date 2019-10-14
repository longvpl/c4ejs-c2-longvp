clear();
setshape('rocket');
penup();
const pos = {
x: 100,
y: 50,
width: 20,
height: 40,
}
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();
color('Gray');

// for(let i = 0; i < 4; i++) {
//     fd(100);
//     rt(90);
// }


for(let i = 0; i < 4; i++) {
    if(i % 2 == 0) {
        fd(pos.height);
    } else {
        fd(pos.width);
    }
    rt(90);
}