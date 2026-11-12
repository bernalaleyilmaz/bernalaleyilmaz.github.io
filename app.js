// Proje açıklamaları, bağlantılar ve GitHub dil verileri (TR / EN destekli).
const projects = [
  {
    title: "Kitap Öneri Sistemi",
    titleEn: "Book Recommendation System",
    icon: "▤",
    desc: "Kitapları keşfetmek, puanlamak ve okuma tercihlerine göre öneriler almak için React ve FastAPI ile geliştirilmiş uygulama.",
    descEn:
      "Full-stack application built with React and FastAPI to discover, rate, and get personalized book recommendations.",
    tech: ["React", "FastAPI", "SQLite", "scikit-learn"],
    detail:
      "Kitap kataloğunda arama, filtreleme ve sıralama; kullanıcı hesabı, puanlama ve yorum özellikleri içeriyor. Öneriler TF-IDF ve kosinüs benzerliğiyle üretiliyor. İsteğe bağlı Gemini entegrasyonu önerilen kitaplar için kısa İngilizce açıklamalar oluşturuyor.",
    detailEn:
      "Features book catalog search, filtering, and sorting, user accounts, ratings, and reviews. Recommendations are powered by TF-IDF and cosine similarity, with optional Gemini API integration for generating concise book blurbs.",
    name: "Book-Recommendation",
    url: "https://github.com/bernalaleyilmaz/Book-Recommendation",
    languages: { JavaScript: 98382, Python: 37844, HTML: 360, CSS: 319 },
    language: "JavaScript",
  },
  {
    title: "Pink Sudoku",
    titleEn: "Pink Sudoku",
    icon: "▦",
    desc: "C++ ve SFML ile geliştirilen, pastel pembe arayüze sahip Sudoku oyunu. Yeni tahtalar geri izleme algoritmasıyla oluşturuluyor.",
    descEn:
      "Sudoku desktop game with a pastel pink interface built using C++ and SFML. Generates solvable boards via backtracking.",
    tech: ["C++", "SFML", "Backtracking", "CMake"],
    detail:
      "Fareyle hücre seçimi, klavyeyle sayı girişi, satır-sütun ve 3×3 kutu doğrulaması, üç can sistemi ve yeni oyun özelliği bulunuyor. Geri izleme algoritması önce geçerli bir tahta oluşturuyor; ardından 40 sayı kaldırılarak bulmaca hazırlanıyor.",
    detailEn:
      "Includes mouse cell selection, keyboard number input, row-column and 3×3 box validation, a three-lives system, and new game generation. A backtracking algorithm builds a complete board first and removes 40 cells to create the puzzle.",
    name: "Pink-Sudoku",
    url: "https://github.com/bernalaleyilmaz/Pink-Sudoku",
    languages: { "C++": 10168, CMake: 311 },
    language: "C++",
  },
  {
    title: "Hashing Performans Analizi",
    titleEn: "Hashing Performance Analysis",
    icon: "⌘",
    desc: "Cuckoo Hashing ve Linear Probing yöntemlerini farklı iş yükleri ve doluluk oranlarında karşılaştıran Java projesi.",
    descEn:
      "Java project comparing Cuckoo Hashing and Linear Probing collision resolution across workloads and load factors.",
    tech: ["Java", "Cuckoo Hashing", "Linear Probing"],
    detail:
      "Hash tablolarındaki iki farklı çakışma çözümünün performansını karşılaştırıyor. GitHub depo açıklaması, farklı iş yükleri ve doluluk oranları altında karşılaştırmalı analize odaklandığını belirtiyor.",
    detailEn:
      "Compares two hash table collision resolution strategies under varying workloads and load factors, measuring lookup, insertion, and rehashing performance.",
    name: "CuckooHashingProject.java",
    url: "https://github.com/bernalaleyilmaz/CuckooHashingProject.java",
    languages: { Java: 21931 },
    language: "Java",
  },
  {
    title: "Film Öneri Sistemi",
    titleEn: "Movie Recommendation System",
    icon: "▷",
    desc: "Film bilgilerinden benzer yapımları bulan Python uygulaması. TF-IDF, kosinüs benzerliği ve Tkinter arayüzünü birleştiriyor.",
    descEn:
      "Python application that finds similar movies from metadata using TF-IDF, cosine similarity, and a Tkinter GUI.",
    tech: ["Python", "Pandas", "scikit-learn", "Tkinter"],
    detail:
      "Film türü, oyuncu kadrosu ve özetlerini sayısal vektörlere dönüştürerek girilen filme benzer beş yapım öneriyor. Pandas ile veri işleme, difflib ile yazım hatalarını ele alma ve Tkinter ile basit bir arayüz içeriyor.",
    detailEn:
      "Converts genres, cast, and plot summaries into numerical vectors to recommend five similar movies. Uses Pandas for preprocessing, difflib for typo tolerance, and Tkinter for the desktop interface.",
    name: "movie_recommendation_system",
    url: "https://github.com/bernalaleyilmaz/movie_recommendation_system",
    languages: { Python: 2099 },
    language: "Python",
  },
  {
    title: "GitHub Profil Analizörü",
    titleEn: "GitHub Profile Analyzer",
    icon: "⌁",
    desc: "GitHub profillerindeki depoları, yıldızları ve kullanılan dilleri grafiklerle inceleyen Python projesi.",
    descEn:
      "Python tool that analyzes and visualizes GitHub repositories, stars, and language distributions with charts.",
    tech: ["Python", "Veri analizi", "Grafikler"],
    detail:
      "Toplam depo ve yıldız bilgilerini gösteriyor, en iyi beş depoyu listeliyor, dil dağılımını pasta grafikle ve popüler depoları çubuk grafikle görselleştiriyor.",
    detailEn:
      "Displays total repositories and stars, lists the top five repositories, and visualizes language distribution with pie charts and repository popularity with bar charts.",
    name: "github-profile-analyzer",
    url: "https://github.com/bernalaleyilmaz/github-profile-analyzer",
    languages: { Python: 1496 },
    language: "Python",
  },
  {
    title: "CSQuiz – Bilgisayar Bilimleri Quiz Sistemi",
    titleEn: "CSQuiz – Computer Science Quiz System",
    icon: "▣",
    desc: "Yapay zekâ, veritabanları ve API konularında 150 soru içeren, Python ve SQLite ile geliştirilmiş quiz sistemi.",
    descEn:
      "Quiz platform featuring 150 questions on AI, databases, and APIs, built with Python and a relational SQLite schema.",
    tech: ["Python", "SQL", "SQLite", "JavaScript"],
    detail:
      "Sistem, her biri 30 soruluk beş quiz oturumu içeriyor. SQLite şeması kullanıcıları, oturumları, soruları ve cevapları ilişkili tablolarda saklıyor. SQL sorguları ilerlemeyi, puanları ve sıralamayı hesaplıyor; kısıtlar ve tetikleyiciler veri bütünlüğünü koruyor. Oturum yöneticisi quizleri başlatabiliyor ve sonuçları görüntüleyebiliyor.",
    detailEn:
      "Contains five quiz sessions of 30 questions each. The relational SQLite schema stores users, sessions, questions, and answers with constraints and triggers ensuring data integrity while SQL queries compute progress, scores, and leaderboards.",
    name: "Computer_Science_Quiz_System",
    url: "https://github.com/bernalaleyilmaz/Computer_Science_Quiz_System",
    languages: {
      Python: 72220,
      JavaScript: 43612,
      CSS: 33006,
      HTML: 3474,
    },
    language: "Python",
  },
];

