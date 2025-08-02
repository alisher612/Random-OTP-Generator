const btn = document.getElementById("GenerateBtn");
const otpDisplay = document.getElementById("otpDisplay");

btn.addEventListener("click" , () => {
    // generate otp of 6 length
    const otp = Math.floor(100000 + Math.random() * 900000);

      // Animate display
    otpDisplay.textContent = otp;
    otpDisplay.classList.add("show");
});