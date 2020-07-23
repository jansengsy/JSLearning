document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('post').addEventListener('blur', validatePost);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e) {
  e.preventDefault();
  const name = e.target;
  const re = /^([a-zA-Z]{2,50})\s?([a-zA-z]{2,50})$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validatePost(e) {
  e.preventDefault();
  const postcode = e.target;
  const re = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;
  if (!re.test(postcode.value)) {
    postcode.classList.add('is-invalid');
  } else {
    postcode.classList.remove('is-invalid');
  }
}

function validateEmail(e) {
  e.preventDefault();
  const email = e.target;
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})(\.)?(a-zA-Z{2})?$/i;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone(e) {
  e.preventDefault();
  const phone = e.target;
  const re = /(\d{5})\s?(\d{6})/;
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
