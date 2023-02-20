// The timeout delay is not a guarantee that the function will be executed immediately after the timer is doneconst timeoutID = setTimeout(() => { console.log("Logging after 0 ms delay"); }, 0);

clearTimeout(timeoutID);

// Nothing will be logged.

// also if we have the following code 

setTimeout(() => { console.log("Greeting"); }, 500);

for (let i = 0; i < 1e10; i++) {
    // Block Node Synchronously
}

// Greeting will not be printed after 500 ms, but even after the for block is fully exectued first.
