let arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'coo', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let rn = [];
for(let i = 0; i < arr.length; i++) {
    let re = 1;
    for(let j = 0; j < arr.length; j++) {
        if(i != j && arr[i] == arr[j]){
            re++;
            rn[rn.length] = j;
            arr.splice(j,1);
        };
    };
    console.log(`${arr[i]}: ${re}`);
}