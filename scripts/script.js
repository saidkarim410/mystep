const CONFIG = {
  TELEGRAM_BOT_TOKEN: "8613915198:AAGF1gIcGCWmbbeS7yxHNFbRMgp1sXAPbe0",
  TELEGRAM_CHAT_ID: ["282412631", "7897913022"],
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxXC7fFPXF5g-Z2Ly9aGCAzhjK-fjKq83kG2UuTdT8-gX6ub1WrY4wgA_WKRvZ-iEX_Vg/exec", 
};

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
    `🆕 *Новая заявка — MyStep*\n\n` +
    `👤 *Имя:* ${d.name}\n` +
    `📱 *Телефон:* +998 ${d.phone}\n` +
    `📚 *Курс:* ${d.course}\n` +
    `🎂 *Возраст:* ${d.age || "—"}\n` +
    `⏰ *Удобное время:* ${d.callTime || "—"}\n` +
    `🌐 *Источник:* ${d.source}\n` +
    `📅 *Дата:* ${d.date}`;
  try {
    const r = await fetch(
      `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CONFIG.TELEGRAM_CHAT_ID,
          text: msg,
          parse_mode: "Markdown",
        }),
      },
    );
    return r.ok;
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
    formData.append("callTime", d.callTime || "");
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

const callLabels = {
  morning: "Утром (9–12)",
  afternoon: "Днём (12–17)",
  evening: "Вечером (17–20)",
  anytime: "В любое время",
};

// Submit
document
  .getElementById("registrationForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn = document.getElementById("submitBtn");
    btn.disabled = true;
    btn.textContent = "Отправляем...";

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
      callTime: callLabels[document.getElementById("callTime").value] || "",
      source: src,
      date: new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" }),
    };

    await Promise.allSettled([sendToTelegram(data), sendToGoogleSheets(data)]);
    document.getElementById("successModal").classList.add("active");
    btn.disabled = false;
    btn.textContent = "Записаться на пробный урок →";
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
