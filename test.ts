// tests go here; this will not be compiled when this package is used as a library
basic.forever(function () {
    TobbieII.forward()
    if (TobbieII.RBlock(512)) {
        TobbieII.stopwalk()
    }
})
