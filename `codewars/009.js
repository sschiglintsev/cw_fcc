function createPhoneNumber(numbers){
    let phone='(';
    for (let i=0;i<numbers.length;i++) {
        phone += numbers[i];
        if (i==2) {
            phone +=') ';
        }
        if (i==5) {
            phone +='-';
        }
    }
    return phone;
}