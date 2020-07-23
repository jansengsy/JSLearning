const loanForm = document.querySelector('form');
const loanAmount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const yearsToRepay = document.querySelector('#years');
const calculateBtn = document.querySelector('.btn');
const rMonthlyPayment = document.querySelector('#monthly-payment');
const rTotalPayment = document.querySelector('#total-payment');
const rTotalInterest = document.querySelector('#total-interest');
const loadingIcon = document.querySelector('#loading');
const resultsDiv = document.querySelector('#results');

addEventListeners();

function addEventListeners() {
  loanForm.addEventListener('submit', calculate);
}

function calculate(e) {
  e.preventDefault();

  loading();

  // Interest calculation:
  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(yearsToRepay.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    rMonthlyPayment.value = monthly.toFixed(2);
    rTotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    rTotalInterest.value = (monthly * calculatedPayments - principal).toFixed(
      2
    );
  } else {
    showError('Please fill in all fields');
    loading();
    return;
  }

  // Just so we can see loading working
  setTimeout(loading, 500);
}

function showError(error) {
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Create error
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  // Card is the parent, errorDiv is what we're inserting, and heading is what we're inserting it before
  card.insertBefore(errorDiv, heading);

  // Clear error after 2 seconds
  setTimeout(() => {
    errorDiv.remove();
  }, 2000);
}

function loading() {
  // Flip the style.display attribute
  loadingIcon.style.display =
    loadingIcon.style.display === 'none' ? 'block' : 'none';

  resultsDiv.style.display =
    resultsDiv.style.display === 'none' ? 'block' : 'none';
}
