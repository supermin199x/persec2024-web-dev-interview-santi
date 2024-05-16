function searchItems(search, items, maxResult) {
    var results = [];
    var lowercaseSearch = search.toLowerCase();
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var lowercaseItem = item.toLowerCase();
        var index = lowercaseItem.indexOf(lowercaseSearch);
        if (index !== -1) {
            results.push({ word: item, index: index });
        }
    }
    results.sort(function (a, b) { return a.index - b.index; });
    var sortedResults = results.slice(0, maxResult).map(function (result) { return result.word; });
    console.log(sortedResults);
}
searchItems("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 3);
