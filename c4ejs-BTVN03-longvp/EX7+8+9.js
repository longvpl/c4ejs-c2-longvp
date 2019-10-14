let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger'
    },
    {
        name: 'VSmart Active 1 ',
        brand: 'VSmart',
        price: 5287,
        color: 'Black',
        category: 'Phone',
    },
    {
        name: 'IphoneX',
        brand: 'Apple',
        price: 21409,
        color: 'Gray',
        category: 'Phone',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
    }
];
// EX8:
// for(let i = 0; i < products.length; i++) {
//     console.log(`----------------------\nName: ${products[i].name}\nPrice: ${products[i].price} `);
// }


// EX9:
// let cate = prompt('Enter your category?');
// if(cate == 'charger') {
//     console.log(`-------------------------\nName: ${products[0].name}\nPrice: ${products[0].price}`);
// } else if(cate == 'phone') {
//     for(let i = 1; i < 4; i++) {
//         console.log(`----------------------\nName: ${products[i].name}\nPrice: ${products[i].price}`);
//     }
// }