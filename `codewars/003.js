function remove (string) {
    let outPut = "";
    for (let i = 0; i < string.length; i++){
        if (string[i] === "!"){
            outPut += "";
        } else {
            outPut +=string[i];
        }
    }
    outPut = outPut + "!";
    return outPut;
}
