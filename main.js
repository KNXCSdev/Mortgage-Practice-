const amountInput = document.querySelector("#amount");
const termInput = document.querySelector("#term");
const rateInput = document.querySelector("#rate");
const repaymentInput = document.querySelector("#interest");
const interestInput = document.querySelector("#repayment");
const btn = document.querySelector(".btn");
const form = document.querySelector("#mortgage-form");

if (
  (amountInput.value && termInput.value && rateInput.value && repaymentInput.checked) ||
  interestInput.checked
) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("siemson");
  });
}
