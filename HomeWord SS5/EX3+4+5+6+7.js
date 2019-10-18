let inventoryByBrand = {

    hp : [
        
        {

            name: 'HP Envy 13aq',
    
            price: 21000,
    
            brand: 'HP',
    
            quantity: 5,
    
        },

        {

            name: 'HP Pavilion',
    
            brand: 'HP',
    
            price: 14000,
    
            quantity: 7,
    
        },
    ],

    dell : [

        {
            name: 'Dell XPS 9370',
    
            price: 30000,
    
            brand: 'Dell',
    
            quantity: 1,
        },

        {
            name: 'Dell Inspiron 3567',
    
            price: 9300,
    
            brand: 'Dell',
    
            quantity: 12,
        },

        {
            name: 'Dell Latitude E5450',
    
            price: 8600,
    
            brand: 'Dell',
    
            quantity: 2,
        },

    ],

    asus : [

        {
            name: 'Asus Zenbook',
    
            brand: 'Asus',
    
            price: 20000,
    
            quantity: 4,
        },

    ],

};

console.log(inventoryByBrand);

let br = prompt('Which brand?');

let prd = ['hp', 'dell', 'asus'];

// for(let i = 0; i < 3; i++) {

//     if(br.toLowerCase() == prd[i]) {

//         let prc = 0;

//         let str = '';

//         for(let j = 0; j < inventoryByBrand[prd[i]].length; j++) {

//             str += `${inventoryByBrand[prd[i]][j].name}\n `;

//             prc += inventoryByBrand[prd[i]][j].price*inventoryByBrand[prd[i]][j].quantity;

//         };

//         alert(` There are ${inventoryByBrand[`${prd[i]}`].length} generations of '${br.toUpperCase()}' in inventory\n\n ${str}\n With total value: ${prc}K`);
//     }

// }

for(let i = 0; i < 3; i++) {

    if(br.toLowerCase() == prd[i]) {

        let prc = 0;

        let str = '';

        for(let j = 0; j < inventoryByBrand[prd[i]].length; j++) {

            str += `${inventoryByBrand[prd[i]][j].name}\n `;

            prc += inventoryByBrand[prd[i]][j].price*inventoryByBrand[prd[i]][j].quantity;

        };

        prc = prc.toString();

        prc = (""+prc).split("");

        console.log(prc);

        prc[prc.length - 3] = `.${prc[prc.length - 3]}`;

        prc = prc.join('');

        console.log(prc);

        alert(` There are ${inventoryByBrand[`${prd[i]}`].length} generations of '${br.toUpperCase()}' in inventory\n\n ${str}\n With total value: ${prc}.000VND`);
    }

}

var n =  123456789;
var digits = (""+n).split("");