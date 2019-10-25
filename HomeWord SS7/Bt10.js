function wish() {
    let name = prompt("User's name?");
    let dream = prompt('Your dream?');
    if(dream.length == 0) {
        alert(`${name} \nT la nguoi thuc te`);
    } else {
        alert(`${name}\n T muon ${dream} vao nam 2019`);
    }
}