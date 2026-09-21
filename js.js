let heightInput = document.getElementById("height")
let weightInput = document.getElementById("weight")
let calculateBtn = document.getElementById("calculate-btn")

let bmiValue = document.getElementById("bmi-value")
let bmiStatus = document.getElementById("bmi-status")
let bmiMessage = document.getElementById("bmi-message")

let heightResult = document.getElementById("height-result")
let weightResult = document.getElementById("weight-result")
let resultImg = document.getElementById("result-img")

AOS.init()

calculateBtn.addEventListener("click", function () {

    let heightCm = parseFloat(heightInput.value)
    let weightKg = parseFloat(weightInput.value)

    if (
        isNaN(heightCm) ||isNaN(weightKg) ||heightCm <= 0 ||
        weightKg <= 0
    ) {

        Swal.fire({
            title: "خطا!",
            text: "لطفاً قد و وزن معتبر وارد کنید.",
            icon: "error"
        })
        return
    }

    let heightM = heightCm / 100
    let weightG = weightKg * 1000

    heightResult.textContent =
        heightCm + " سانتی‌متر = " +
        heightM.toFixed(2) + " متر"

    weightResult.textContent =
        weightKg + " کیلوگرم = " +
        weightG + " گرم"

    let bmi = weightKg / (heightM * heightM)
    let bmiResult = bmi.toFixed(1)

    let status
    let imgName

    if (bmi < 18.5) {
        status = "کم‌وزنی"
        imgName = "1.png"
    } else if (bmi < 25) {
        status = "نرمال"
        imgName = "2.png"
    } else if (bmi < 30) {
        status = "اضافه‌وزن"
        imgName = "3.png"
    } else if (bmi < 40) {
        status = "چاقی"
        imgName = "4.png"
    } else {
        status = "چاقی شدید"
        imgName = "5.png"
    }

    bmiValue.textContent = bmiResult
    bmiStatus.textContent = status

    bmiMessage.textContent =
        "با توجه به قد " +
        heightCm +
        " سانتی‌متر و وزن " +
        weightKg +
        " کیلوگرمی، وضعیت BMI شما " +
        status +
        " است."

    resultImg.src = "img/" + imgName
    resultImg.style.display = "block"

    Swal.fire({
        title: "محاسبه انجام شد!",
        text: "نتیجه BMI شما نمایش داده شد.",
        icon: "success"
    })
})