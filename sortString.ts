function sortStrings(strings: Array<string>) {
    return strings.sort((a, b) => {

        const prefixA = a.slice(0, 2);
        const prefixB = b.slice(0, 2);
        const numA = extractNumber(a);
        const numB = extractNumber(b);

        if (prefixA !== prefixB) {
            return prefixA.localeCompare(prefixB);
        } else {
            return numA - numB;
        }
        
    });
}

function extractNumber(str: string){
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : Number.POSITIVE_INFINITY;
};

console.log(sortStrings([ "TH1", "TH3Netflix" , "TH7", "TH10"]));