let currentLang = localStorage.getItem("bly-lang") || "tr";

// TR ve EN metin sözlüğü
const i18n = {
  tr: {
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.projects": "Projelerim",
    "nav.contact": "İletişim • bernayilmaz579@gmail.com",
    "hero.eyebrow": "Kişisel dünyama hoş geldin",
    "hero.title": "Merhaba,<br />ben <em>Berna Lale</em><br />Yılmaz.",
    "hero.intro":
      "Beni, fikirlerimi ve projelerimi bir araya getiren küçük bir dijital alan. Burada hikâyemi keşfedebilirsin.",
    "hero.cta": 'Projelerimi keşfet <span aria-hidden="true">↗</span>',
    "hero.cv": 'Özgeçmiş (CV) <span aria-hidden="true">↓</span>',
    "hero.more": "Beni tanı",
    "hero.scroll": 'HİKÂYEMİ KEŞFET <span aria-hidden="true">↓</span>',
    ribbon: '<a href="#hakkimda">HİKÂYEM</a> <b>✳</b> <a href="#projelerim">PROJELER</a>',
    "about.eyebrow": "01 / Hakkımda",
    "about.title": "Kendi hikâyemi<br /><em>yazıyorum.</em>",
    "about.cvBtn": 'Özgeçmiş (CV) <span aria-hidden="true">↓</span>',
    "about.p1":
      "Ben Berna Lale Yılmaz. Bu site, kendimi tanıtmak ve üzerinde çalıştığım projeleri paylaşmak için hazırladığım kişisel portfolyom.",
    "about.p2":
      "İstanbul Bilgi Üniversitesinde Bilgisayar Mühendisliği okuyorum. 3. sınıf öğrencisiyim. Java, Python ve C++ dillerini biliyorum. Yapay zekâ, Veri bilimi, Makine öğrenimi ve DevOps alanında kendimi geliştiriyorum.",
    "about.tag1": "Hikâyem",
    "about.tag2": "İlgi alanlarım",
    "about.tag3": "Hedeflerim",
    "timeline.title": "Eğitim &amp; <em>Yolculuğum</em>",
    "timeline.t1.date": "2026 – Günümüz • 3. Sınıf",
    "timeline.t1.title": "Yapay Zekâ, Veri Bilimi & DevOps Odaklı Gelişim",
    "timeline.t1.desc":
      "Makine öğrenimi tabanlı öneri sistemleri, ilişkisel veritabanı mimarisi (PostgreSQL/SQLite) ve modern DevOps süreçleri üzerine projeler geliştiriyorum.",
    "timeline.t2.date": "2025 – 2026 • 2. Sınıf",
    "timeline.t2.title": "Algoritmalar, Veri Yapıları & Sistem Programlama",
    "timeline.t2.desc":
      "Java ile performans analizleri, C++ ile projeler geliştirme, Algoritmalar ile geliştirmeler.",
    "timeline.t3.date": "2024 – 2025 • 1. Sınıf",
    "timeline.t3.title": "İstanbul Bilgi Üniversitesi • Bilgisayar Mühendisliği",
    "timeline.t3.desc":
      "Mühendislik, Fizik ve Matematik temelleri, nesne yönelimli programlama ve yazılım geliştirmeye ilk adım.",
    "timeline.t4.date": "2023 – 2024 • Hazırlık",
    "timeline.t4.title": "İstanbul Bilgi Üniversitesi • İngilizce Hazırlık",
    "timeline.t4.desc":
      "İngilizce hazırlık programını başarıyla tamamladım; ileri seviye (Advanced) İngilizce okuma, yazma ve iletişim yetkinliği kazandım.",
    "skills.eyebrow": "02 / Yetenekler & Odak",
    "skills.title": "Teknoloji <em>yığınım.</em>",
    "skills.subtitle":
      "Projelerimde aktif kullandığım programlama dilleri, kütüphaneler ve mühendislik araçları.",
    "skills.c1.sub": "TEMEL DİLLER",
    "skills.c1.title": "Programlama Dilleri",
    "skills.c1.desc":
      "Nesne yönelimli programlama, veri yapıları, algoritma analizi ve uygulama geliştirme.",
    "skills.c2.sub": "VERİ & MODELLER",
    "skills.c2.title": "Yapay Zekâ & Veri Bilimi",
    "skills.c2.desc":
      "Öneri sistemleri, metin madenciliği, veri ön işleme ve istatistiksel görselleştirme.",
    "skills.c3.sub": "UYGULAMA & VERİTABANI",
    "skills.c3.title": "Web & Sistem Mimarisi",
    "skills.c3.desc":
      "Modern kullanıcı arayüzleri, hızlı arka uç API servisleri ve ilişkisel veritabanı şemaları.",
    "skills.c4.sub": "ARAÇLAR & SÜREÇ",
    "skills.c4.title": "Geliştirme & DevOps",
    "skills.c4.desc":
      "Sürüm kontrolü, proje derleme araçları ve modern yazılım geliştirme süreçleri.",
    "skills.c4.p3": "DevOps Temelleri",
    "now.badge": "● ŞU SIRALAR NELER ÖĞRENİYORUM?",
    "now.title": "Güncel odak &amp; <em>öğrenme notlarım</em>",
    "now.date": "Güncelleme: 2026",
    "now.n1.tag": "MAKİNE ÖĞRENİMİ & AI",
    "now.n1.title": "Derinleşen Öneri Sistemleri & NLP",
    "now.n1.desc":
      "İçerik tabanlı filtrelemenin ötesine geçerek hibrit öneri modelleri, vektör temsilleri (embeddings) ve büyük dil modeli (LLM) entegrasyonları üzerine çalışıyorum.",
    "now.n2.tag": "DEVOPS & YAZILIM SÜREÇLERİ",
    "now.n2.title": "DevOps Temelleri & Git İş Akışları",
    "now.n2.desc":
      "Modern yazılım geliştirme yaşam döngüsü, sürüm kontrol stratejileri ve projelerde otomatik süreç yönetimi (DevOps) kültürünü öğreniyorum.",
    "now.n3.tag": "VERİ BİLİMİ & POSTGRESQL",
    "now.n3.title": "Veri Mühendisliği & Sorgu Optimizasyonu",
    "now.n3.desc":
      "Çok tablolu ilişkisel veritabanlarında tetikleyiciler (triggers), karmaşık analitik sorgular ve veri bütünlüğü yapıları üzerinde pratik yapıyorum.",
    "projects.eyebrow": "03 / Projelerim",
    "projects.title": "Fikirden <em>gerçeğe.</em>",
    "projects.subtitle": "GitHub’daki herkese açık projelerim.",
    "projects.all": "Tümü (6)",
    "projects.note":
      "Yüzdeler GitHub’ın kod dili istatistiklerini gösterir. SQL filtresi, veritabanı teknolojisi olarak SQL kullanan projeleri listeler.",
    "projects.detailBtn": "Proje detayları ↗",
    "projects.badgePrefix": "GITHUB PROJESİ / 0",
    "contact.eyebrow": "04 / İletişim",
    "contact.title": "Benimle<br /><em>iletişime geç.</em>",
    "contact.desc":
      "Yeni proje fikirleri, staj ve iş birliği fırsatları ya da sadece tanışmak için bana her zaman yazabilirsin. En kısa sürede dönüş yaparım.",
    "contact.emailLabel": "E-POSTA",
    "contact.copy": "Kopyala",
    "contact.copied": "Kopyalandı ✓",
    "contact.locLabel": "KONUM & EĞİTİM",
    "contact.locVal": "İstanbul, Türkiye • İstanbul Bilgi Üniversitesi",
    "contact.formTitle": "Bana mesaj <em>bırak</em>",
    "contact.nameLabel": "Adın Soyadın",
    "contact.namePh": "Örn. Ayşe Yılmaz",
    "contact.emailInputLabel": "E-posta Adresin",
    "contact.emailPh": "ornek@eposta.com",
    "contact.subjectLabel": "Konu",
    "contact.opt1": "Proje & İş Birliği",
    "contact.opt2": "Staj & Kariyer Fırsatı",
    "contact.opt3": "Soru & Görüş",
    "contact.opt4": "Sadece Merhaba Demek İstedim 🌸",
    "contact.msgLabel": "Mesajın",
    "contact.msgPh": "Mesajını buraya yazabilirsin...",
    "contact.sendBtn": 'Mesajı gönder <span aria-hidden="true">↗</span>',
    "contact.status": "Mesajınız hazırlandı, e-posta uygulaması açılıyor ❀",
    "closing.title": "Hikâyem <em>devam ediyor.</em>",
    "closing.text": "Yeni fikirler ve yeni projeler …<br />Hepsi burada bir araya gelecek.",
    "closing.top": "Başa dön ↑",
    "footer.contact": "İletişim",
    "modal.badge": "GITHUB PROJESİ",
    "modal.source": "Kaynak kodunu incele ↗",
    "modal.close": "Kapat",
    "cv.badge": "ÖZGEÇMİŞ / CURRICULUM VITAE",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact • bernayilmaz579@gmail.com",
    "hero.eyebrow": "Welcome to my personal space",
    "hero.title": "Hello,<br />I'm <em>Berna Lale</em><br />Yılmaz.",
    "hero.intro":
      "A cozy digital space bringing together who I am, my ideas, and my engineering projects. Explore my story here.",
    "hero.cta": 'Explore my projects <span aria-hidden="true">↗</span>',
    "hero.cv": 'Resume (CV) <span aria-hidden="true">↓</span>',
    "hero.more": "Get to know me",
    "hero.scroll": 'DISCOVER MY STORY <span aria-hidden="true">↓</span>',
    ribbon: '<a href="#hakkimda">MY STORY</a> <b>✳</b> <a href="#projelerim">PROJECTS</a>',
    "about.eyebrow": "01 / About Me",
    "about.title": "Writing my<br /><em>own story.</em>",
    "about.cvBtn": 'Resume (CV) <span aria-hidden="true">↓</span>',
    "about.p1":
      "I'm Berna Lale Yılmaz. This website is my personal portfolio designed to introduce myself and share the software projects I build.",
    "about.p2":
      "I am a 3rd-year Computer Engineering student at Istanbul Bilgi University. I code in Java, Python, and C++, and actively advance my skills in Artificial Intelligence, Data Science, Machine Learning, and DevOps.",
    "about.tag1": "My Story",
    "about.tag2": "Interests",
    "about.tag3": "Goals",
    "timeline.title": "Education &amp; <em>Journey</em>",
    "timeline.t1.date": "2026 – Present • 3rd Year",
    "timeline.t1.title": "Focus on AI, Data Science & DevOps",
    "timeline.t1.desc":
      "Developing machine learning recommendation systems, relational database architectures (PostgreSQL/SQLite), and modern DevOps workflows.",
    "timeline.t2.date": "2025 – 2026 • 2nd Year",
    "timeline.t2.title": "Algorithms, Data Structures & Systems Programming",
    "timeline.t2.desc":
      "Performance benchmarks in Java, software projects in C++, and algorithmic implementations.",
    "timeline.t3.date": "2024 – 2025 • 1st Year",
    "timeline.t3.title": "Istanbul Bilgi University • Computer Engineering",
    "timeline.t3.desc":
      "Foundations in Engineering, Physics, and Mathematics, object-oriented programming, and first steps into software development.",
    "timeline.t4.date": "2023 – 2024 • Prep Year",
    "timeline.t4.title": "Istanbul Bilgi University • English Preparatory Program",
    "timeline.t4.desc":
      "Successfully completed the English Preparatory Program, achieving advanced proficiency in reading, writing, and technical communication.",
    "skills.eyebrow": "02 / Skills & Focus",
    "skills.title": "My tech <em>stack.</em>",
    "skills.subtitle":
      "Programming languages, libraries, and engineering tools I actively use in my projects.",
    "skills.c1.sub": "CORE LANGUAGES",
    "skills.c1.title": "Programming Languages",
    "skills.c1.desc":
      "Object-oriented programming, data structures, algorithm analysis, and application development.",
    "skills.c2.sub": "DATA & MODELS",
    "skills.c2.title": "AI & Data Science",
    "skills.c2.desc":
      "Recommendation systems, text mining, data preprocessing, and statistical visualization.",
    "skills.c3.sub": "APPS & DATABASES",
    "skills.c3.title": "Web & System Architecture",
    "skills.c3.desc":
      "Modern user interfaces, fast backend API services, and relational database schemas.",
    "skills.c4.sub": "TOOLS & WORKFLOW",
    "skills.c4.title": "Development & DevOps",
    "skills.c4.desc":
      "Version control, project build tools, and modern software development workflows.",
    "skills.c4.p3": "DevOps Fundamentals",
    "now.badge": "● WHAT I'M LEARNING RIGHT NOW",
    "now.title": "Current focus &amp; <em>learning notes</em>",
    "now.date": "Updated: 2026",
    "now.n1.tag": "MACHINE LEARNING & AI",
    "now.n1.title": "Hybrid Recommendation Systems & NLP",
    "now.n1.desc":
      "Going beyond content-based filtering to explore hybrid recommendation models, vector embeddings, and LLM integrations.",
    "now.n2.tag": "DEVOPS & WORKFLOWS",
    "now.n2.title": "DevOps Fundamentals & Git Workflows",
    "now.n2.desc":
      "Learning the modern software development lifecycle, version control strategies, and automated process management (DevOps) culture.",
    "now.n3.tag": "DATA SCIENCE & POSTGRESQL",
    "now.n3.title": "Data Engineering & Query Optimization",
    "now.n3.desc":
      "Practicing triggers, complex analytical queries, and strict data integrity patterns across multi-table relational databases.",
    "projects.eyebrow": "03 / My Projects",
    "projects.title": "From idea to <em>reality.</em>",
    "projects.subtitle": "My public repositories on GitHub.",
    "projects.all": "All (6)",
    "projects.note":
      "Percentages reflect GitHub code language statistics. The SQL filter lists projects using SQL as their database technology.",
    "projects.detailBtn": "Project details ↗",
    "projects.badgePrefix": "GITHUB PROJECT / 0",
    "contact.eyebrow": "04 / Contact",
    "contact.title": "Get in <em>touch.</em>",
    "contact.desc":
      "Feel free to reach out anytime for project ideas, internship and collaboration opportunities, or just to say hello.",
    "contact.emailLabel": "EMAIL",
    "contact.copy": "Copy",
    "contact.copied": "Copied ✓",
    "contact.locLabel": "LOCATION & EDUCATION",
    "contact.locVal": "Istanbul, Turkey • Istanbul Bilgi University",
    "contact.formTitle": "Leave me a <em>message</em>",
    "contact.nameLabel": "Full Name",
    "contact.namePh": "e.g. Jane Doe",
    "contact.emailInputLabel": "Email Address",
    "contact.emailPh": "name@example.com",
    "contact.subjectLabel": "Subject",
    "contact.opt1": "Project & Collaboration",
    "contact.opt2": "Internship & Career Opportunity",
    "contact.opt3": "Question & Feedback",
    "contact.opt4": "Just Saying Hello 🌸",
    "contact.msgLabel": "Your Message",
    "contact.msgPh": "Write your message here...",
    "contact.sendBtn": 'Send message <span aria-hidden="true">↗</span>',
    "contact.status": "Your message is ready, opening your email client ❀",
    "closing.title": "My story <em>continues.</em>",
    "closing.text": "New ideas and new projects …<br />They will all come together here.",
    "closing.top": "Back to top ↑",
    "footer.contact": "Contact",
    "modal.badge": "GITHUB PROJECT",
    "modal.source": "View source code ↗",
    "modal.close": "Close",
    "cv.badge": "CURRICULUM VITAE / RESUME",
  },
};

