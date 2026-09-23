// База данных автомобилей из медиа TOROS AUTO (Петропавловск)
const CARS_DATA = [
  {
    id: 1,
    brand: "BMW",
    model: "X5",
    year: 2007,
    priceKZT: 7200000,
    priceOldKZT: null,
    priceUSD: 14700,
    plate: "KZ 788 AHS 15",
    engine: "3.0L Бензин",
    power: "272 л.с.",
    transmission: "АКПП",
    drive: "Полный привод (xDrive)",
    body: "Кроссовер",
    status: "in_stock",
    badge: "В наличии",
    badgeType: "badge-gold",
    image: "assets/images/cars/car-1-bmw-x5.png",
    description: "Легендарный баварский кроссовер BMW X5 в строгом черном цвете. Проверенный 3.0-литровый бензиновый мотор, классический надежный автомат и интеллектуальный постоянный полный привод xDrive. Автомобиль полностью обслужен, проверен толщиномером и юридически чист.",
    features: ["Полный привод xDrive", "Кожаный салон", "Панорамная крыша", "Ксеноновая оптика", "Раздельный климат-контроль", "Литые диски"]
  },
  {
    id: 9,
    brand: "Toyota",
    model: "Land Cruiser Prado",
    year: 2014,
    priceKZT: 16500000,
    priceOldKZT: null,
    priceUSD: 33700,
    plate: "KZ 549 AHY 15",
    engine: "2.7L Бензин (2TR-FE)",
    power: "163 л.с.",
    transmission: "АКПП",
    drive: "Полный (4WD с блокировкой)",
    body: "Внедорожник",
    status: "in_stock",
    badge: "ТОП Продаж",
    badgeType: "badge-gold",
    image: "assets/images/cars/car-9-toyota-prado.png",
    description: "Настоящий рамный японский внедорожник Toyota Land Cruiser Prado 150 в черном цвете. Проверенный миллионами километров бензиновый 2.7 (2TR-FE), надежный автомат, понижающая передача и блокировка дифференциала. Рама в идеальном состоянии.",
    features: ["Рамная конструкция кузова", "Пониженная передача и блокировка", "Камера заднего вида", "Климат-контроль", "Оригинальные диски Prado", "Противотуманные фары"]
  },
  {
    id: 10,
    brand: "Mercedes-Benz",
    model: "ML 400 4MATIC",
    year: 2015,
    priceKZT: 17800000,
    priceOldKZT: null,
    priceUSD: 36300,
    plate: "KZ 825 AHS 15",
    engine: "3.0L V6 BiTurbo",
    power: "333 л.с.",
    transmission: "АКПП (7G-Tronic)",
    drive: "Полный (4MATIC)",
    body: "Кроссовер",
    status: "in_stock",
    badge: "Премиум выбор",
    badgeType: "badge-gold",
    image: "assets/images/cars/car-10-mercedes-ml400.png",
    description: "Флагманский кроссовер Mercedes-Benz ML 400 в кузове W166. Мощный битурбо двигатель V6 3.0 (333 л.с.), система постоянного полного привода 4MATIC, безупречная плавность хода и богатейшая комплектация.",
    features: ["Битурбо двигатель 333 л.с.", "Интеллектуальная оптика ILS", "Кожаный салон с перфорацией", "Камера кругового обзора", "Электропривод багажника", "Премиум акустика"]
  },
  {
    id: 3,
    brand: "Kia",
    model: "Carnival",
    year: 2021,
    priceKZT: 22500000,
    priceOldKZT: null,
    priceUSD: 45900,
    plate: "KZ 522 AHV 15",
    engine: "3.5L V6 MPi",
    power: "249 л.с.",
    transmission: "АКПП (8-ст)",
    drive: "Передний",
    body: "Минивэн",
    status: "in_stock",
    badge: "Премиум Состояние",
    badgeType: "badge-gold",
    image: "assets/images/cars/car-3-kia-carnival.png",
    description: "Роскошный семейный и представительский минивэн бизнес-класса Kia Carnival 4-го поколения. Белый перламутр, просторный салон повышенной комфортности, капитанские кресла второго ряда, двойной панорамный люк и современные системы помощи водителю.",
    features: ["Капитанские кресла Relax", "Электропривод боковых дверей и багажника", "Двойной люк", "Адаптивный круиз-контроль", "Система удержания в полосе", "Вентиляция кресел"]
  },
  {
    id: 8,
    brand: "Hyundai",
    model: "Accent",
    year: 2014,
    priceKZT: 5200000,
    priceOldKZT: 5500000,
    priceUSD: 10600,
    plate: "KZ 275 AHR 15",
    engine: "1.6L Бензин",
    power: "123 л.с.",
    transmission: "АКПП",
    drive: "Передний",
    body: "Седан",
    status: "discount",
    badge: "Скидка -300 000 ₸",
    badgeType: "badge-gold",
    image: "assets/images/cars/car-8-hyundai-accent.png",
    description: "Яркий синий Hyundai Accent в идеальном сочетании: мотор 1.6 л и классический автомат! Прямо сейчас действует спецпредложение — прямая скидка 300 000 тенге. Проверенное городское авто с прозрачной историей.",
    features: ["Скидка 300 000 ₸", "Двигатель 1.6 (123 л.с.)", "Классический автомат", "Кондиционер", "Подогрев сидений", "Электростеклоподъемники"]
  },
  {
    id: 6,
    brand: "Lada",
    model: "Vesta",
    year: 2019,
    priceKZT: 4600000,
    priceOldKZT: 4950000,
    priceUSD: 9400,
    plate: "KZ 970 AHV 15",
    engine: "1.6L Бензин",
    power: "106 л.с.",
    transmission: "МКПП",
    drive: "Передний",
    body: "Седан",
    status: "discount",
    badge: "Снижение цены",
    badgeType: "badge-red",
    image: "assets/images/cars/car-6-lada-vesta.png",
    description: "Свежая Lada Vesta в практичном белом цвете. Отличное городское авто со сниженной ценой! Высокий клиренс для дорог Северо-Казахстанской области, родной пробег, ухоженный салон и экономичный двигатель 1.6.",
    features: ["Снижение цены", "Кондиционер", "Подогрев передних сидений", "Электроусилитель руля", "Штатная аудиосистема", "Два комплекта резины"]
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Highlander",
    year: 2003,
    priceKZT: 6800000,
    priceOldKZT: null,
    priceUSD: 13900,
    plate: "KZ 016 JAN 15",
    engine: "3.0L V6 (1MZ-FE)",
    power: "220 л.с.",
    transmission: "АКПП",
    drive: "Полный (4WD)",
    body: "Кроссовер",
    status: "in_stock",
    badge: "В наличии",
    badgeType: "badge-green",
    image: "assets/images/cars/car-4-toyota-highlander.png",
    description: "Классический надежный японский кроссовер Toyota Highlander. Знаменитый двигатель 3.0 л 1MZ-FE, постоянный полный привод, комфортная и мягкая подвеска, просторный салон.",
    features: ["Постоянный полный привод 4WD", "Надежный двигатель 1MZ-FE", "Кожаный салон", "Рейлинги на крыше", "Литые диски", "Круиз-контроль"]
  },
  {
    id: 7,
    brand: "Toyota",
    model: "Avensis",
    year: 2011,
    priceKZT: 6400000,
    priceOldKZT: null,
    priceUSD: 13000,
    plate: "KZ 734 AGS 15",
    engine: "2.0L Valvematic",
    power: "152 л.с.",
    transmission: "АКПП",
    drive: "Передний",
    body: "Седан",
    status: "in_stock",
    badge: "В наличии",
    badgeType: "badge-green",
    image: "assets/images/cars/car-7-toyota-avensis.png",
    description: "Европейский седан D-класса Toyota Avensis. Экономичный и тяговитый мотор 2.0 Valvematic, удобный салон, высокий уровень шумоизоляции и превосходная управляемость.",
    features: ["Двухзонный климат-контроль", "Круиз-контроль", "Мультируль", "Датчики дождя и света", "Литые диски", "Подогрев сидений"]
  },
  {
    id: 2,
    brand: "Audi",
    model: "A6 (C4)",
    year: 1994,
    priceKZT: 2800000,
    priceOldKZT: null,
    priceUSD: 5700,
    plate: "KZ 759 AHW 15",
    engine: "2.8L V6",
    power: "174 л.с.",
    transmission: "МКПП",
    drive: "Передний",
    body: "Седан",
    status: "in_stock",
    badge: "В наличии",
    badgeType: "badge-green",
    image: "assets/images/cars/car-2-audi-a6.png",
    description: "Проверенная временем классика немецкого автопрома — Audi A6 в кузове C4. Тяговитый мотор 2.8 V6 на механике. Оцинкованный кузов, доступность запчастей и высокий комфорт на трассе.",
    features: ["Двигатель 2.8 V6", "Механическая коробка", "Электростеклоподъемники", "Люк", "Просторный салон", "Фаркоп"]
  }
];

