input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . # . #
        . # . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    led.plot(2, 2)
})
basic.forever(function () {
	
})
