var ReverseEncoder = /** @class */ (function () {
    function ReverseEncoder() {
    }
    ReverseEncoder.prototype.endcode = function (str) {
        var reversedString = str.split('').reverse().join(''); // สลับตัวอักษร
        console.log(reversedString);
    };
    ReverseEncoder.prototype.decode = function (str) {
        var reversedString = str.split('').reverse().join(''); // สลับตัวอักษร
        console.log(reversedString);
    };
    return ReverseEncoder;
}());
var test1 = new ReverseEncoder();
test1.endcode("hello world");
test1.decode("dlrow olleh");
