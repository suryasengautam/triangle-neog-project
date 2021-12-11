const inputs = document.querySelectorAll(".angle-input");

const outputE1  = document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3) {
    const sumOfAmgl = (angle1+angle2+angle3)
    return sumOfAmgl
}
function isTriangle() {

    const sumOfAmgles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if (sumOfAmgles === 180) {
        outputE1.innerText = ("Yay, the angles form a triangle!");
        console.log("sk")
    }else {
        outputE1.innerText = ("Oh Oh! The angle doesn't form a triangle");

    }

}

document.querySelector("#is-triangle-btn").addEventListener("click", isTriangle);
