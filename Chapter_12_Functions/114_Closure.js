
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },//this is a function. we wrote in a short way like this.
        decrement() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());