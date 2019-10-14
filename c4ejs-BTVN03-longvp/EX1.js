//1.2

const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
    for (let x in product) {
    console.log(`${x}: ${product[x]}`);
    }

    // 1.1 x received is prototypes of 'Product' Object