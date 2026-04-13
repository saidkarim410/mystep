const CONFIG = {
  TELEGRAM_BOT_TOKEN: "8613915198:AAGF1gIcGCWmbbeS7yxHNFbRMgp1sXAPbe0",
  TELEGRAM_CHAT_ID: ["282412631", "7897913022", "-1003883620870"],
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbypM0HY18JwFBVht5Kt7kT2BTQ-37TND3WZlRwNohsN_Hq20u3Xvg_BkyyUloD12yNP/exec", 
};

const TRANSLATIONS = {
  ru: {
    pageTitle: "MyStep Education Center",
    pageDescription:
      "MyStep — учебный центр в Ташкенте. IELTS, General English, SAT, Math, ОГП. Запишитесь на бесплатный пробный урок!",
    heroBadge: "Идёт набор на новый поток",
    heroTitle:
      'Сделай свой <span class="highlight">первый шаг</span> к высокому баллу',
    heroSubtitle:
      "Запишитесь на бесплатный пробный урок в учебном центре MyStep. IELTS, SAT, General English, Математика и ОГП — всё в одном месте.",
    statStudents: "учеников",
    statIelts: "IELTS результат",
    statRecommend: "поступаемость",
    formTitle: "Записаться на пробный урок",
    formSubtitle: "Заполните форму — мы перезвоним за 30 минут",
    nameLabel: "Ваше имя *",
    namePlaceholder: "Введите ваше имя",
    phoneLabel: "Номер телефона *",
    courseLabel: "Курс *",
    ageLabel: "Возраст",
    cityLabel: "В каком городе вы находитесь?",
    submitButton: "Записаться на пробный урок →",
    formFooter:
      "Нажимая кнопку, вы соглашаетесь на обработку персональных данных",
    nameError: "Пожалуйста, введите ваше имя",
    phoneError: "Введите корректный номер телефона",
    courseError: "Выберите курс",
    coursesTag: "Направления",
    coursesTitle: "Наши курсы",
    courseNames: ["IELTS", "General English", "SAT", "Математика", "ОГП"],
    courseDescriptions: [
      "Подготовка к международному экзамену с опытными преподавателями",
      "Английский язык с нуля до продвинутого уровня",
      "Подготовка к экзамену для поступления в зарубежные вузы",
      "Школьная и олимпиадная математика для всех уровней",
      "Подготовка к тестам по основам государства и права",
    ],
    whyTag: "Преимущества",
    whyTitle: "Почему MyStep?",
    whyTitles: [
      "Сильные преподаватели",
      "Результат в баллах",
      "Мини-группы",
      "Mock-экзамены",
    ],
    whyDescriptions: [
      "Опытные педагоги с высокими баллами и международными сертификатами",
      "Отслеживаем прогресс каждого ученика и гарантируем рост",
      "Небольшие группы — персональное внимание каждому ученику",
      "Регулярные пробные экзамены в формате реального теста",
    ],
    locationTag: "Локация",
    locationTitle: "Наш адрес",
    mapOverlay: "📍 Нажмите, чтобы открыть карту",
    mapButtons: ["🗺 Яндекс Карты", "📍 Google Maps", "🏙 2GIS"],
    addressTitle: "Адрес",
    addressText: "Юнусабадский р-н, пр. Амира Темура 129Б, м. Шахристан",
    phoneTitle: "Телефон",
    workTitle: "Режим работы",
    workText: "Пн–Сб: 9:00 – 20:00",
    ctaTitle: "Готовы начать?",
    ctaText: "Первый пробный урок — бесплатно. Убедитесь в качестве сами.",
    ctaBtn: "Записаться бесплатно",
    footerRights: "© 2026 MyStep Education Center. Все права защищены.",
    footerCall: "Позвонить",
    modalTitle: "Заявка отправлена!",
    modalText:
      "Спасибо за запись! Наш менеджер перезвонит вам в ближайшее время для подтверждения пробного урока.",
    modalButton: "Отлично!",
    sending: "Отправляем...",
    courseOptions: [
      { value: "", label: "Выберите курс", disabled: true },
      { value: "IELTS", label: "IELTS" },
      { value: "General English", label: "General English" },
      { value: "SAT", label: "SAT" },
      { value: "Math", label: "Математика" },
      { value: "ОГП", label: "ОГП" },
    ],
    ageOptions: [
      { value: "", label: "Ваш возраст", disabled: true },
      { value: "10-14", label: "10–14 лет" },
      { value: "15-17", label: "15–17 лет" },
      { value: "18-25", label: "18–25 лет" },
      { value: "25+", label: "25+ лет" },
    ],
    cityOptions: [
      { value: "", label: "Выберите город/регион", disabled: true },
      { value: "Tashkent City", label: "Tashkent City" },
      { value: "Tashkent Region", label: "Tashkent Region" },
      { value: "Andijan", label: "Andijan" },
      { value: "Bukhara", label: "Bukhara" },
      { value: "Fergana", label: "Fergana" },
      { value: "Jizzakh", label: "Jizzakh" },
      { value: "Khorezm", label: "Khorezm" },
      { value: "Namangan", label: "Namangan" },
      { value: "Navoiy", label: "Navoiy" },
      { value: "Qashqadaryo", label: "Qashqadaryo" },
      { value: "Karakalpakstan", label: "Karakalpakstan" },
      { value: "Samarkand", label: "Samarkand" },
      { value: "Sirdaryo", label: "Sirdaryo" },
      { value: "Surkhandarya", label: "Surkhandarya" },
      { value: "Kokand", label: "Kokand" },
      { value: "Gulistan", label: "Gulistan" },
      { value: "Other", label: "Other" },
    ],
  },
  uz: {
    pageTitle: "MyStep O'quv Markazi",
    pageDescription:
      "MyStep — Toshkentdagi o'quv markazi. IELTS, General English, SAT, Matematika, OGP. Bepul sinov darsiga yoziling!",
    heroBadge: "Yangi guruhga qabul davom etmoqda",
    heroTitle:
      'Yuqori natija sari <span class="highlight">birinchi</span> qadamingizni qo\'ying',
    heroSubtitle:
      "MyStep o'quv markazida bepul sinov darsiga yoziling. IELTS, SAT, General English, Matematika va OGP — barchasi bir joyda.",
    statStudents: "o'quvchi",
    statIelts: "IELTS natija",
    statRecommend: "kirish foizi",
    formTitle: "Sinov darsiga yozilish",
    formSubtitle: "Formani to'ldiring — 30 daqiqada bog'lanamiz",
    nameLabel: "Ismingiz *",
    namePlaceholder: "Ismingizni kiriting",
    phoneLabel: "Telefon raqami *",
    courseLabel: "Kurs *",
    ageLabel: "Yosh",
    cityLabel: "Qaysi shahardansiz?",
    submitButton: "Sinov darsiga yozilish →",
    formFooter:
      "Tugmani bosish orqali shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz",
    nameError: "Iltimos, ismingizni kiriting",
    phoneError: "To'g'ri telefon raqamini kiriting",
    courseError: "Kursni tanlang",
    coursesTag: "Yo'nalishlar",
    coursesTitle: "Bizning kurslar",
    courseNames: ["IELTS", "General English", "SAT", "Matematika", "OGP"],
    courseDescriptions: [
      "Xalqaro imtihonga tajribali ustozlar bilan tayyorgarlik",
      "Ingliz tili noldan yuqori darajagacha",
      "Xorijiy universitetlarga kirish imtihoniga tayyorgarlik",
      "Maktab va olimpiada matematikasi barcha darajalar uchun",
      "Davlat va huquq asoslari testlariga tayyorgarlik",
    ],
    whyTag: "Afzalliklar",
    whyTitle: "Nega aynan MyStep?",
    whyTitles: [
      "Kuchli o'qituvchilar",
      "Natija ballarda",
      "Mini-guruhlar",
      "Mock-imtihonlar",
    ],
    whyDescriptions: [
      "Yuqori natijali va xalqaro sertifikatli tajribali ustozlar",
      "Har bir o'quvchi progressini kuzatamiz va o'sishni kafolatlaymiz",
      "Kichik guruhlar — har bir o'quvchiga individual e'tibor",
      "Real imtihon formatida muntazam sinov imtihonlari",
    ],
    locationTag: "Manzil",
    locationTitle: "Bizning manzil",
    mapOverlay: "📍 Xarita ochish uchun bosing",
    mapButtons: ["🗺 Yandex Xaritalar", "📍 Google Maps", "🏙 2GIS"],
    addressTitle: "Manzil",
    addressText: "Yunusobod tumani, Amir Temur ko'chasi 129B, Shahriston metro",
    phoneTitle: "Telefon",
    workTitle: "Ish vaqti",
    workText: "Dush–Shan: 9:00 – 20:00",
    ctaTitle: "Boshlashga tayyormisiz?",
    ctaText: "Birinchi sinov darsi — bepul. Sifatni o'zingiz baholang.",
    ctaBtn: "Bepul yozilish",
    footerRights: "© 2026 MyStep Education Center. Barcha huquqlar himoyalangan.",
    footerCall: "Qo'ng'iroq qilish",
    modalTitle: "Ariza yuborildi!",
    modalText:
      "Yozilganingiz uchun rahmat! Menejerimiz tez orada sinov darsini tasdiqlash uchun siz bilan bog'lanadi.",
    modalButton: "Ajoyib!",
    sending: "Yuborilmoqda...",
    courseOptions: [
      { value: "", label: "Kursni tanlang", disabled: true },
      { value: "IELTS", label: "IELTS" },
      { value: "General English", label: "General English" },
      { value: "SAT", label: "SAT" },
      { value: "Math", label: "Matematika" },
      { value: "ОГП", label: "OGP" },
    ],
    ageOptions: [
      { value: "", label: "Yoshingiz", disabled: true },
      { value: "10-14", label: "10–14 yosh" },
      { value: "15-17", label: "15–17 yosh" },
      { value: "18-25", label: "18–25 yosh" },
      { value: "25+", label: "25+ yosh" },
    ],
    cityOptions: [
      { value: "", label: "Shahar/hududni tanlang", disabled: true },
      { value: "Tashkent City", label: "Toshkent shahri" },
      { value: "Tashkent Region", label: "Toshkent viloyati" },
      { value: "Andijan", label: "Andijon" },
      { value: "Bukhara", label: "Buxoro" },
      { value: "Fergana", label: "Farg'ona" },
      { value: "Jizzakh", label: "Jizzax" },
      { value: "Khorezm", label: "Xorazm" },
      { value: "Namangan", label: "Namangan" },
      { value: "Navoiy", label: "Navoiy" },
      { value: "Qashqadaryo", label: "Qashqadaryo" },
      { value: "Karakalpakstan", label: "Qoraqalpog'iston" },
      { value: "Samarkand", label: "Samarqand" },
      { value: "Sirdaryo", label: "Sirdaryo" },
      { value: "Surkhandarya", label: "Surxondaryo" },
      { value: "Kokand", label: "Qo'qon" },
      { value: "Gulistan", label: "Guliston" },
      { value: "Other", label: "Boshqa" },
    ],
  },
};

