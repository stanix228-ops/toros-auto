// Кредитный калькулятор TOROS AUTO
(function() {
  const priceInput = document.getElementById('calc-price');
  const priceDisplay = document.getElementById('calc-price-val');
  
  const downPaymentInput = document.getElementById('calc-downpayment');
  const downPaymentDisplay = document.getElementById('calc-downpayment-val');
  const downPaymentPercentDisplay = document.getElementById('calc-downpayment-percent');
  
  const termInput = document.getElementById('calc-term');
  const termDisplay = document.getElementById('calc-term-val');
  
  const monthlyPaymentDisplay = document.getElementById('calc-monthly-val');
  const loanAmountDisplay = document.getElementById('calc-loan-val');
  const whatsappCalcBtn = document.getElementById('calc-whatsapp-btn');

  const ANNUAL_RATE = 0.165; // Средняя ставка автокредитования ~16.5% годовых
  const USD_RATE = 490; // Примерный курс тенге к доллару

  function formatKZT(num) {
    return new Intl.NumberFormat('ru-RU').format(Math.round(num)) + ' ₸';
  }

  function formatUSD(num) {
    return '$' + new Intl.NumberFormat('en-US').format(Math.round(num / USD_RATE));
  }

  function recalculate() {
    if (!priceInput || !downPaymentInput || !termInput) return;

    const carPrice = parseFloat(priceInput.value);
    const downPaymentPercent = parseFloat(downPaymentInput.value);
    const months = parseInt(termInput.value, 10);

    const downPaymentAmount = carPrice * (downPaymentPercent / 100);
    const loanAmount = Math.max(0, carPrice - downPaymentAmount);

    // Расчет аннуитетного платежа
    const monthlyRate = ANNUAL_RATE / 12;
    let monthlyPayment = 0;

    if (loanAmount > 0 && monthlyRate > 0) {
      monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    // Обновление отображения
    priceDisplay.textContent = formatKZT(carPrice);
    downPaymentDisplay.textContent = formatKZT(downPaymentAmount);
    downPaymentPercentDisplay.textContent = `${downPaymentPercent}%`;
    termDisplay.textContent = `${months} мес. (${(months / 12).toFixed(1).replace('.0', '')} г.)`;
    
    monthlyPaymentDisplay.textContent = formatKZT(monthlyPayment);
    loanAmountDisplay.textContent = `${formatKZT(loanAmount)} / ${formatUSD(loanAmount)}`;

    // Обновление ссылки в WhatsApp
    if (whatsappCalcBtn) {
      const msg = encodeURIComponent(
        `Здравствуйте, TOROS AUTO! Рассчитал автокредит на сайте:\n` +
        `• Стоимость авто: ${formatKZT(carPrice)}\n` +
        `• Первоначальный взнос: ${downPaymentPercent}% (${formatKZT(downPaymentAmount)})\n` +
        `• Срок: ${months} мес.\n` +
        `• Расчетный платеж: ~${formatKZT(monthlyPayment)}/мес.\n` +
        `Хочу подать заявку на одобрение.`
      );
      whatsappCalcBtn.href = `https://wa.me/77760300690?text=${msg}`;
    }
  }

  window.initCreditCalculator = function() {
    if (priceInput) priceInput.addEventListener('input', recalculate);
    if (downPaymentInput) downPaymentInput.addEventListener('input', recalculate);
    if (termInput) termInput.addEventListener('input', recalculate);
    recalculate();
  };

  // Метод для автозаполнения калькулятора при выборе машины в каталоге
  window.setCalculatorPrice = function(priceKZT) {
    if (priceInput) {
      priceInput.value = priceKZT;
      recalculate();
      const calcSection = document.getElementById('calculator');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
})();
