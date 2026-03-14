# Node.js Learning – Code With Harry Course

Why are you learning Node.js?
    Nodejs allows javascript to run outside the browser, which makes it possible to build backend using nodejs.
    it is the runtime environment
    because of nodejs, js can access files, run on servers, access OS, database, and networks.
    This allows developers to build
        backend
        APIs
        server
        real-time applications

What backend concepts do you expect to learn?  
    because before nodejs, developers had to run different languages for both frontend and backend. but because of node.js, it was possible to run js outside browsers, which made it possible for js to work in backend and solve the two langauge problem.

What backend concepts will you learn in this video?
    runtime environment,
    packages,
    import,
    file system,
    creating servers,
    express framework,
    routing,
    middlewear,
    rest api,

What is backend Actually?
    what we see on the website is frontend, including the buttons, div, paragraphs
    what runs in the process of delievering the website to users, or getting the content to user is backend.
    getting the list of items from database is the job of backend.

backend handles
    authentication, data processing, database operations, and API calls.

Why Node.js is popular for backend?
    it is fast (uses V8 engine).
    runs many requests simultanousely.
    non blocking.

What you will be able to build after learning Node, 
    After learning Node + Express you can build:
        REST APIs
        authentication systems
        chat apps
        backend for mobile apps
        full stack apps (MERN)


What are modules in node.js?

    what are called modules?
        modules are the file containing related methods or functions that are seperated and can be use anytime when we need them,
    
    how are modules helpful in organising the code?
        modules contains the related function in them, so when we need them in our file, we won't have to implement those functions again instead they can be just imported and can be use instantly.

Why is modular programming important?
    modular programming language is important because
        it keeps the code organised and seperated according to its type.
        it makes it easier for developers to debug the code later.


types of modules
    built in module
        these are the modules that are always present in the runtime.
        they are the built in utensils that can be just imported and can be use anytime required.
        example- path, os
    user defined modules
        these are the modules that are created by the users themselves.
        example - index.js.
    third party modules
        they are the modules that we get from somewhere else, like from the NPM and they are included with the same pupose of making our code easy.
        example - express, mongoose

importing modules - two methods
    1) import using require - commonjs
    2) import using import  - modernjs

named exports are the menu of multiple dishes, and default export are the chefs special
each file contain only 1 default export that can be exported without using curly braces.


* OBSERVATION *
    when importing path module from import method, instead of require method, you won't get __filename automatically, instead you'll have to manually get it.