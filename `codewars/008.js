function getCount(str) {
    var vowelsCount = 0;
    let gl = ["a","e","i","o","u"];
    for (let i=0;i<str.length;i++) {
        for (let j=0;j<gl.length;j++) {
            if (gl[j]==str[i]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}