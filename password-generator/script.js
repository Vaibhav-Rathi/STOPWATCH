document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const lengthSlider = document.getElementById("length");
    const lengthValue = document.getElementById("lengthValue");

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?/";

    function generatePassword() {
        let characters = "";
        if (document.getElementById("lowercase").checked) characters += lowercase;
        if (document.getElementById("uppercase").checked) characters += uppercase;
        if (document.getElementById("numbers").checked) characters += numbers;
        if (document.getElementById("symbols").checked) characters += symbols;

        const length = lengthSlider.value;
        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        passwordField.value = password;
    }

    function copyPassword() {
        if(passwordField.textContent !==""){
            passwordField.select();
            document.execCommand("copy");
            alert("Password copied to clipboard!");
        }else {
            alert("Please generate the password first!")
        }
    }

    lengthSlider.addEventListener("input", function () {
        lengthValue.textContent = this.value;
    });

    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyPassword);
});
