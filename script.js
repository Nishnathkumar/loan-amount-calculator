function calculateLoan() {
  // Get the values from the input fields
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value);

  // Validate input
  if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
      document.getElementById('result').innerText = "Please enter valid numbers.";
      return;
  }

  const totalPayments = years * 12;
  const monthlyPayment = (amount * rate * Math.pow(1 + rate, totalPayments)) / (Math.pow(1 + rate, totalPayments) - 1);

  if (isFinite(monthlyPayment)) {
      document.getElementById('result').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
  } else {
      document.getElementById('result').innerText = "Please enter positive numbers.";
  }
}
