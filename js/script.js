const form = document.querySelector('form');
const thumbnail = document.querySelector('.thumbnail');
const cardTable = document.querySelector('#cardTable');
const bankName = document.querySelector('#bankName');

const bankInput = document.getElementById('bank');
const paymentSelect = document.getElementById('payment');
const cardInput = document.getElementById('card');
const nameInput = document.getElementById('name');
const expiryInput = document.getElementById('expiry');
const cardPreview = document.querySelector('.card-preview');

const cardBank = cardPreview.querySelector('.card-bank');
const cardPayment = cardPreview.querySelector('.card-payment');
const cardNumber = cardPreview.querySelector('.card-number span');
const cardName = cardPreview.querySelector('.card-name');
const cardExpiry = cardPreview.querySelector('.card-expiry');

// Слушатель события по нажатию кнопки Submit
form.addEventListener('submit', (event) => {
event.preventDefault();

// Получение данных из формы и создание строки таблицы
const bank = form.bank.value;
const payment = form.payment.value;
const card = form.card.value;
const name = form.name.value;
const expiry = form.expiry.value;

const newRow = document.createElement('tr');
newRow.innerHTML = `
    <td>${bank}</td>
    <td>${payment}</td>
    <td>${card}</td>
    <td>${name}</td>
    <td>${expiry}</td>
`;
cardTable.appendChild(newRow);

// Сброс формы и превью
form.reset();
resetCardPreview();
});

// обработчики событий на изменение значений формы
bankInput.addEventListener('input', updateCardBank);
paymentSelect.addEventListener('change', updateCardPayment);
cardInput.addEventListener('input', updateCardNumber);
nameInput.addEventListener('input', updateCardName);
expiryInput.addEventListener('input', updateCardExpiry);

// функции для обновления полей на миниатюре карты
function updateCardBank() {
  cardBank.textContent = this.value;
}

function updateCardPayment() {
  const payment = form.payment.value;
  switch(payment){
    case 'visa': cardPayment.innerHTML = '<img src="pic/Visa_Logo.png" width = "50" alt="LOGO">'; 
    break;
    case 'mastercard': cardPayment.innerHTML = '<img src="pic/MasterCard_Logo.png" width = "50" alt="LOGO">'; 
    break;
    case 'mir': cardPayment.innerHTML = '<img src="pic/Mir-logo.png" width = "50" alt="LOGO">'; 
    break;
    case 'unionPay': cardPayment.innerHTML = '<img src="pic/UnionPay_logo.png" width = "50" alt="LOGO">'; 
    break;
    case '': cardPayment.innerHTML = '<img src="pic/Placeholder.png" width = "50" alt="LOGO">'; 
    break;
  }
}

function updateCardNumber() {
  cardNumber.textContent = this.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ');
}

function updateCardName() {
  cardName.textContent = this.value.toUpperCase();
}

function updateCardExpiry() {
  cardExpiry.textContent = this.value;
}

function resetCardPreview() {
    cardBank.textContent = 'BANK';
    cardPayment.innerHTML = '<img src="pic/Placeholder.png" width = "50" alt="LOGO">';
    cardNumber.textContent = '#### #### #### ####';
    cardName.textContent = 'CARDHOLDER';
    cardExpiry.textContent = '';
    bankInput.value = '';
    paymentSelect.value = '';
    cardInput.value = '';
    nameInput.value = '';
    expiryInput.value = '';
  }