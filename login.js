document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const spinner = document.getElementById("spinner");
    const btnText = loginBtn.querySelector(".btn-text");

    loginBtn.addEventListener("click", () => {
        spinner.classList.remove("hidden");
        btnText.textContent = "Logging in...";

        
        setTimeout(() => {
            spinner.classList.add("hidden");
            btnText.textContent = "Login";
        }, 2000);
    });
});
