/**
 * Created by valeron on 25.02.20.
 */

//1
var obj = {
    x:1,
    y:2,
    sum:function () {
        return this.x + this.y;
    }
};

var fun = function () {
    return this.x + 3
};

obj.fun2 = fun;

console.log(obj.sum() + obj.fun2());

//2

var fun1 = function (x) {
    this.x = x;
};

var obj = {};

fun1.apply(obj, [5]);

console.log(obj.x);

//3

var fun1 = function (x) {
    this.x = x
};

var obj = {}

var fun2 = fun1.bind(obj);

fun2(5);

console.log(obj.x);

//4

var func = function () {
    this.x = 0;
    this.y = 0;
};

var point = new func();

console.log(point.x);
console.log(point.constructor);

//5

var func = function(){
    this.x = 0; this.y = 0;
};

var p = new func();

console.log(func.prototype);//объект

console.log(p.constructor.prototype === func.prototype); //true


//6

var Point = function () {
    this.x = 0; this.y = 0;
};

Point.prototype.z = 0;

var p = new Point();

console.log(p.z);


//7

var Point = function () {
    this.x = 0; this.y = 0;
};

var p = new Point();

Point.prototype.z = 0;


console.log(p.z);

//8
var Point = function () {
    this.x = 0; this.y = 0;
};

Point.prototype.z = 0;

var p = new Point();

p.z = 3;


console.log(p.z);

console.log(Point.prototype.z);


