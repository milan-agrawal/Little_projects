let passDis = document.getElementById("passdisplay");
let ctclip = document.getElementById("clipboard");

function passGenerator11() {

    let generatedPassword = "";
    let range2 = document.getElementById("lengthrange").value;
    let uppercase2 = document.getElementById("Uppercase1").checked;
    let lowercase2 = document.getElementById("Lowercase1").checked;
    let numbers2 = document.getElementById("Numbers1").checked;
    let symbols2 = document.getElementById("Symbols1").checked;
    ctclip.setAttribute("title", "Copy to Clipboard");

    if (
        numbers2 == false &&
        symbols2 == false &&
        uppercase2 == false &&
        lowercase2 == false
    ) {
        alert("Please select atleast one criteria");
    }
    else {

        class genratePassword {

            constructor() {
                this.uppercase3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                this.lowercase3 = "abcdefghijklmnopqrstuvwxyz";
                this.numbers3 = 1234567890;
                this.symbols3 = "_@#$%&*+~";
            }

            passGenerator1() {

                let samplePassword = "";

                if (uppercase2 == true) {
                    samplePassword += this.uppercase3;
                }
                if (lowercase2 == true) {
                    samplePassword += this.lowercase3;
                }
                if (numbers2 == true) {
                    samplePassword += this.numbers3;
                }
                if (symbols2 == true) {
                    samplePassword += this.symbols3;
                }

                // console.log(samplePassword);
                for (let i = 0; i < range2; i++) {
                    generatedPassword += samplePassword[Math.floor(Math.random() * samplePassword.length)];
                }
                // console.log(generatedPassword);
                return generatedPassword;
            }
        }

        let p = new genratePassword();
        passDis.value = p.passGenerator1();
    }
}

ctclip.addEventListener("click", () => {
    ctclip.setAttribute("title", "Copied");
    navigator.clipboard.writeText(passDis.value);
})

//this function shows the length of the password as per the selected range
const value = document.querySelector("#rangevalue");
const input = document.querySelector("#lengthrange");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
});