function likes(names) {
    let text = '';
    if (names.length==0) {
        text ='no one likes this';
    }
    if (names.length==1) {
        text =names[0] + ' likes this';
    }
    if (names.length==2) {
        text =names[0] + ' and ' + names[1] + ' like this';
    }
    if (names.length==3) {
        text =names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    }
    if (names.length>=4) {
        let others = names.length-2;
        text =names[0] + ', ' + names[1] + ' and ' + others + ' others like this';
    }
    return text;
}