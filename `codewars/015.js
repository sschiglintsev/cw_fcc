function powersOfTwo(n){
    let array = []
    for (let i=0; i<=n;i++) {

        array.push(Math.pow(2, i))
    }
    return array
}

console.log(powersOfTwo(2))