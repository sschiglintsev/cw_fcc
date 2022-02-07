function points(games) {
    let point=0;

    for (let i=0;i<games.length;i++) {
        let p=games[i].split(':');

        if (p[0]>p[1]) {
            point +=3;
        } else {
            if (p[0]===p[1]) {
                point +=1;
            }
        }
    }
    return point;
    // your code here
}