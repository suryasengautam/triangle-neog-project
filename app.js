const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn  = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#hypotenuse-btn");



function calculateSum(a,b) {
    const sumOfSquare = a**2+ b**2;
    return (sumOfSquare)
}
function calculateHypoTenuse () {

    
    const sumOfSquareCal = calculateSum(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquareCal)
    
    outputE1.innerText = (`the length of hypotenuse is ${lengthOfHypotenuse}`);

} 

hypotenuseBtn.addEventListener("click",calculateHypoTenuse)