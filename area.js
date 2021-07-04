const calculateRectangleArea = function (length, width){
  let rectArea = length * width;
  if (rectArea >= 0 && length >= 0 && width >= 0) { return rectArea; }
}
const calculateTriangleArea = function (base, height){
  let triArea = base * height / 2;
  if (triArea >= 0 && base >= 0 && height >= 0) { return triArea; }
}
const calculateCircleArea = function (radius){
  let circArea = Math.PI * (radius * radius);
  if (circArea >= 0 && radius >= 0) { return circArea; }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined
console.log(calculateRectangleArea(-1, 0));
console.log("should be undefined");

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined
console.log(calculateTriangleArea(-1, 0));
console.log("should be undefined");

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
console.log(calculateCircleArea(20));
console.log("should be 1256.636");
console.log(calculateCircleArea(1.5));
console.log("should be 7.069");
