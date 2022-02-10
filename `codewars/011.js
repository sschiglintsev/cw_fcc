function isPrime(num) {
    let k = Math.ceil(Math.sqrt(num));
    if (num==2 || num==3) {
        return true;
    }
    if (num==0 || num==1 || num<0) {
        return false;
    }
    let j =0;
    let z = 0;
    for (let i=2; i<=k;i++) {
        if (num % i==0) {
            z++;
        }
    }
    if (z==0) {
        return true;
    } else {
        return false;
    }
}