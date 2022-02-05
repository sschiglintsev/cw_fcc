const areaOrPerimeter = function(l , w) {
    let sp = 0;
    if (l==w) {
        sp=l*w;
    } else {
        sp=l*2+w*2;
    }
    return sp;
};