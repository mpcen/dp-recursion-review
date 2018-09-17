function reverseArray(arr, index = 0) {
    if (index <= arr.length - 1) {
        reverseArray(arr, index + 1);
        console.log(arr[index]);
    }
}

reverseArray(['a', 's', 'd', 'f']);