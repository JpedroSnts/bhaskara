window.onload = function () {
    const elTxtValueA = document.querySelector("#valueA");
    const elTxtValueB = document.querySelector("#valueB");
    const elTxtValueC = document.querySelector("#valueC");
    const elBtnCalc = document.querySelector("#btnCalculate");
    const elBtnClose = document.querySelector("#btnClose");
    const elDivReturns = document.querySelector("#returns");
    const isNumber = (num) => isNaN(parseFloat(num));

    function invalidField(field) {
        if (field == "" || field > 999 || field < -999 || isNumber(field)) {
            return true;
        } else {
            return false;
        }
    }

    function clearInputs() {
        elTxtValueA.value = "";
        elTxtValueA.classList.remove("inputSuccess");
        elTxtValueB.value = "";
        elTxtValueB.classList.remove("inputSuccess");
        elTxtValueC.value = "";
        elTxtValueC.classList.remove("inputSuccess");
        elTxtValueA.focus();
    }

    function verifyIsNum(e) {
        if (e.key === "Enter" || e.key === "Tab") {
            return;
        }

        const spanErr = document.createElement("span");
        elDivReturns.innerHTML = "";
        spanErr.classList.add("alert", "red");

        if (isNumber(this.value) || this.value > 999 || this.value < -999 || this.value == "") {
            this.classList.remove("inputSuccess");
            this.classList.add("inputError");

            if (this.value == "" || isNumber(this.value)) {
                spanErr.textContent = "Preencha todos os campos com números!";
            } else if (this.value > 999) {
                spanErr.textContent = "O máximo é 999!";
            } else if (this.value < -999) {
                spanErr.textContent = "O mínimo é -999!";
            }

            elDivReturns.appendChild(spanErr);
        } else {
            this.classList.remove("inputError");
            this.classList.add("inputSuccess");
        }
    }

    function showCalcs(e) {
        const modal = document.querySelector("#modal");

        if (modal.classList.contains("hideModal")) {
            modal.classList.remove("hideModal");
            modal.classList.add("showModal");
        } else {
            modal.classList.remove("showModal");
            modal.classList.add("hideModal");
        }
        e.preventDefault();
    }

    function calculate(e) {
        e.preventDefault();
        elDivReturns.innerHTML = "";
        const valueA = elTxtValueA.value;
        const valueB = elTxtValueB.value;
        const valueC = elTxtValueC.value;
        const spanResultX1 = document.createElement("span");
        const spanResultX2 = document.createElement("span");
        const buttonCalc = document.createElement("button");

        if (!invalidField(valueA) && !invalidField(valueB) && !invalidField(valueC)) {
            const delta = Math.pow(valueB, 2) - 4 * valueA * valueC;
            const valueX1 = ((-valueB + Math.sqrt(delta)) / (2 * valueA)).toFixed(2);
            const valueX2 = ((-valueB - Math.sqrt(delta)) / (2 * valueA)).toFixed(2);
            if (isNaN(valueX1) || isNaN(valueX2)) {
                spanResultX1.classList.add("alert", "orange");
                spanResultX1.textContent = "A equação não possui raízes reais!";
                elDivReturns.appendChild(spanResultX1);
            } else {
                spanResultX1.classList.add("alert", "blue");
                spanResultX2.classList.add("alert", "blue");
                buttonCalc.classList.add("btn", "btnCalc");
                buttonCalc.id = "btnShowCalcs";
                buttonCalc.addEventListener("click", showCalcs);
                spanResultX1.textContent = `X' = ${valueX1}`;
                elDivReturns.appendChild(spanResultX1);
                spanResultX2.textContent = `X" = ${valueX2}`;
                elDivReturns.appendChild(spanResultX2);
                buttonCalc.textContent = "Exibir Cálculos";
                elDivReturns.appendChild(buttonCalc);

                // Change values of modal
                document.querySelectorAll(".spanValueA").forEach(el => {
                    el.textContent = valueA;
                });
                document.querySelectorAll(".spanValueB").forEach(el => {
                    el.textContent = valueB;
                });
                document.querySelectorAll(".spanValueC").forEach(el => {
                    el.textContent = valueC;
                });

                document.querySelector("#valueX1").textContent = valueX1;
                document.querySelector("#valueX2").textContent = valueX2;
                document.querySelector("#delta").textContent = delta.toFixed(2);

                document.querySelectorAll(".deltaSqrt").forEach(el => {
                    el.textContent = Math.sqrt(delta).toFixed(2);
                });

                document.querySelector("#deltaCalc1").textContent = Math.pow(valueB, 2);
                document.querySelector("#deltaCalc2").textContent = 4 * valueA * valueC;

                document.querySelector("#calcX1").textContent = (- valueB + Math.sqrt(delta)).toFixed(2);
                document.querySelector("#calcX2").textContent = (- valueB - Math.sqrt(delta)).toFixed(2);

                document.querySelectorAll(".baseCalcX").forEach(el => {
                    el.textContent = 2 * valueA;
                });
            }
            clearInputs();
        } else {
            spanResultX1.classList.add("alert", "red");
            spanResultX1.textContent = "Preencha todos os campos com números!";
            elDivReturns.appendChild(spanResultX1);
        }
    }

    elBtnClose.addEventListener("click", showCalcs);
    elBtnCalc.addEventListener("click", calculate);
    elTxtValueA.addEventListener("change", verifyIsNum);
    elTxtValueA.addEventListener("keyup", verifyIsNum);
    elTxtValueB.addEventListener("change", verifyIsNum);
    elTxtValueB.addEventListener("keyup", verifyIsNum);
    elTxtValueC.addEventListener("change", verifyIsNum);
    elTxtValueC.addEventListener("keyup", verifyIsNum);
};
