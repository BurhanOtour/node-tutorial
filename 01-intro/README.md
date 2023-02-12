# Intorduction to Node JS

## What is Node.js?

Javascript on your backend servers...? What run on the backend server is VM like (V8/Chakra). Node Js then is a wrapper around VM like V8.

When you write JS in node, node will pass the code to V8 which in turn will execute on the backend servers. 

NodeJS is more than just executing JS on the server, Node can make use of the rich features of JS to apply in backend development.

## Why Node?

Executing JS apps on the server is not that impressive, you could have done than even before node. 

1. Easy way to execute Javascript on the server.
2. Built-in modules (http, fs, crypto, ...): A great platform for tools, more than just backend servers.
3. All the Built-in modules support Asynchronous APIs which allows to deal without the need to deal with Threads.
4. You can build highly performing packages with C++ addones.
5. Powerful defugger and other utilities. 
6. NPM.
7. Module dependency manager.

Node was the first JS platform which was shipped with a dedicated package manager (NPM node package manager). Node packages are stored in NPM registery. For more, check [the article](https://jscomplete.com/learn/why-node-for-react) on why react developers LOVE node, especially that is the most popular platform for tools. Mainly node comes with NPM and also with a reliable module dependancy manager (CommonJS).


For async programming, there are two patterns. Callbacks and Promis. 

### What is a callback?

A function that Node will "call back" at a later point in the time of a program. 

```
function cb(data) {
    // Do something with data
}

someAsyncMethod(cb);
```
In the previous example, the `someAsyncMethod` asyn method will call `cb` function at a later point in time. Example: 

```
function Burhan(coffee) {
    // Do something with data
}

starbucks.makeMeACoffee(Burhan);
```







