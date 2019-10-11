clear();
setshape("rocket");
const colors = ["red", "gray", "blue", "purple", "cyan"];
for( let i = 1; i <= 4; i++) {
  color(`${colors[i]}`);
  for(let j = 0; j < 4; j++) {
    fd(i*30);
    rt(90);
  }
}