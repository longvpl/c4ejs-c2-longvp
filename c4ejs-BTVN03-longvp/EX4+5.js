let diction = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    ui: 'UI means User Interface, are the process to define how your products looks',
    ux:  'UX mean User Experience, are the process to define how your products feels',
}
alert('Hi there, this is dev dictionary');
let keyword = prompt('Enter a key word');
if(diction[keyword] == null || diction[keyword] == undefined) {
    alert(`We could not find your word: ${keyword}`);
} else {
    alert(`${keyword}\n${diction[keyword]}`);
}
