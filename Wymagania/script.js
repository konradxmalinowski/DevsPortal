// Selekcja elementów
const elById = document.getElementById('main-heading');
const elByClass = document.getElementsByClassName('subtitle')[0];
const elByTag = document.getElementsByTagName('li')[0];
const elByQuery = document.querySelector('.info');
const elByQueryAll = document.querySelectorAll('li');

console.log('getElementById:', elById);
console.log('getElementsByClassName:', elByClass);
console.log('getElementsByTagName:', elByTag);
console.log('querySelector:', elByQuery);
console.log('querySelectorAll:', elByQueryAll);

// Stylizacja
if (elById) {
  elById.style.color = '#4af';
  elById.style.fontSize = '2rem';
  elById.style.textTransform = 'uppercase';
}

// Zmiana tekstu w li
const listItems = document.querySelectorAll('#tech-list li');
if (listItems.length >= 3) {
  listItems[1].textContent = 'TypeScript';
  listItems[2].textContent = 'React';
}

// Dodanie nowej klasy do sekcji info
document.getElementById('change-style').addEventListener('click', () => {
  elByQuery?.classList.add('new-style');
});

// Dodawanie elementu
document.getElementById('add-item')?.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'Node.js';
  document.getElementById('tech-list').appendChild(newItem);
});

// Usuwanie elementu
document.getElementById('remove-heading')?.addEventListener('click', () => {
  const heading = document.getElementById('main-heading');
  if (heading) heading.remove();
});

// Atrybuty
const logo = document.getElementById('logo');
if (logo) {
  console.log('Alt attribute:', logo.getAttribute('alt'));
  console.log('Data attribute:', logo.getAttribute('data-info'));
  logo.setAttribute('title', 'Logo dev site');
  document.getElementById('image-info').textContent =
    'ALT: ' + logo.getAttribute('alt');
}

// Zdarzenia
document.body.addEventListener('keydown', () => {
  document.body.style.backgroundColor = '#282c34';
});

document.body.addEventListener('keyup', () => {
  document.body.style.backgroundColor = '#1b1f27';
});

logo?.addEventListener('mouseover', () => {
  logo.classList.add('red-border');
});

logo?.addEventListener('mouseout', () => {
  logo.classList.remove('red-border');
});

document.addEventListener('click', () => {
  console.log('Kliknięto gdzieś na stronie!');
});

window.addEventListener('scroll', () => {
  console.log('Scroll wykryty');
});

window.addEventListener('resize', () => {
  console.log('Zmiana rozmiaru okna');
});

// Kalkulator
document.getElementById('calc-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operation').value;
  let result;

  switch (op) {
    case 'add':
      result = n1 + n2;
      break;
    case 'subtract':
      result = n1 - n2;
      break;
    case 'multiply':
      result = n1 * n2;
      break;
    case 'divide':
      result = n2 !== 0 ? n1 / n2 : 'Nie dziel przez 0';
      break;
    default:
      result = 'Nieznana operacja';
  }

  document.getElementById('result').textContent = `Wynik: ${result}`;
});

// Zaawansowany formularz
const advForm = document.getElementById('advanced-form');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

message.addEventListener('input', () => {
  if (message.value.length < 10 || message.value.length > 200) {
    message.classList.add('warning');
    submitBtn.disabled = true;
  } else {
    message.classList.remove('warning');
    submitBtn.disabled = false;
  }
});

document.getElementById('select-all').addEventListener('click', () => {
  document
    .querySelectorAll('.interest')
    .forEach((checkbox) => (checkbox.checked = true));
});

advForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const email = document.getElementById('email');
  const age = document.getElementById('age');
  const message = document.getElementById('message');

  let isValid = true;

  const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  [username, password, email, age, message].forEach((el) =>
    el.classList.remove('red-border')
  );

  if (!usernameRegex.test(username.value.trim())) {
    username.classList.add('red-border');
    isValid = false;
  }

  if (!passwordRegex.test(password.value.trim())) {
    password.classList.add('red-border');
    isValid = false;
  }

  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('red-border');
    isValid = false;
  }

  const ageVal = parseInt(age.value);
  if (isNaN(ageVal) || ageVal < 18) {
    age.classList.add('red-border');
    isValid = false;
    alert('Musisz mieć co najmniej 18 lat.');
    return;
  }

  if (message.value.length < 10 || message.value.length > 200) {
    message.classList.add('red-border');
    isValid = false;
  }

  if (isValid) {
    alert('Formularz przesłany poprawnie!');
    advForm.reset();
    submitBtn.disabled = true;
  } else {
    alert('Popraw błędy w formularzu.');
  }
});
