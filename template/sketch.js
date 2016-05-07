/// <reference path="../typings/p5js/p5.d.ts"/>
/**
 * Created by Lujun Weng on 5/7/2016.
 */
var sketch = function (p) {
    var x = 100;
    var y = 100;
    p.setup = function () {
        p.createCanvas(700, 410);
    };
    p.draw = function () {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
    };
};
var myp5 = new p5(sketch);
//# sourceMappingURL=sketch.js.map