function narcissistic(value) {
    let suma = 0;
    let length = String(value).length;
    for (let i=0;i<length;i++) {
        suma+=Math.pow(String(value)[i],length);
    }
    return suma==value;
    // Code me to return true or false
}
console.log(narcissistic(372));