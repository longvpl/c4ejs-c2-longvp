function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise is da best");
        }, 5000);
    });
}
async function b() {
    let str = await a();
    console.log(str);
}
b();
a().then(b());
