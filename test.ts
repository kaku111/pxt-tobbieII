// tests go here; this will not be compiled when this package is used as a library
basic.forever(function () {
    TobbieII.forward()
    basic.pause(1000)
    TobbieII.stopWalk()
    basic.pause(1000)
    TobbieII.backward()
    basic.pause(1000)
    TobbieII.stopWalk()
})
