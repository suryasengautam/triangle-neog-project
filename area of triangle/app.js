const sides = document.querySelectorAll(".side-input");
const areaBtn  = document.querySelector("#check-area-btn");
const outputE1 = document.querySelector("#output");



function calculateSum(a,b) {
    const reaOfTriangleE1 = 0.5*(a*b);
    return (reaOfTriangleE1)
}
function calculateAreaTriangle () {
    console.assertog("sj");

    
    const areaOfTriangle = calculateSum(Number(sides[0].value),Number(sides[1].value));
    
    outputE1.innerText = (`Area of trangle is ${areaOfTriangle} units`);

} 

areaBtn.addEventListener("click",calculateAreaTriangle)