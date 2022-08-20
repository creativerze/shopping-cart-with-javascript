function getInputFieldValueById(inputFieldId, isIncrease) {
  const phoneNumberField = document.getElementById(inputFieldId);
  const phoneNumberFieldString = phoneNumberField.value;
  const phoneNumberFieldValue = parseInt(phoneNumberFieldString);
  // console.log(phoneNumberFieldValue);

  let phoneNumberFieldNewValue;
  if (isIncrease === true) {
    phoneNumberFieldNewValue = phoneNumberFieldValue + 1;
    // console.log(phoneNumberFieldNewValue);
  } else {
    phoneNumberFieldNewValue = phoneNumberFieldValue - 1;
  }
  phoneNumberField.value = phoneNumberFieldNewValue;
  return phoneNumberFieldNewValue;
}

function phoneTotalValue(totalPriceId, phoneInput, price) {
  const phoneTotal = document.getElementById(totalPriceId);
  const newPhoneTotal = phoneInput * price;
  phoneTotal.innerText = newPhoneTotal;
}

function subTotal() {
  const phoneTotalPrice = document.getElementById("phone-total");
  const phoneTotalPriceString = phoneTotalPrice.innerText;
  const phoneTotalPriceValue = parseInt(phoneTotalPriceString);
  // console.log(phoneTotalPriceValue);

  const caseTotalPrice = document.getElementById("case-total");
  const caseTotalPriceString = caseTotalPrice.innerText;
  const caseTotalPriceValue = parseInt(caseTotalPriceString);
  // console.log(caseTotalPriceValue);

  const newSubTotal = phoneTotalPriceValue + caseTotalPriceValue;

  const subTotal = document.getElementById("sub-total");
  subTotal.innerText = newSubTotal;

  // tax calculate
  const taxString = (newSubTotal * 0.1).toFixed(2);
  const tax = parseFloat(taxString);
  // const taxAmount = document.getElementById("tax-amount");
  // const taxAmountString = taxAmount.innerText;

  const taxAmount = document.getElementById("tax-amount");
  taxAmount.innerText = tax;

  const finalPrice = newSubTotal + tax;
  const finalAmount = document.getElementById("final-total");
  finalAmount.innerText = finalPrice;
}