const LANGUAGE_KEY = "mystep_language";
let currentLanguage =
  localStorage.getItem(LANGUAGE_KEY) === "uz" ? "uz" : "ru";

function setSelectOptions(selectId, options) {
  const select = document.getElementById(selectId);
  const currentValue = select.value;
  select.innerHTML = "";
  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    if (item.disabled) {
      option.disabled = true;
    }
    select.appendChild(option);
  });
  if (currentValue && options.some((item) => item.value === currentValue)) {
    select.value = currentValue;
  } else {
    select.selectedIndex = 0;
  }
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];

  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", t.pageDescription);

  document.querySelector(".hero-badge").lastChild.textContent = ` ${t.heroBadge}`;
  document.querySelector(".hero-title").innerHTML = t.heroTitle;
  document.querySelector(".hero-subtitle").textContent = t.heroSubtitle;
  document.querySelectorAll(".stat-label")[0].textContent = t.statStudents;
  document.querySelectorAll(".stat-label")[1].textContent = t.statIelts;
  document.querySelectorAll(".stat-label")[2].textContent = t.statRecommend;

  document.querySelector(".form-title").textContent = t.formTitle;
  document.querySelector(".form-subtitle").textContent = t.formSubtitle;
  document.querySelector('label[for="name"], #name').previousElementSibling.textContent =
    t.nameLabel;
  document.getElementById("name").placeholder = t.namePlaceholder;
  document
    .querySelector('label[for="phone"], #phoneWrapper')
    .previousElementSibling.textContent = t.phoneLabel;
  document.getElementById("course").previousElementSibling.textContent =
    t.courseLabel;
  document.getElementById("age").previousElementSibling.textContent = t.ageLabel;
  document.getElementById("city").previousElementSibling.textContent = t.cityLabel;
  document.getElementById("submitBtn").textContent = t.submitButton;
  document.querySelector(".form-footer").textContent = t.formFooter;

  document.getElementById("nameError").textContent = t.nameError;
  document.getElementById("phoneError").textContent = t.phoneError;
  document.getElementById("courseError").textContent = t.courseError;

  setSelectOptions("course", t.courseOptions);
  setSelectOptions("age", t.ageOptions);
  setSelectOptions("city", t.cityOptions);

  document.querySelectorAll(".section-tag")[0].textContent = t.coursesTag;
  document.querySelectorAll(".section-title")[0].textContent = t.coursesTitle;
  document.querySelectorAll(".course-name").forEach((el, i) => {
    el.textContent = t.courseNames[i];
  });
  document.querySelectorAll(".course-desc").forEach((el, i) => {
    el.textContent = t.courseDescriptions[i];
  });
  document.querySelectorAll(".section-tag")[1].textContent = t.whyTag;
  document.querySelectorAll(".section-title")[1].textContent = t.whyTitle;
  document.querySelectorAll(".why-title").forEach((el, i) => {
    el.textContent = t.whyTitles[i];
  });
  document.querySelectorAll(".why-desc").forEach((el, i) => {
    el.textContent = t.whyDescriptions[i];
  });
  document.querySelectorAll(".section-tag")[2].textContent = t.locationTag;
  document.querySelectorAll(".section-title")[2].textContent = t.locationTitle;
  document.querySelector(".map-overlay span").textContent = t.mapOverlay;
  document.querySelectorAll(".map-btn").forEach((el, i) => {
    el.textContent = t.mapButtons[i];
  });
  document.querySelectorAll(".location-detail strong")[0].textContent = t.addressTitle;
  document.querySelectorAll(".location-detail strong")[1].textContent = t.phoneTitle;
  document.querySelectorAll(".location-detail strong")[2].textContent = t.workTitle;
  document.querySelectorAll(".location-detail strong")[0].nextSibling.textContent =
    ` ${t.addressText}`;
  document.querySelectorAll(".location-detail strong")[2].nextSibling.textContent =
    ` ${t.workText}`;

  document.querySelector(".cta-title").textContent = t.ctaTitle;
  document.querySelector(".cta-text").textContent = t.ctaText;
  document.querySelector(".cta-btn").childNodes[0].textContent = ` ${t.ctaBtn} `;

  document.querySelector(".footer-inner > div").textContent = t.footerRights;
  document.querySelectorAll(".footer-links a")[1].textContent = t.footerCall;

  document.querySelector(".modal-title").textContent = t.modalTitle;
  document.querySelector(".modal-text").textContent = t.modalText;
  document.querySelector(".modal-close").textContent = t.modalButton;
}

