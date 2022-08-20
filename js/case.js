document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseTotal = getInputFieldValueById("case-number-field", true);
  const price = 59;
  phoneTotalValue("case-total", caseTotal, price);
  // subTotal(subTotalNewPrice);

  subTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const caseTotal = getInputFieldValueById("case-number-field", false);
    const price = 59;
    phoneTotalValue("case-total", caseTotal, price);
    // subTotal(subTotalNewPrice);

    subTotal();
  });
