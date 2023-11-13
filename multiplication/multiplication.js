
function multiplicationMatrix() {
    let mArray = new Array(100)

    let n = 1
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            mArray[n] = i * j
            n++
            console.log("n" + n)
            console.log("i" + i)
            console.log("j" + j)
            console.log("i*j=" + i * j)


        }
    }

    for (let i = 1; i < mArray.length; i++) {
        if (mArray[i] < 10) document.write('[__' + mArray[i] + '__] ')
        if (mArray[i] >= 10 && mArray[i] < 100) document.write('[__' + mArray[i] + '_] ')
        if (mArray[i] == 100) document.write('[_' + mArray[i] + '_] ')
        if (mArray[i] > 100) document.write('[_' + mArray[i] + '_] ')
        if ((i % 10) == 0 && i > 0) { document.write('<br>') }
        if ((i == 100) ) { document.write('<br>') }
        if ((i == 100) ) { document.write('<br>') }
    }

    return mArray
}