function updateProjectCountText(count) {
  const countEl = document.getElementById("project-count");
  if (!countEl) return;
  countEl.textContent =
    currentLang === "en"
      ? `${count} projects showing`
      : `${count} proje gösteriliyor`;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("bly-lang", lang);
  document.documentElement.lang = lang;

  const dict = i18n[lang] || i18n.tr;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  // Proje kartlarını da seçili dile çevir
  document.querySelectorAll(".repo-card").forEach((card, idx) => {
    const p = projects[idx];
    if (!p) return;
    const badge = card.querySelector(".cardcontent > small");
    const h3 = card.querySelector(".cardcontent > h3");
    const desc = card.querySelector(".cardcontent > p");
    const detailBtn = card.querySelector("[data-project]");
    if (badge) badge.textContent = `${dict["projects.badgePrefix"]}${idx + 1}`;
    if (h3) h3.textContent = lang === "en" ? p.titleEn : p.title;
    if (desc) desc.textContent = lang === "en" ? p.descEn : p.desc;
    if (detailBtn) detailBtn.textContent = dict["projects.detailBtn"];
  });

  const visibleCount = document.querySelectorAll(".repo-card:not([hidden])").length;
  updateProjectCountText(visibleCount);

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "tr" ? "EN" : "TR";
  }
}