// Header scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Phone formatting
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", (e) => {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length > 9) v = v.slice(0, 9);
  if (v.length > 7)
    v =
      v.slice(0, 2) +
      " " +
      v.slice(2, 5) +
      " " +
      v.slice(5, 7) +
      " " +
      v.slice(7);
  else if (v.length > 5)
    v = v.slice(0, 2) + " " + v.slice(2, 5) + " " + v.slice(5);
  else if (v.length > 2) v = v.slice(0, 2) + " " + v.slice(2);
  e.target.value = v;
});

// Validation
function validateForm() {
  let ok = true;
  const n = document.getElementById("name");
  const p = document.getElementById("phone");
  const c = document.getElementById("course");
  const pw = document.getElementById("phoneWrapper");
  [n, c].forEach((el) => el.classList.remove("error"));
  pw.classList.remove("error");
  document
    .querySelectorAll(".form-error")
    .forEach((el) => el.classList.remove("visible"));

  if (!n.value.trim()) {
    n.classList.add("error");
    document.getElementById("nameError").classList.add("visible");
    ok = false;
  }
  if (p.value.replace(/\D/g, "").length < 9) {
    pw.classList.add("error");
    document.getElementById("phoneError").classList.add("visible");
    ok = false;
  }
  if (!c.value) {
    c.classList.add("error");
    document.getElementById("courseError").classList.add("visible");
    ok = false;
  }
  return ok;
}

