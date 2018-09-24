// Print all the permutations of an array, recursively

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