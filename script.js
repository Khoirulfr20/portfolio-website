/* ════════════════════════════════════════
   KHOIRUL FAJAR ROMADHON — Portfolio JS
   ════════════════════════════════════════ */

// Language translations
const translations = {
  id: {
    // Ticker
    ticker1: "⚡ TERBUKA UNTUK KERJA",
    ticker2: "★ FULL STACK DEVELOPER",
    ticker3: "☕ PECINTA TEH",
    ticker4: "⚡ KHOIRUL FAJAR ROMADHON",
    ticker5: "★ TERBUKA KOLABORASI",
    ticker6: "☕ BANGUN. KIRIM. ULANGI.",
    // Header
    portfolioLabel: "Portfolio — 2025",
    headerTagline: "Full Stack Developer &amp; Pecinta Teh<br />Membangun aplikasi web dari<br />frontend hingga backend — satu cangkir setiap saat.",
    helloLabel: "Halo!",
    statusOpen: "TERBUKA UNTUK KERJA",
    statusRole: "Full Stack Developer",
    statusTea: "Didukung oleh Teh",
    // Navigation
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navExp: "Pengalaman",
    navProjects: "Proyek",
    navCerts: "Sertifikat",
    navContact: "Kontak",
    // About
    aboutTitle: "Tentang",
    aboutTitleEm: "Saya",
    aboutP1:
      "Halo! Saya <strong>Khoirul Fajar Romadhon</strong>, seorang Full Stack Developer yang penuh semangat dari Indonesia yang suka mengubah ide menjadi aplikasi web yang fungsional dan terstruktur dengan baik — dari frontend yang intuitif hingga arsitektur backend yang kokoh.",
    aboutP2:
      "Saya percaya bahwa <strong>kode yang hebat</strong> bukan hanya kode yang berfungsi, tetapi kode yang mudah dibaca, mudah dipelihara, dan dibangun untuk berkembang. Setiap proyek adalah kesempatan untuk mempelajari sesuatu yang baru dan berkembang sebagai seorang insinyur.",
    aboutP3: "Di luar coding, saya seorang <strong>Pecinta Teh</strong> yang yakin bahwa secangkir teh yang tepat dapat menyelesaikan bug apa pun. (Atau setidaknya membuat debugging menjadi lebih menyenangkan.)",
    statProjects: "Proyek Selesai",
    statTea: "Cangkir Teh Dikonsumsi",
    statLearning: "Mode Belajar MENYALA",
    // Skills
    skillsTitle: "Keahlian",
    skillsTitleEm: "Saya",
    skillFrontend: "Frontend",
    skillBackend: "Backend",
    skillDatabase: "Database",
    skillTools: "Alat &amp; Mobile",
    // Experience
    expTitle: "Perjalanan",
    expTitleEm: "Saya",
    expRole: "Mahasiswa Informatika",
    expDesc: "Mempelajari dasar-dasar ilmu komputer, pengembangan web, dan rekayasa perangkat lunak. Aktif membangun proyek portfolio dan berpartisipasi dalam komunitas teknologi kampus.",
    expTag1: "Akademik",
    expTag2: "Web Dev",
    // Projects
    projectsTitle: "Proyek",
    projectsTitleEm: "Saya",
    project1Tag: "Full Stack · Proyek Utama",
    project1Desc:
      "Penanganan surat secara manual sering mengakibatkan dokumen hilang dan proses persetujuan yang lambat. Platform digital hadir untuk menyediakan ruang manajemen korespondensi dari awal hingga akhir sebagai jalan keluar dari masalah tersebut. Sistem ini memudahkan berbagi hak akses berbasis peran, mengatur alur kerja persetujuan, dan melacak posisi surat secara langsung.",
    project2Tag: "AI + Chatbot",
    project2Desc:
      "Banyak pelanggan kendaraan listrik membutuhkan informasi instan di luar jam kerja resmi. Integrasi chatbot berbasis NLP di Google Sites memberikan bantuan otomatis 24 jam. Sistem ini secara cerdas mengenali niat pengguna, menyediakan menu dinamis, dan secara otomatis menjadwalkan pertemuan.",
    project3Tag: "Mobile · Flutter",
    project3Desc:
      "Banyak individu sering mengalami kesulitan dalam memantau pengeluaran lintas platform karena kurangnya alat pemantauan yang memadai. Aplikasi mobile memberikan solusi melalui perencanaan keuangan serta pemindaian data aktual. Pengguna dapat memanfaatkan fasilitas pengelompokan jenis posting, diagram interaktif, batasan pendanaan bulanan, hingga sinkronisasi cloud.",
    // Certificates
    certsTitle: "Serti",
    certsTitleEm: "fikat",
    cert1Name: "Fullstack Web Development",
    cert2Name: "Mobile Programming with Flutter",
    cert3Name: "Chatbot for Business",
    // Contact
    contactTitle: "Hubungi",
    contactTitleEm: "Saya",
    formHeadline: "Mari Membangun<br />Sesuatu yang <em>Hebat</em><br />Bersama.",
    formName: "Nama",
    formEmail: "Email",
    formPurpose: "Tujuan",
    formPurposePlaceholder: "Pilih tujuan...",
    formPurpose1: "Proyek Freelance",
    formPurpose2: "Kesempatan Full-time",
    formPurpose3: "Kolaborasi",
    formPurpose4: "Konsultasi",
    formPurpose5: "Lainnya",
    formInfo: "Informasi",
    formSubmit: "Kirim Pesan →",
    formNote: "* Saya akan membalas dalam waktu 48 jam — mari ciptakan dampak bersama.",
    waLabel: "Chat via WhatsApp",
    footerCopy: "© 2025 Khoirul Fajar Romadhon — Seluruh hak cipta dilindungi",
  },
  en: {
    ticker1: "⚡ OPEN TO WORK",
    ticker2: "★ FULL STACK DEVELOPER",
    ticker3: "☕ TEA ADDICT",
    ticker4: "⚡ KHOIRUL FAJAR ROMADHON",
    ticker5: "★ OPEN TO COLLABORATION",
    ticker6: "☕ BUILD. SHIP. REPEAT.",
    portfolioLabel: "Portfolio — 2025",
    headerTagline: "Full Stack Developer &amp; Tea Addict<br />Building web applications from<br />frontend to backend — one cup at a time.",
    helloLabel: "Hello!",
    statusOpen: "OPEN TO WORK",
    statusRole: "Full Stack Developer",
    statusTea: "Powered by Tea",
    navAbout: "About",
    navSkills: "Skills",
    navExp: "Experience",
    navProjects: "Projects",
    navCerts: "Certificates",
    navContact: "Contact",
    aboutTitle: "About",
    aboutTitleEm: "Me",
    aboutP1:
      "Hi! I'm <strong>Khoirul Fajar Romadhon</strong>, a passionate Full Stack Developer from Indonesia who loves turning ideas into functional, well-crafted web applications — from intuitive frontends to solid backend architectures.",
    aboutP2: "I believe that <strong>great code</strong> is not just code that works, but code that is readable, maintainable, and built to scale. Every project is an opportunity to learn something new and grow as an engineer.",
    aboutP3: "Outside of coding, I'm an avid <strong>Tea Addict</strong> — convinced that the right cup of tea can solve any bug. (Or at least make debugging a lot more enjoyable.)",
    statProjects: "Projects Completed",
    statTea: "Cups of Tea Consumed",
    statLearning: "Learning Mode ON",
    skillsTitle: "My",
    skillsTitleEm: "Skills",
    skillFrontend: "Frontend",
    skillBackend: "Backend",
    skillDatabase: "Database",
    skillTools: "Tools &amp; Mobile",
    expTitle: "My",
    expTitleEm: "Journey",
    expRole: "Informatics Student",
    expDesc: "Studying computer science fundamentals, web development, and software engineering. Actively building portfolio projects and participating in campus tech communities.",
    expTag1: "Academic",
    expTag2: "Web Dev",
    projectsTitle: "My",
    projectsTitleEm: "Projects",
    project1Tag: "Full Stack · Main Project",
    project1Desc:
      "Manual handling of mail often results in lost documents and slow approval processes. The digital Platform is here to provide a correspondence management space from start to finish as a way out of the problem. The system makes it easy to share role-based access rights, set up approval workflows, and track mail position directly.",
    project2Tag: "AI + Chatbot",
    project2Desc:
      "Many electric vehicle customers need instant information outside of official business hours. You can solve this problem by integrating an NLP-based chatbot on Google Sites to provide 24-hour automated help. The system intelligently recognizes user intentions, provides dynamic menus, and automatically schedules meetings.",
    project3Tag: "Mobile · Flutter",
    project3Desc:
      "Some individuals often experience difficulties in monitoring cross-platform spending due to the lack of adequate monitoring tools. Mobile phone software provides a way out through financial planning as well as actual data scanning. Users can take advantage of post type grouping facilities, interactive diagrams, monthly funding restrictions, to cloud syncing.",
    certsTitle: "Certi",
    certsTitleEm: "ficates",
    cert1Name: "Fullstack Web Development",
    cert2Name: "Mobile Programming with Flutter",
    cert3Name: "Chatbot for Business",
    contactTitle: "Get In",
    contactTitleEm: "Touch",
    formHeadline: "Let's Build<br />Something <em>Great</em><br />Together.",
    formName: "Name",
    formEmail: "Email",
    formPurpose: "Purpose",
    formPurposePlaceholder: "Select a purpose...",
    formPurpose1: "Freelance Project",
    formPurpose2: "Full-time Opportunity",
    formPurpose3: "Collaboration",
    formPurpose4: "Consultation",
    formPurpose5: "Other",
    formInfo: "Information",
    formSubmit: "Send Message →",
    formNote: "* I'll get back to you within 48 hours — let's create impact.",
    waLabel: "Chat on WhatsApp",
    footerCopy: "© 2025 Khoirul Fajar Romadhon — All rights reserved",
  },
};

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Load animation for header elements
  const elements = document.querySelectorAll(".load-animate");
  elements.forEach((el, index) => {
    const delay = el.dataset.delay || index * 0.1;
    setTimeout(() => {
      el.classList.add("loaded");
    }, delay * 150);
  });

  // Load animation for navigation items
  const navItems = document.querySelectorAll("#mainNav a");
  navItems.forEach((item, i) => {
    setTimeout(
      () => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      },
      300 + i * 50,
    );
  });

  // Initialize scroll reveal observer
  initRevealObserver();

  // Initialize language system
  initLanguage();

  // Initialize form handler
  initFormHandler();

  // Initialize active nav highlight
  initActiveNav();
});

