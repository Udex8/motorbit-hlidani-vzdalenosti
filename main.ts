let item = 0
motorbit.forward(80)
basic.forever(function () {
    item = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P5)
    if (item < 20 && item > 10) {
        motorbit.freestyle(0, 0)
    } else if (item < 10) {
        motorbit.back(80)
    } else {
        motorbit.forward(80)
    }
})
