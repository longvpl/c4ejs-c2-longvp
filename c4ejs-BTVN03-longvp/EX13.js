let dev = [
    {
        Subject: {
            state: "false",
            name: "HTML",
        },
    },
    {
        Subject: {
            state: "false",
            name: "CSS",
        },
    },
    {
        Subject: {
            state: "false",
            name: "Basics of JavaScript",
        },
    },
    {
        Subject: {
            state: "false",
            name: "Node Package Manager",
        },
    },
    {
        Subject: {
            state: "false",
            name: "Git"
        },
    }
];
// for(let i = 0; i < dev.length; i++) {
//     console.log(dev[i].Subject.name);
// }
//ko nen de while true

// while(true) {
    let command = prompt('Enter your command(New, Delete, Update, Complete');
    if(command == 'New'|| command == 'new') {
        var Subject = {
            name = prompt('Enter new task')
        }
        dev[dev.length+1].Subject.opb = prompt('Enter new task');
        console.log("here")
        for(let i = 0; i < dev.length; i++) {
            console.log(dev[i].Subject.name);
        }
    } else if(command == 'Update' || command == 'update') {
        title = promipt('Enter new title');
        //ko nen de the nay, ai lai cho nguoi dung lua chon index de ba
        index = Number(prompt('Enter the position'));
        dev[index].Subject.name = title;
    }
// }

