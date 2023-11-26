let cArray = new Array(100)
function multiplicationMatrixColour() {

    let counter = 100;
    let mArray = new Array(100)
   

    let n = 1

    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            mArray[n] = i * j

            n++
            console.log("n: " + n)
            console.log("i: " + i)
            console.log("j: " + j)
            console.log("mArray: " + mArray[n - 1]);
        }
    }


    n = 1

    for (let i = 1; i < counter + 1; i++) {
        for (let j = 1; j < counter + 1; j++) {
            if (mArray[i] == mArray[j]) {
                cArray[n] = 0;
            }
        }
        n++
    }
    n = 1
    for (let i = 1; i < counter + 1; i++) {
        for (let j = 1; j < counter + 1; j++) {
            if (mArray[i] == mArray[j]) {
                cArray[n]++;
                console.log("hit ->")
            }
            console.log("i: " + i)
            console.log("j: " + j)
        }
        n++
    }

    for (let i = 1; i < cArray.length; i++) {
        if (cArray[i] < 10) document.write('[__' + cArray[i] + '__] ')
        if (cArray[i] >= 10 && cArray[i] < 100) document.write('[__' + cArray[i] + '_] ')
        if (cArray[i] == 100) document.write('[_' + cArray[i] + '_] ')
        if (cArray[i] > 100) document.write('[_' + cArray[i] + '_] ')
        if ((i % 10) == 0 && i > 0) { document.write('<br>') }
        if ((i == 100)) { document.write('<br>') }
    }
    for (let i = 1; i < mArray.length; i++) {
        if (mArray[i] < 10) {
            colorStyle(i) 
            document.write('[__' + mArray[i] + '__] ' + "</span>")
        }
        if (mArray[i] >= 10 && mArray[i] < 100) {
            colorStyle(i)
            document.write('[__' + mArray[i] + '_] ' + "</span>")
        } 
        if (mArray[i] == 100){
            colorStyle(i)
            document.write('[_' + mArray[i] + '_] ' + "</span>")
        }
         
        if (mArray[i] > 100){
            colorStyle(i)
            document.write('[_' + mArray[i] + '_] ' + "</span>")
        } 
        if ((i % 10) == 0 && i > 0) { document.write('<br>') }
        
    }

    return cArray
}
function colorStyle(i) {
    if(cArray[i]==1) document.write('<span style="color:red">')
    if(cArray[i]==2) document.write('<span style="color:orange">')
    if(cArray[i]==3) document.write('<span style="color:blue">')
    if(cArray[i]==4) document.write('<span style="color:green">')    
}