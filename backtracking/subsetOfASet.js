function uniqueSubsets(list) {
    const chosen = [], set = new Set();
    helper(list, chosen, set);
    return set;
}

function helper(list, chosen, set) {
    if(!list.length) {
        set.add('{ ' + chosen.toString() + ' }');
    } else {
        // choose
        const item = list.shift();

        // explore without
        helper(list, chosen, set);

        // explore with
        chosen.push(item);
        helper(list, chosen, set);

        // unchoose
        chosen.pop();
        list.unshift(item);
    }
}