// Send to Telegram
async function sendToTelegram(d) {
  const msg =
    `📩 Новая заявка - MyStep - MyStep\n\n` +
    `👤 Имя: ${d.name}\n` +
    `📞 Телефон: +998 ${d.phone}\n` +
    `📚 Курс: ${d.course}\n` +
    `🎂 Возраст: ${d.age || "не указан"}\n` +
    `🏙 Город: ${d.city || "не указан"}\n` +
    `🌐 Источник: ${d.source}\n` +
    `📅 Дата: ${d.date}`;
  try {
    for (const id of CONFIG.TELEGRAM_CHAT_ID) {
      const r = await fetch(
        `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: id,
            text: msg,
          }),
        },
      );
      const result = await r.json();
      console.log(`TG response for ${id}:`, result);
    }
    return true;
  } catch (e) {
    console.error("TG err:", e);
    return false;
  }
}

// Send to Google Sheets
async function sendToGoogleSheets(d) {
  if (!CONFIG.GOOGLE_SCRIPT_URL) return false;
  try {
    const formData = new URLSearchParams();
    formData.append("name", d.name);
    formData.append("phone", "+998 " + d.phone);
    formData.append("course", d.course);
    formData.append("age", d.age || "");
    formData.append("city", d.city || "");
    formData.append("source", d.source);
    formData.append("date", d.date);

    await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    return true;
  } catch (e) {
    console.error("GS err:", e);
    return false;
  }
}

// Submit
document
  .getElementById("registrationForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn = document.getElementById("submitBtn");
    btn.disabled = true;
    btn.textContent = TRANSLATIONS[currentLanguage].sending;

    const u = new URLSearchParams(window.location.search);
    const src = [
      u.get("utm_source") || "direct",
      u.get("utm_medium") || "",
      u.get("utm_content") || "",
    ]
      .filter(Boolean)
      .join(" / ");

    const data = {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value,
      course: document.getElementById("course").value,
      age: document.getElementById("age").value || "",
      city: document.getElementById("city").value || "",
      source: src,
      date: new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" }),
    };

    await Promise.allSettled([sendToTelegram(data), sendToGoogleSheets(data)]);
    document.getElementById("successModal").classList.add("active");
    btn.disabled = false;
    btn.textContent = TRANSLATIONS[currentLanguage].submitButton;
    document.getElementById("registrationForm").reset();
  });

function closeModal() {
  document.getElementById("successModal").classList.remove("active");
}
document.getElementById("successModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// Scroll animations
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.style.opacity = "1";
        en.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);
document.querySelectorAll(".course-card, .why-item").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";
  obs.observe(el);
});

const langSwitcher = document.getElementById("langSwitcher");
langSwitcher.value = currentLanguage;
applyLanguage(currentLanguage);

langSwitcher.addEventListener("change", (e) => {
  currentLanguage = e.target.value === "uz" ? "uz" : "ru";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  applyLanguage(currentLanguage);
});
