var a = new Object();
a.age = 12;

Object.defineProperty(a, 'name', {
    writable: true,
    value: 'zgc',
    enumerable: true,
    configurable: true
})

Object.defineProperties({
    'a': {
        writable: true,
        value: '123',
        enumerable: true,
        configurable: false
    }
})

console.log(a)


function abc() {
    var a1 = 1;
    return a1 + 'asd';
}

function b() {
    
    console.log(1)
}

