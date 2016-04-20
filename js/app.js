var K = (function () {
    function K(a) {
        this.a = a;
    }
    K.prototype.get = function () {
        return this.a;
    };
    return K;
})();
var k = new K(2);
console.log(k.get());
//# sourceMappingURL=app.js.map