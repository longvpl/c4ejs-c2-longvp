const myAPI = 'https://sheetdb.io/api/v1/sqs9sr25g04zd';

async function Deal() {
    var connection = await fetch(myAPI);

    var data = await connection.json();

    console.log(connection);

    console.log(data);

    let x = document.getElementById('list');

    for(let i = 0; i < data.length; i++) {

        x.insertAdjacentHTML('beforeend', `<p id ="c${i}">${data[i].name}  <button id ="bt${i}">x</button></p>`);

    }
    
    for(let i = 0; i < data.length; i++) {

        let dlt = document.getElementById(`bt${i}`);

        let dltContent = document.getElementById(`c${i}`);

        dlt.addEventListener('click', async function() {

            dltContent.remove();

            data.splice(i,1);

            let dltIt = {

                dt: [

                    {
                        id: `c${i}`,

                        name: data[i].name

                    }

                ]

            };

            let Opt = {

                method : "DELETE",

                headers : 
                {
                    "Content-Type" : "application/json",

                    "Sec-Fetch-Mode" : "no-cors"
                },

                body: JSON.stringify(dltIt)   
            }

        const cnt = await fetch(myAPI, Opt);

        const dt = await cnt.json();
        })

    }


}
Deal();