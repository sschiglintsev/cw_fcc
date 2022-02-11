function rgb(r, g, b){
    let y=0;
    let celZn =0;
    let drZn =0;
    let str = '';
    let strOne='';
    let strTwo='';
    for (let i=0;i<3;i++) {
        if ( i==0) {
            if (r>255) {r=255;}
            y = r;
        }
        if ( i==1) {
            if (g>255) {g=255;}
            y = g;
        }
        if ( i==2) {
            if (b>255) {b=255;}
            y = b;
        }
        celZn =0;
        drZn =0;
        strOne='';
        strTwo='';

        if (y==0 || y<0) {
            y=0;
            strOne='0';
            strTwo='0';
        }

        while (y!=0) {
            celZn = Math.trunc(y/16);
            if (celZn==0) {
                if (y<10) {
                    strOne = y;
                    break;
                } else {
                    strOne = hex(y);
                    break;
                }
            }
            drZn = y-celZn*16;
            if (drZn<10&&drZn>0) {
                strTwo = drZn;
            } else {
                strTwo = hex(drZn);
            }
            if (drZn==0) {strTwo='0';}
            y=celZn;
        }
        if (strOne=='') {strOne='0';}
        if (strTwo=='') {strTwo=strOne; strOne='0';}
                str =str +strOne+strTwo;

    }
    function hex(x) {
        switch (x) {
            case 10:
                return 'A';
                break;
            case 11:
                return 'B';
                break;
            case 12:
                return 'C';
                break;
            case 13:
                return 'D';
                break;
            case 14:
                return 'E';
                break;
            case 15:
                return 'F';
                break;
        }
    }
    return str;// complete this function
}
console.log(rgb(48,0,0));