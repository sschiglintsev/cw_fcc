function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return [];
    }

    let p = 0;
    let n = 0;

    for (let i=0; i<input.length;i++) {
        if (input[i]>0) {
            p++;
        } else {
            n +=input[i];
        }
    }
    return [p,n];
}