// Write a method to intervally print 'Hello World' but only 5 times
// Don't use setTimeout

let count = 0;

const intervalId = setInterval(() => {
    console.log("Hello World!");
    count++;
    if (count == 5) {
        console.log("Done");
        clearInterval(intervalId);
    }
}, 5 * 1000);