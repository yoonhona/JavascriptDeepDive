(() => {
    var b = 0b01000001
    var o = 0o101
    var h = 0x41

    console.log(b)
    console.log(o)
    console.log(h)

    console.log(b === o)
    console.log(o === h)
})()

console.log(1 === 1.0)
console.log(4 / 2)
console.log(3 / 2)

console.log(10 / 0)
console.log(10 / -0)
console.log(1 * 'string');

(() => {
    try {
        var x = nan
    } catch (e) {
        console.error(e)
    }
})()

var foo;
console.log(typeof foo)

foo = 3
console.log(typeof foo)

foo = 'hello'
console.log(typeof foo)

foo = true;
console.log(typeof foo)

foo = null
console.log(typeof foo)

foo = Symbol()
console.log(typeof foo)

foo = {}
console.log(typeof foo)

foo = []
console.log(typeof foo)

foo = function () {
}
console.log(typeof foo);
