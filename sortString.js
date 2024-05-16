function sortStrings(strings) {
    return strings.sort(function (a, b) {
        var prefixA = a.slice(0, 2);
        var prefixB = b.slice(0, 2);
        var numA = extractNumber(a);
        var numB = extractNumber(b);
        if (prefixA !== prefixB) {
            return prefixA.localeCompare(prefixB);
        }
        else {
            return numA - numB;
        }
    });
}
function extractNumber(str) {
    var match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : Number.POSITIVE_INFINITY;
}
;
console.log(sortStrings(["TH1", "TH3Netflix", "TH7", "TH10"]));
