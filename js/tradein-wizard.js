// Мастер экспресс-оценки для выкупа и Trade-In
(function() {
  let currentStep = 1;
  const totalSteps = 3;

  const data = {
    brand: '',
    model: '',
    year: '2020',
    mileage: '',
    condition: 'Отличное (без ДТП)',
    gearbox: 'Автомат',
    name: '',
    phone: ''
  };

  function updateStepUI() {
    for (let i = 1; i <= totalSteps; i++) {
      const stepEl = document.getElementById(`wizard-step-${i}`);
      const stepIndicator = document.getElementById(`wizard-ind-${i}`);
      if (stepEl) {
        if (i === currentStep) {
          stepEl.classList.remove('hidden');
          stepEl.classList.add('block');
        } else {
          stepEl.classList.remove('block');
          stepEl.classList.add('hidden');
        }
      }
      if (stepIndicator) {
        if (i <= currentStep) {
          stepIndicator.classList.add('bg-amber-400', 'text-black', 'font-bold');
          stepIndicator.classList.remove('bg-gray-800', 'text-gray-400');
        } else {
          stepIndicator.classList.remove('bg-amber-400', 'text-black', 'font-bold');
          stepIndicator.classList.add('bg-gray-800', 'text-gray-400');
        }
      }
    }
  }

  window.wizardNext = function(step) {
    if (step === 1) {
      const brandInput = document.getElementById('wiz-brand');
      const modelInput = document.getElementById('wiz-model');
      const yearInput = document.getElementById('wiz-year');
      const mileageInput = document.getElementById('wiz-mileage');

      if (!brandInput.value.trim() || !modelInput.value.trim()) {
        alert('Пожалуйста, укажите марку и модель автомобиля');
        return;
      }

      data.brand = brandInput.value.trim();
      data.model = modelInput.value.trim();
      data.year = yearInput.value;
      data.mileage = mileageInput.value.trim() || 'До 100 000';
      currentStep = 2;
      updateStepUI();
    } else if (step === 2) {
      const condInput = document.querySelector('input[name="wiz-cond"]:checked');
      const gearInput = document.querySelector('input[name="wiz-gear"]:checked');

      if (condInput) data.condition = condInput.value;
      if (gearInput) data.gearbox = gearInput.value;

      currentStep = 3;
      updateStepUI();

      // Отображаем краткое резюме для финального шага
      const summaryEl = document.getElementById('wiz-summary-car');
      if (summaryEl) {
        summaryEl.textContent = `${data.brand} ${data.model}, ${data.year} г. (${data.mileage} км, ${data.condition})`;
      }
    }
  };

  window.wizardPrev = function(step) {
    if (step > 1) {
      currentStep = step - 1;
      updateStepUI();
    }
  };

  window.wizardSubmit = function(e) {
    if (e) e.preventDefault();

    const nameInput = document.getElementById('wiz-name');
    const phoneInput = document.getElementById('wiz-phone');

    if (!phoneInput.value.trim()) {
      alert('Пожалуйста, введите ваш номер телефона');
      return;
    }

    data.name = nameInput.value.trim() || 'Клиент с сайта';
    data.phone = phoneInput.value.trim();

    const text = encodeURIComponent(
      `ЗАЯВКА НА ВЫКУП / TRADE-IN (TOROS AUTO):\n` +
      `• Авто: ${data.brand} ${data.model} (${data.year} г.)\n` +
      `• Пробег: ${data.mileage} км\n` +
      `• КПП: ${data.gearbox}\n` +
      `• Состояние: ${data.condition}\n` +
      `• Клиент: ${data.name}\n` +
      `• Телефон: ${data.phone}\n\n` +
      `Жду оценку стоимости!`
    );

    // Успешный экран
    const step3 = document.getElementById('wizard-step-3');
    if (step3) {
      step3.innerHTML = `
        <div class="text-center py-8">
          <div class="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          </div>
          <h4 class="text-2xl font-bold text-white mb-2">Заявка успешно сформирована</h4>
          <p class="text-gray-300 mb-6 text-sm max-w-md mx-auto">
            Ваши данные по авто <strong>${data.brand} ${data.model}</strong> приняты. Нажмите ниже, чтобы отправить расчет напрямую оценщику в WhatsApp.
          </p>
          <a href="https://wa.me/77760300690?text=${text}" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold hover:scale-105 transition-transform shadow-lg">
            <span>Открыть оценку в WhatsApp</span>
          </a>
        </div>
      `;
    }
  };

  window.initTradeInWizard = function() {
    updateStepUI();
  };
})();