// Tema (Gece / Gündüz) kontrolü
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const savedTheme = localStorage.getItem("bly-theme") || "light";

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeIcon) themeIcon.textContent = "☀️";
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (themeIcon) themeIcon.textContent = "🌙";
  }
  localStorage.setItem("bly-theme", theme);
}
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });
}

// Dil değiştirme butonu
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "tr" ? "en" : "tr");
  });
}

// Dil çubuklarını kart ekrana girdiğinde başlat.
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    }),
  { threshold: 0.05 },
);
document.querySelectorAll(".reveal").forEach((e) => revealObserver.observe(e));

// Ekran dışındaki kedi ve lale animasyonlarını durdur.
const animationObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) =>
      e.target.classList.toggle("animation-paused", !e.isIntersecting),
    ),
  { rootMargin: "50px" },
);
document
  .querySelectorAll(".cat-scene,.top-tulips")
  .forEach((e) => animationObserver.observe(e));

// Sekme arka plana geçtiğinde animasyonları durdur.
document.addEventListener("visibilitychange", () =>
  document.body.classList.toggle("tab-paused", document.hidden),
);

// Proje butonuna basıldığında detay penceresini aç.
document.querySelectorAll("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    const p = projects[Number(button.dataset.project)];
    document.getElementById("detail-title").textContent =
      currentLang === "en" ? p.titleEn : p.title;
    document.getElementById("detail-text").textContent =
      currentLang === "en" ? p.detailEn : p.detail;
    document.getElementById("detail-github").href = p.url;
    const tech = document.getElementById("detail-tech");
    tech.replaceChildren(
      ...p.tech.map((t) => {
        const s = document.createElement("span");
        s.textContent = t;
        return s;
      }),
    );
    document.getElementById("detail").showModal();
  }),
);

