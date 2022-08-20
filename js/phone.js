document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    // console.log("phone added");
    const phoneInput = getInputFieldValueById("phone-number-field", true);
    const price = 1219;
    phoneTotalValue("phone-total", phoneInput, price);

    subTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    // console.log("phone added");
    const phoneInput = getInputFieldValueById("phone-number-field", false);
    const price = 1219;
    phoneTotalValue("phone-total", phoneInput, price);

    subTotal();
  });
