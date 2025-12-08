import { animate, utils } from "animejs";

animate('.switch', {
    x: [0, 100, 0],
    duration: 500,
    loopDelay: () => utils.random(250, 500, 1000),
    loop: true,
});

animate('.line', {
    rotate: 360,
    duration: 750,
    loopDelay: () => utils.random(250, 500, 1000),
    loop: true,
});