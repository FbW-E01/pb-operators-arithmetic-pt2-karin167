// 1
const num = 6450;
console.log(num / 15);

// 2
const income = 500;
console.log(income * 52);

// 3
const foo = 17/30 * 100;
console.log(foo + "%");

// 4
const square = 4.75;
console.log(square * 4 + "cm");

// 5
const triangleOns = 5;
const triangleTwo = 6;
const trianglTree = 7;
console.log(triangleOns + triangleTwo + trianglTree);

// 6
const squareArea = 5;
console.log(squareArea * squareArea);

// 7
//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// Heron's Formula
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(halfPerimeter*(halfPerimeter-triSideLength1)*(halfPerimeter-triSideLength2)*(halfPerimeter-triSideLength3));
console.log(`Area of triangle = ${areaTriangle}cm²`);


// 8
const cube = 9;
console.log(cube * cube * cube); 

//  9
const billsOne = 22.35; 
const billsTwo = 26.67; 
const billsTree = 35.92;
console.log(billsOne * 0.1 + billsOne);
console.log(billsTwo * 0.15 + billsTwo);
console.log(billsTree * 0.20 + billsTree);

// 10
const noemy = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4; 
console.log(noemy / 10);

// 11
const x = (85 * 6) - (75 + 70 + 85 + 90 + 100);
console.log("Score in the sixth test: " + x);

// 12
const averagEight = 78 * 8;
const averagNeeded = 80 * 9;
const minR = averagNeeded - averagEight;
console.log("James needs a minimum of " + minR + "%" + " to get an 80% average.");
