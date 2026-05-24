/* ════════════════════════════════════════
   KHOIRUL FAJAR ROMADHON — Portfolio JS
   ════════════════════════════════════════ */

/* ── 1. SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ── 2. ACTIVE NAV HIGHLIGHT ── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#mainNav a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove("active"));
        const link = document.querySelector(`#mainNav a[href="#${entry.target.id}"]`);
        if (link) link.classList.add("active");
      }
    });
  },
  { threshold: 0.25, rootMargin: "-70px 0px -30% 0px" },
);

sections.forEach((s) => navObserver.observe(s));

/* ── 3. CONTACT FORM ── */
const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("formStatus");

// TODO: Ganti dengan URL Google Apps Script kamu
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydgAwukdUsb1rnwPmdr1kaAzeXSA7AsP2ZV75PccEFcESb689__7Mc8P-XRpvW3rMC2w/exec";

/**
 * Validates a single field — shows error message if empty / invalid.
 * @param {HTMLElement} el - The input element
 * @param {string} msg     - Error message to show
 * @returns {boolean}
 */
function validate(el, msg) {
  const empty = el.value.trim() === "";
  const emailInvalid = el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);

  if (empty || emailInvalid) {
    el.parentElement.querySelector(".error-text").innerText = emailInvalid ? "Invalid email format" : msg;
    return false;
  }
  return true;
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Reset errors
  document.querySelectorAll(".error-text").forEach((el) => (el.innerText = ""));

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const purpose = document.getElementById("purpose");
  const information = document.getElementById("information");

  const isValid = validate(name, "Name is required") & validate(email, "Email is required") & validate(purpose, "Purpose is required") & validate(information, "Information is required");

  if (!isValid) return;

  statusDiv.innerHTML = "⏳ Sending...";
  form.querySelector(".submit-btn").disabled = true;

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        purpose: purpose.value,
        information: information.value,
      }),
    });

    const result = await response.json();

    if (result.result === "success") {
      statusDiv.innerHTML = "✅ Message sent! I'll get back to you soon.";
      form.reset();
    } else {
      statusDiv.innerHTML = "❌ Something went wrong. Please try again.";
    }
  } catch {
    statusDiv.innerHTML = "❌ Connection error. Please try again later.";
  } finally {
    form.querySelector(".submit-btn").disabled = false;
  }
});