const PHONE_NUMBER = "+77760300690";
const PHONE_DISPLAY = "+7 (776) 030-06-90";

function formatPriceKZT(num) {
  return new Intl.NumberFormat('ru-RU').format(num) + ' ₸';
}

function formatPriceUSD(num) {
  return '$' + new Intl.NumberFormat('en-US').format(num);
}

// Рендер каталога автомобилей (стиль Modern Dealer)
function renderCatalog(cars) {
  const container = document.getElementById('catalog-grid');
  const countBadge = document.getElementById('catalog-count');
  if (!container) return;

  if (countBadge) {
    countBadge.textContent = `${cars.length} авто в наличии`;
  }

  if (cars.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20 bg-[#0c0d11] rounded-3xl border border-white/5">
        <div class="w-16 h-16 rounded-2xl bg-white/5 text-gray-400 flex items-center justify-center mx-auto mb-4 border border-white/10">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <h4 class="text-2xl font-heading-h2 text-white mb-2">Автомобили по запросу не найдены</h4>
        <p class="text-gray-400 text-sm mb-6 font-body">Попробуйте изменить параметры поиска или закажите индивидуальный подбор</p>
        <button onclick="resetFilters()" class="px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors btn-luxury">
          Показать все 9 авто
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = cars.map(car => {
    // Примерный расчет платежа в кредит (20% взнос, 60 мес, ~16.5%)
    const loan = car.priceKZT * 0.8;
    const monthly = Math.round(loan * (0.01375 * Math.pow(1.01375, 60)) / (Math.pow(1.01375, 60) - 1));

    const whatsappUrl = `https://wa.me/77760300690?text=${encodeURIComponent(
      `Здравствуйте, TOROS AUTO! Интересует автомобиль: ${car.brand} ${car.model} (${car.year} г., ${car.plate}) за ${formatPriceKZT(car.priceKZT)}. Машина еще в наличии?`
    )}`;

    return `
      <div class="car-card flex flex-col justify-between group">
        <div>
          <!-- Изображение: клик открывает автомобиль на весь экран -->
          <div class="car-image-container" onclick="openCarModal(${car.id})">
            <span class="absolute top-4 left-4 z-10 text-xs font-semibold px-3.5 py-1.5 rounded-full ${car.badgeType} shadow-lg font-specs">
              ${car.badge}
            </span>
            <span class="absolute top-4 right-4 z-10 text-[11px] font-bold px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md text-gray-200 border border-white/10 font-specs">
              ${car.plate}
            </span>
            
            <img src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy">

            <div class="photo-zoom-hint flex items-center gap-1.5 font-specs">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
              <span>На весь экран</span>
            </div>
          </div>

          <!-- Контентная часть: Space Grotesk для названий и цен, Manrope для текста -->
          <div class="p-6">
            <div class="flex justify-between items-start mb-3 cursor-pointer" onclick="openCarModal(${car.id})">
              <div>
                <span class="text-[11px] uppercase tracking-widest text-amber-400 font-bold block mb-1 font-specs">${car.brand}</span>
                <h3 class="text-2xl font-heading-h2 text-white group-hover:text-amber-400 transition-colors">
                  ${car.brand} ${car.model}
                </h3>
              </div>
              <span class="text-xs font-bold text-gray-300 px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-specs shrink-0">
                ${car.year}
              </span>
            </div>

            <!-- Цена в Space Grotesk 600 -->
            <div class="mb-5">
              <div class="flex items-baseline gap-2.5">
                <span class="text-2xl sm:text-3xl font-price text-gold-gradient">
                  ${formatPriceKZT(car.priceKZT)}
                </span>
                ${car.priceOldKZT ? `<span class="text-xs text-gray-500 line-through font-price">${formatPriceKZT(car.priceOldKZT)}</span>` : ''}
              </div>
              <div class="text-xs text-gray-400 flex items-center justify-between mt-1 font-specs">
                <span>≈ ${formatPriceUSD(car.priceUSD)}</span>
                <span class="text-gray-400 font-medium">от ~${formatPriceKZT(monthly)}/мес</span>
              </div>
            </div>

            <!-- Характеристики в Manrope 500 -->
            <div class="grid grid-cols-2 gap-2 text-xs text-gray-300 py-3.5 border-y border-white/5 mb-5 bg-black/40 px-3.5 rounded-xl font-specs">
              <div class="flex items-center gap-1.5 truncate">
                <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span class="truncate">${car.power}</span>
              </div>
              <div class="flex items-center gap-1.5 truncate">
                <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                <span class="truncate">${car.transmission}</span>
              </div>
              <div class="flex items-center gap-1.5 truncate">
                <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
                <span class="truncate">${car.engine}</span>
              </div>
              <div class="flex items-center gap-1.5 truncate">
                <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
                <span class="truncate">${car.body}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопки действий: Manrope 600 -->
        <div class="p-6 pt-0 space-y-2.5">
          <div class="grid grid-cols-2 gap-2.5">
            <!-- Кнопка прямого звонка -->
            <a href="tel:${PHONE_NUMBER}" class="py-3 px-3 rounded-xl border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs transition-all text-center flex items-center justify-center gap-1.5 btn-luxury">
              <svg class="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>Позвонить</span>
            </a>
            
            <!-- Кнопка WhatsApp -->
            <a href="${whatsappUrl}" target="_blank" class="py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-emerald-500/50 text-xs transition-all text-center flex items-center justify-center gap-1.5 btn-luxury">
              <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <!-- Кнопка Подробнее / На весь экран -->
          <button onclick="openCarModal(${car.id})" class="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white text-xs transition-colors border border-white/5 flex items-center justify-center gap-1.5 btn-luxury">
            <span>Открыть карточку автомобиля</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Модальное окно просмотра авто (Full-bleed / Immersive)
window.openCarModal = function(id) {
  const car = CARS_DATA.find(c => c.id === id);
  if (!car) return;

  const modal = document.getElementById('car-modal');
  const modalContent = document.getElementById('car-modal-content');
  if (!modal || !modalContent) return;

  const whatsappUrl = `https://wa.me/77760300690?text=${encodeURIComponent(
    `Здравствуйте, TOROS AUTO! Хочу узнать подробнее и записаться на осмотр: ${car.brand} ${car.model} (${car.year} г., госномер ${car.plate}) за ${formatPriceKZT(car.priceKZT)}.`
  )}`;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Фото автомобиля: крупное, с возможностью открыть во весь экран -->
      <div class="lg:col-span-7">
        <div class="rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[600px] border border-white/10 relative shadow-2xl bg-black cursor-pointer group" onclick="openLightbox('${car.image}')">
          <img src="${car.image}" class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500" alt="${car.brand} ${car.model}">
          
          <span class="absolute top-5 left-5 text-xs font-semibold px-4 py-2 rounded-full ${car.badgeType} shadow-xl font-specs">
            ${car.badge}
          </span>
          <span class="absolute top-5 right-5 text-xs font-bold px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white border border-white/20 font-specs">
            ${car.plate}
          </span>

          <div class="absolute bottom-5 right-5 bg-black/80 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 border border-white/10 opacity-90 group-hover:opacity-100 font-specs">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            <span>Нажмите для полного экрана</span>
          </div>
        </div>
        <p class="text-center text-xs text-gray-500 mt-2 font-specs">
          Реальное фото на площадке автосалона TOROS AUTO (Петропавловск, ул. Набережная, 19А)
        </p>
      </div>

      <!-- Детали и характеристики: Space Grotesk + Manrope -->
      <div class="lg:col-span-5 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs uppercase tracking-widest text-amber-400 font-bold font-specs">${car.brand}</span>
            <span class="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-lg font-specs">${car.year} г.в.</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-heading-h2 text-white mb-2 leading-tight">
            ${car.brand} ${car.model}
          </h2>

          <div class="flex items-baseline gap-3 mb-1">
            <div class="text-3xl sm:text-4xl font-price text-gold-gradient">
              ${formatPriceKZT(car.priceKZT)}
            </div>
            ${car.priceOldKZT ? `<div class="text-sm text-gray-500 line-through font-price">${formatPriceKZT(car.priceOldKZT)}</div>` : ''}
          </div>
          <div class="text-xs text-gray-400 mb-6 font-specs">
            ≈ ${formatPriceUSD(car.priceUSD)} | Городской учет (15 регион СКО)
          </div>

          <!-- Описание авто (Manrope 400/500) -->
          <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
            ${car.description}
          </div>

          <!-- Таблица характеристик (Manrope 500) -->
          <div class="space-y-2.5 text-xs text-gray-300 mb-6 bg-black/50 p-4 sm:p-5 rounded-2xl border border-white/5 font-specs">
            <div class="flex justify-between py-1.5 border-b border-white/5">
              <span class="text-gray-400">Государственный номер:</span>
              <span class="font-bold text-white">${car.plate}</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-white/5">
              <span class="text-gray-400">Двигатель и мощность:</span>
              <span class="font-semibold text-white">${car.engine} (${car.power})</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-white/5">
              <span class="text-gray-400">Трансмиссия:</span>
              <span class="font-semibold text-white">${car.transmission}</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-white/5">
              <span class="text-gray-400">Привод:</span>
              <span class="font-semibold text-white">${car.drive}</span>
            </div>
            <div class="flex justify-between py-1.5">
              <span class="text-gray-400">Тип кузова:</span>
              <span class="font-semibold text-white">${car.body}</span>
            </div>
          </div>

          <!-- Особенности комплектации -->
          <div class="mb-6">
            <h4 class="text-xs uppercase tracking-wider text-gray-400 mb-2.5 font-specs">Комплектация и опции:</h4>
            <div class="flex flex-wrap gap-2 font-specs">
              ${car.features.map(f => `
                <span class="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-200 border border-white/5">
                  • ${f}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Кнопки быстрой связи с продавцом (Manrope 600) -->
        <div class="space-y-3 pt-4 border-t border-white/10">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- Прямой звонок продавцу -->
            <a href="tel:${PHONE_NUMBER}" class="py-4 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-xl btn-luxury">
              <svg class="w-4 h-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>Позвонить продавцу</span>
            </a>

            <!-- Чат в WhatsApp -->
            <a href="${whatsappUrl}" target="_blank" class="py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl btn-luxury">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>Чат в WhatsApp</span>
            </a>
          </div>

          <!-- Рассчитать в кредит -->
          <button onclick="applyCarToCalculator(${car.priceKZT})" class="w-full py-3 px-4 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-white/30 text-xs transition-all text-center btn-luxury">
            Рассчитать этот автомобиль в автокредит →
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeCarModal = function() {
  const modal = document.getElementById('car-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
};

// Полноэкранный Lightbox для фото
window.openLightbox = function(imgSrc) {
  let lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox-modal';
    lightbox.className = 'fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out';
    lightbox.onclick = () => { lightbox.classList.add('hidden'); };
    document.body.appendChild(lightbox);
  }
  lightbox.innerHTML = `
    <div class="relative max-w-5xl max-h-[95vh] w-full flex items-center justify-center">
      <button class="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all z-10">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <img src="${imgSrc}" class="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl">
    </div>
  `;
  lightbox.classList.remove('hidden');
};

window.applyCarToCalculator = function(priceKZT) {
  closeCarModal();
  if (window.setCalculatorPrice) {
    window.setCalculatorPrice(priceKZT);
  }
};

// Фильтрация
let activeCategory = 'all';
let activeBrand = 'all';
let searchQuery = '';
let sortBy = 'default';

function applyFilters() {
  let filtered = [...CARS_DATA];

  if (activeCategory === 'crossover') {
    filtered = filtered.filter(c => c.body === 'Кроссовер' || c.body === 'Внедорожник');
  } else if (activeCategory === 'sedan') {
    filtered = filtered.filter(c => c.body === 'Седан');
  } else if (activeCategory === 'discount') {
    filtered = filtered.filter(c => c.status === 'discount');
  }

  if (activeBrand !== 'all') {
    filtered = filtered.filter(c => c.brand.toLowerCase() === activeBrand.toLowerCase());
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(c => 
      c.brand.toLowerCase().includes(q) || 
      c.model.toLowerCase().includes(q) ||
      c.plate.toLowerCase().includes(q)
    );
  }

  if (sortBy === 'price_asc') {
    filtered.sort((a, b) => a.priceKZT - b.priceKZT);
  } else if (sortBy === 'price_desc') {
    filtered.sort((a, b) => b.priceKZT - a.priceKZT);
  } else if (sortBy === 'year_desc') {
    filtered.sort((a, b) => b.year - a.year);
  }

  renderCatalog(filtered);
}

window.filterByCategory = function(category, btn) {
  activeCategory = category;
  document.querySelectorAll('.cat-tab-btn').forEach(b => {
    b.classList.remove('border-amber-400', 'text-amber-400', 'font-bold');
    b.classList.add('border-transparent', 'text-gray-400');
  });
  if (btn) {
    btn.classList.add('border-amber-400', 'text-amber-400', 'font-bold');
    btn.classList.remove('border-transparent', 'text-gray-400');
  }
  applyFilters();
};

window.filterByBrand = function(brand, btn) {
  activeBrand = brand;
  document.querySelectorAll('.brand-tab-btn').forEach(b => {
    b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
    b.classList.add('bg-white/5', 'text-gray-300');
  });
  if (btn) {
    btn.classList.add('bg-amber-400', 'text-black', 'font-bold');
    btn.classList.remove('bg-white/5', 'text-gray-300');
  }
  applyFilters();
};

window.resetFilters = function() {
  activeCategory = 'all';
  activeBrand = 'all';
  searchQuery = '';
  sortBy = 'default';

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) sortSelect.value = 'default';

  document.querySelectorAll('.cat-tab-btn').forEach((b, i) => {
    if (i === 0) {
      b.classList.add('border-amber-400', 'text-amber-400', 'font-bold');
      b.classList.remove('border-transparent', 'text-gray-400');
    } else {
      b.classList.remove('border-amber-400', 'text-amber-400', 'font-bold');
      b.classList.add('border-transparent', 'text-gray-400');
    }
  });

  document.querySelectorAll('.brand-tab-btn').forEach((b, i) => {
    if (i === 0) {
      b.classList.add('bg-amber-400', 'text-black', 'font-bold');
      b.classList.remove('bg-white/5', 'text-gray-300');
    } else {
      b.classList.remove('bg-amber-400', 'text-black', 'font-bold');
      b.classList.add('bg-white/5', 'text-gray-300');
    }
  });

  applyFilters();
};

// Анимация золотых частиц в Canvas для Hero
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const PARTICLE_COUNT = 20;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25 - 0.1,
      opacity: Math.random() * 0.4 + 0.1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.35})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog(CARS_DATA);
  initHeroCanvas();

  if (window.initCreditCalculator) window.initCreditCalculator();
  if (window.initTradeInWizard) window.initTradeInWizard();

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      applyFilters();
    });
  }

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
