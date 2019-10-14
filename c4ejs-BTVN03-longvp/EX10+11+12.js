const products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
        providers: ['Phukienzero, Dientuccc']
    },
    {
        name: 'VSmart Active 1 ',
        brand: 'VSmart',
        price: 5287,
        color: 'Black',
        category: 'Phone',
        providers: ['Tgdd','Ddghn','VhStore'],
    },
    {
        name: 'IphoneX',
        brand: 'Apple',
        price: 21409,
        color: 'Gray',
        category: 'Phone',
        providers: 'Tgdd',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
        providers: 'Tgdd'
    }
];
for(let i = 0; i < products.length; i++) {
    console.log(`------------------\n#${i+1}. ${products[i].name}\n    Price:${products[i].price}\n    Provider: ${products[i]['providers']}`);
}

// EX10+11:
// let posi = Number(prompt('Enter product position'));
// for(let i = 1; i < 5; i++) {
//     if(posi == i) {
//         console.log(`Name: ${products[i-1].name}\nBrand: ${products[i-1].brand}\nPrice: ${products[i-1].price}\nColor: ${products[i-1].color}\nCategory: ${products[i-1].category}`);
//     }
// }

//EX12:
let pro = prompt('Enter provider');
for(let i = 0; i < products.length; i++) {
        if(products[i].providers.indexOf(`${pro}`) != -1) {
            console.log(`------------------\n#${i+1}. ${products[i].name}\n    Brand:${products[i].brand}\n    Price:${products[i].price}\n    Color:${products[i].color}\n    Category:${products[i].category}\n    Provider: ${products[i]['providers']}`);
        }
}