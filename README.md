# Tobbie-II

Extension for Tobbie-II
The Tobbie-II robot is a STEAMP DIY kit for BBC micro:bit. The Tobbie-II extends the micro:bit's several GPIO ports for motor driver and IR sensors. The extension includes forward walking, backward walking, left turn and right turn, and reads the infrared sensing states on the left and right sides. In addition, it also provides functions such as shaking the head, shaking and dancing.

## Code Example
```JavaScript
basic.forever(function () {
    TobbieII.forward()
    if (TobbieII.RBlock(512)) {
        TobbieII.stopwalk()
    }
})
```
## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

```package
TobbieII=github:kaku111/cic20190209_1
```
Product information-->https://science.prokits.com.tw/