// Özgeçmiş (CV) penceresini aç ve PDF olarak yazdır/indir.
const cvModal = document.getElementById("cv-modal");
document.querySelectorAll(".open-cv").forEach((btn) =>
  btn.addEventListener("click", () => {
    if (cvModal) cvModal.showModal();
  }),
);
const printCvBtn = document.getElementById("print-cv");
if (printCvBtn) {
  printCvBtn.addEventListener("click", () => {
    window.print();
  });
}

// Seçilen dile göre proje kartlarını filtrele.
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    let count = 0;
    document.querySelectorAll(".repo-card").forEach((card) => {
      const show =
        button.dataset.filter === "all" ||
        card.dataset.languages.split("|").includes(button.dataset.filter);
      card.hidden = !show;
      if (show) {
        count++;
        card.classList.add("visible");
      }
    });
    updateProjectCountText(count);
  }),
);

// Alt bilgideki yılı güncel tut.
document.getElementById("year").textContent = new Date().getFullYear();

// E-posta adresini panoya kopyala.
const copyEmailBtn = document.getElementById("copy-email");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    const email = copyEmailBtn.dataset.email;
    const dict = i18n[currentLang] || i18n.tr;
    try {
      await navigator.clipboard.writeText(email);
      copyEmailBtn.textContent = dict["contact.copied"];
      copyEmailBtn.classList.add("copied");
      setTimeout(() => {
        copyEmailBtn.textContent = (i18n[currentLang] || i18n.tr)["contact.copy"];
        copyEmailBtn.classList.remove("copied");
      }, 2000);
    } catch {
      window.location.href = "mailto:" + email;
    }
  });
}

// İletişim formunu varsayılan e-posta uygulamasıyla hazırla.
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Kişisel Portfolyo İletişim").trim();
    const message = String(formData.get("message") || "").trim();
    const targetEmail =
      document.getElementById("copy-email")?.dataset.email ||
      "bernayilmaz579@gmail.com";

    const mailtoBody = `Merhaba Berna Lale,\n\n${message}\n\n---\nGönderen: ${name}\nE-posta: ${email}`;
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      subject + " — " + name,
    )}&body=${encodeURIComponent(mailtoBody)}`;

    const statusEl = document.getElementById("form-status");
    if (statusEl) {
      statusEl.textContent = (i18n[currentLang] || i18n.tr)["contact.status"];
    }
    window.location.href = mailtoUrl;
    contactForm.reset();
  });
}

// Başlangıç dilini uygula
applyLanguage(currentLang);


