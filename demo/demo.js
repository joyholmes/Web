const handler = {
    set: function (obj, prop, value, receiver) {
        console.log(233);
        // console.log(receiver);
        // obj[prop] = receiver;
        // return true;
    },
};
// const proxy = new Proxy({}, handler);
const myObj = { a: 1, b: { c: 2, d: 3 } };
const proxy = new Proxy(myObj, handler);
// Object.setPrototypeOf(myObj, proxy);

proxy.b.d = 'bar';
proxy.a = 4
// console.log(myObj.foo === myObj); // true
// console.log(proxy.foo === myObj); // true
