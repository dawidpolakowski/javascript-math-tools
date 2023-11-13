
function multiplicationMatrixColour() {

    let counter = 100;
    let mArray = new Array(counter)
    let cArray = new Array(counter)


    let n = 1

    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            mArray[n] = i * j
            
            n++
            console.log("n: " + n)
            console.log("i: " + i)
            console.log("j: " + j)
            console.log("mArray: " + mArray[n-1]);


        }
    }

    for (let i = 1; i < mArray.length; i++) {
        if (mArray[i] < 10) document.write('[__' + mArray[i] + '__] ')
        if (mArray[i] >= 10 && mArray[i] < 100) document.write('[__' + mArray[i] + '_] ')
        if (mArray[i] == 100) document.write('[_' + mArray[i] + '_] ')
        if (mArray[i] > 100) document.write('[_' + mArray[i] + '_] ')
        if ((i % 10) == 0 && i > 0) { document.write('<br>') }
        if ((i == 100) ) { document.write('<br>') }
    }

    // for (let i = 1; i < mArray.length; i++) {
    //     if (mArray[i] < 10) document.write( mArray[i] + '  , ')
    //     if (mArray[i] >= 10 && mArray[i] < 100) document.write( mArray[i]+ '  , ' )
    //     if (mArray[i] == 100) document.write(mArray[i]+ '   ,' )
    //     if (mArray[i] > 100) document.write( mArray[i] + ' ,  ')
    //     if ((i % 10) == 0 && i > 0) { document.write('<br>') }
    //     if ((i == 100) ) { document.write('<br>') }
    // }



    n = 1

    for (let i = 1; i < counter+1; i++) {
        for (let j = 1; j < counter+1; j++) {
            if(mArray[i] == mArray[j]) {
                cArray[n]=0;
            }
           
        }
        n++
    }
    n = 1
    for (let i = 1; i < counter+1; i++) {
        for (let j = 1; j < counter+1; j++) {
            if(mArray[i] == mArray[j]) {
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
    }

    return cArray
}