function initRevealObserver() {
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
}

function initActiveNav() {
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
}

function initLanguage() {
  const langBtns = document.querySelectorAll(".lang-btn");
  let currentLang = "id";

  function setLanguage(lang) {
    currentLang = lang;

    // Update active button
    langBtns.forEach((btn) => {
      if (btn.dataset.lang === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update all elements with data-key attribute
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.dataset.key;
      if (translations[lang][key]) {
        if (el.tagName === "INPUT" && el.getAttribute("placeholder")) {
          el.setAttribute("placeholder", translations[lang][key]);
        } else if (el.tagName === "TEXTAREA" && el.getAttribute("placeholder")) {
          el.setAttribute("placeholder", translations[lang][key]);
        } else if (el.tagName === "OPTION") {
          el.textContent = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Update options specifically
    document.querySelectorAll("#purpose option").forEach((opt) => {
      const key = opt.dataset.key;
      if (key && translations[lang][key]) {
        opt.textContent = translations[lang][key];
      }
    });

    // Update ticker items
    document.querySelectorAll(".ticker-item").forEach((el) => {
      const key = el.dataset.key;
      if (key && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Set default to Indonesian
  setLanguage("id");
}

function initFormHandler() {
  const form = document.getElementById("contactForm");
  const statusDiv = document.getElementById("formStatus");
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydgAwukdUsb1rnwPmdr1kaAzeXSA7AsP2ZV75PccEFcESb689__7Mc8P-XRpvW3rMC2w/exec";

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
}
