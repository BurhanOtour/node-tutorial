const func = delayInSec => {
    console.log("Hello after " + delayInSec + " seconds");
};


// If the func accepts arguments, we can pass in the argumetns to the function
// as arguments to setTimeout() 

const fourSecs = 4;
const eightSecs = 8;

setTimeout(
    func, 
    fourSecs * 1000, 
    fourSecs
);

setTimeout(
    func, 
    eightSecs * 1000, 
    eightSecs
);