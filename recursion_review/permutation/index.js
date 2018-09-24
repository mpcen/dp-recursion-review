// Given an array, print all of the permutations of the items within it. Don't worry about duplications

function permute(strArr, collection = []) {
    if (!strArr.length) {
        console.log(collection.toString());
    } else {
        for (let i = 0; i < strArr.length; i++) {
            // choose
            collection.push(strArr.splice(i, 1));

            // explore
            permute(strArr, collection);

            // unchoose
            strArr.splice(i, 0, collection.pop());
        }
    }
}

permute(['a', 'b', 'c', 'd']);

// Follow up, how would you prevent the printing of duplicates?
function permuteUnique(strArr, collection = [], printed = new Set()) {
    if (!strArr.length) {
        const collectionString = collection.toString();
        if (!printed.has(collectionString)) {
            printed.add(collectionString);
            console.log(collectionString);
        }
    } else {
        for (let i = 0; i < strArr.length; i++) {
            // choose
            collection.push(strArr.splice(i, 1));

            // explore
            permute(strArr, collection, printed);

            // unchoose
            strArr.splice(i, 0, collection.pop());
        }
    }
}

permuteUnique(['a', 'b', 'c', 'a', 'd']);