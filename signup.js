document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const spinner = document.getElementById("spinner");
    const btnText = document.querySelector(".btn-text");
    const button = document.getElementById("signup-btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
      
        spinner.classList.remove("d-none");
        btnText.textContent = "Signing up...";
        button.disabled = true;

       
        setTimeout(() => {
            spinner.classList.add("d-none");
            btnText.textContent = "Sign Up";
            button.disabled = false;
            alert("Sign-up simulated! Replace this with real action.");
        }, 2000);
    });
});
