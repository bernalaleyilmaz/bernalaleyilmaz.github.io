// Proje açıklamaları, bağlantılar ve GitHub dil verileri.
const projects = [
  {
    title: "Kitap Öneri Sistemi",
    icon: "▤",
    desc: "Kitapları keşfetmek, puanlamak ve okuma tercihlerine göre öneriler almak için React ve FastAPI ile geliştirilmiş uygulama.",
    tech: ["React", "FastAPI", "SQLite", "scikit-learn"],
    detail:
      "Kitap kataloğunda arama, filtreleme ve sıralama; kullanıcı hesabı, puanlama ve yorum özellikleri içeriyor. Öneriler TF-IDF ve kosinüs benzerliğiyle üretiliyor. İsteğe bağlı Gemini entegrasyonu önerilen kitaplar için kısa İngilizce açıklamalar oluşturuyor.",
    name: "Book-Recommendation",
    url: "https://github.com/bernalaleyilmaz/Book-Recommendation",
    languages: { JavaScript: 98382, Python: 37844, HTML: 360, CSS: 319 },
    language: "JavaScript",
  },
  {
    title: "Pink Sudoku",
    icon: "▦",
    desc: "C++ ve SFML ile geliştirilen, pastel pembe arayüze sahip Sudoku oyunu. Yeni tahtalar geri izleme algoritmasıyla oluşturuluyor.",
    tech: ["C++", "SFML", "Backtracking", "CMake"],
    detail:
      "Fareyle hücre seçimi, klavyeyle sayı girişi, satır-sütun ve 3×3 kutu doğrulaması, üç can sistemi ve yeni oyun özelliği bulunuyor. Geri izleme algoritması önce geçerli bir tahta oluşturuyor; ardından 40 sayı kaldırılarak bulmaca hazırlanıyor.",
    name: "Pink-Sudoku",
    url: "https://github.com/bernalaleyilmaz/Pink-Sudoku",
    languages: { "C++": 10168, CMake: 311 },
    language: "C++",
  },
  {
    title: "Hashing Performans Analizi",
    icon: "⌘",
    desc: "Cuckoo Hashing ve Linear Probing yöntemlerini farklı iş yükleri ve doluluk oranlarında karşılaştıran Java projesi.",
    tech: ["Java", "Cuckoo Hashing", "Linear Probing"],
    detail:
      "Hash tablolarındaki iki farklı çakışma çözümünün performansını karşılaştırıyor. GitHub depo açıklaması, farklı iş yükleri ve doluluk oranları altında karşılaştırmalı analize odaklandığını belirtiyor.",
    name: "CuckooHashingProject.java",
    url: "https://github.com/bernalaleyilmaz/CuckooHashingProject.java",
    languages: { Java: 21931 },
    language: "Java",
  },
  {
    title: "Film Öneri Sistemi",
    icon: "▷",
    desc: "Film bilgilerinden benzer yapımları bulan Python uygulaması. TF-IDF, kosinüs benzerliği ve Tkinter arayüzünü birleştiriyor.",
    tech: ["Python", "Pandas", "scikit-learn", "Tkinter"],
    detail:
      "Film türü, oyuncu kadrosu ve özetlerini sayısal vektörlere dönüştürerek girilen filme benzer beş yapım öneriyor. Pandas ile veri işleme, difflib ile yazım hatalarını ele alma ve Tkinter ile basit bir arayüz içeriyor.",
    name: "movie_recommendation_system",
    url: "https://github.com/bernalaleyilmaz/movie_recommendation_system",
    languages: { Python: 2099 },
    language: "Python",
  },
  {
    title: "GitHub Profil Analizörü",
    icon: "⌁",
    desc: "GitHub profillerindeki depoları, yıldızları ve kullanılan dilleri grafiklerle inceleyen Python projesi.",
    tech: ["Python", "Veri analizi", "Grafikler"],
    detail:
      "Toplam depo ve yıldız bilgilerini gösteriyor, en iyi beş depoyu listeliyor, dil dağılımını pasta grafikle ve popüler depoları çubuk grafikle görselleştiriyor.",
    name: "github-profile-analyzer",
    url: "https://github.com/bernalaleyilmaz/github-profile-analyzer",
    languages: { Python: 1496 },
    language: "Python",
  },
];
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
    document.getElementById("detail-title").textContent = p.title;
    document.getElementById("detail-text").textContent = p.detail;
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
    document.getElementById("project-count").textContent = count + " proje gösteriliyor";
  }),
);
// Alt bilgideki yılı güncel tut.
document.getElementById("year").textContent = new Date().getFullYear();
