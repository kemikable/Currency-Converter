// Функция для выполнения запроса к API и получения курса валюты
async function getExchangeRate(baseCurrency, targetCurrency) {
    const url = `https://api.exchangerate.host/latest?base=${baseCurrency}&symbols=${targetCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const exchangeRate = data.rates[targetCurrency];
        return exchangeRate;
    } catch (error) {
        throw new Error('Failed to fetch exchange rate data.');
    }
}


// Функция для обновления курса обмена и окончательной суммы
function updateExchangeRate() {
    const baseCurrency = document.querySelector('.ex-have .currency.active').textContent.trim();
    const targetCurrency = document.querySelector('.ex-get .currency.active').textContent.trim();
    const baseAmount = parseFloat(document.querySelector('.have-cost').value);

    getExchangeRate(baseCurrency, targetCurrency)
        .then((exchangeRate) => {
            const targetAmount = (baseAmount * exchangeRate).toFixed(2);
            document.querySelector('.get-cost').value = targetAmount;

            // Обновление значения курса выбранных валют
            document.querySelector('.have-how-cur').textContent = `1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
            document.querySelector('.have-get-cur').textContent = `1 ${targetCurrency} = ${(1 / exchangeRate).toFixed(6)} ${baseCurrency}`;
        })
        .catch((error) => {
            console.error(error);
            alert('Something went wrong. Please try again later.');
        });
}




function handleCurrencySelection() {
    const currencyBlocks = document.querySelectorAll('.currency-block');
    currencyBlocks.forEach((block) => {
        const currencies = block.querySelectorAll('.currency');
        currencies.forEach((currency) => {
            currency.addEventListener('click', () => {
                currencies.forEach((c) => c.classList.remove('active'));
                currency.classList.add('active');
                currencies.forEach((c) => c.style.backgroundColor = ''); // Сбрасываем цвет фона всех валют
                currency.style.backgroundColor = '#833AE0'; // Устанавливаем цвет фона выбранной валюте
                updateExchangeRate();
            });
        });
    });
}


// Обработчик события для изменения суммы
function handleAmountChange() {
    const amountInputs = document.querySelectorAll('.have-cost, .get-cost');
    amountInputs.forEach((input) => {
        input.addEventListener('input', () => {
            updateExchangeRate();
        });
    });
}


// Инициализация конвертера валют
function initializeCurrencyConverter() {
    // Выбор валюты RUB слева
    const rubCurrencyLeft = document.querySelector('.ex-have .currency.rub');
    rubCurrencyLeft.classList.add('active');
    rubCurrencyLeft.style.backgroundColor = '#833AE0';

    // Выбор валюты USD справа
    const usdCurrencyRight = document.querySelector('.ex-get .currency.usd');
    usdCurrencyRight.classList.add('active');
    usdCurrencyRight.style.backgroundColor = '#833AE0';

    handleCurrencySelection();
    handleAmountChange();
    updateExchangeRate();
}


// Запуск конвертера валют после полной загрузки страницы
document.addEventListener('DOMContentLoaded', initializeCurrencyConverter);
