// What is even module in javascript?
    // node js is built in an event driven architecture,
    // it means when an event occur, event listener works.
    // example - onclick event triggering a function

// event module
    // it helps in creating and handling events

// importing event in node
import EventEmitter from 'node:events';

const myEmitter = new EventEmitter();

myEmitter.on('water tank full', ()=>{
    console.log('paani ki tanki bhr chuki h, kripya motor bn krdijiye.');
});

myEmitter.emit('water tank full');

// explaination
    // .on() listens the event, handles it
    // it takes two arguments
        // what event is triggered
        // what function to run on event running

    // .emit() creates the event
    // takes one argument on, what event is to created.

// where is this module actually used?

    // on http server
        // myEmitter.on('request', ()=>{})
            // this will listen on the event request
            // and then perform it's callback
    
    // chat apps rely heavily on events.

// node.js is non blocking 
    // which means if something in the process is taking time, then it will not pause the further tasks, they will continue to run, and when the process completes, it will also executed.

// example 
    // what happenes when reading a file in blocking system.
        // file reading stared..
        // ....
        // file reading end..
        // further tasks to be done.

        // during the waiting time, program cannot do anything else.
        // this is called 'blocking - execution'
    // wort happens when reading a file in node.js
        // start reading the file, and notify me when the work is done (trigger the end event)
        // meanwhile completing the further work
        // completing the tasks that to be completed after 'end' even triggered.