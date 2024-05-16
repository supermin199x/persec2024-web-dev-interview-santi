function searchItems(search: string, items: Array<string>, maxResult: number) {

    const results: Array<{ word: string, index: number }> = [];
    const lowercaseSearch = search.toLowerCase();

    for (const item of items) {
        const lowercaseItem = item.toLowerCase();
        const index = lowercaseItem.indexOf(lowercaseSearch);

        if (index !== -1) {
            results.push({ word: item, index: index });
        }
    }

    results.sort((a, b) => a.index - b.index);
    const sortedResults = results.slice(0, maxResult).map(result => result.word);

    console.log(sortedResults);
}

searchItems("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 3);