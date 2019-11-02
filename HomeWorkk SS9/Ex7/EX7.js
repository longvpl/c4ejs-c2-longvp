let API_URL = 'http://quotes.rest/qod.json';
async function Ld() {
    let connect = await fetch(API_URL);
    let content = await connect.json();
    console.log(connect);
    console.log(content);
    let x = document.getElementById('ct');
    x.textContent = content.contents.quotes[0].quote;
    let y = document.getElementById('at');
    y.textContent = content.contents.quotes[0].author;
}
Ld();