# Berna Lale Yılmaz — Düzenli kaynak kodları

## Açma

Bu klasördeki dosyaları birlikte tut. index.html dosyasını tarayıcıda açınca site çalışır; kurulum gerekmez.
Kodları görmek için dosyaları Not Defteri veya VS Code ile aç.

## Dosyalar

- index.html: Menü (TR/EN dil geçişi ve Gece Modu), Hakkımda & Eğitim Zaman Çizelgesi (Timeline), Yetenekler & Güncel Odak (Now), Projeler, İletişim alanı, Özgeçmiş (CV) penceresi, SVG kediler ve laleler.
- style.css: Açık pembe ve Koyu Mürdüm (Gece Modu) cam görünümü, zaman çizelgesi, yetenek kartları, iletişim formu, CV yazdırma (@media print) kuralları ve animasyonlar.
- app.js: Proje verileri (TR/EN), dile göre filtreleme, TR/EN dil değiştirme, Gece/Gündüz teması, CV görüntüleme/PDF yazdırma ve iletişim etkileşimleri.
- github-projects.json: GitHub verilerinin özeti. Site bu dosyayı otomatik okumaz.

## Düzenleme

1. Biyografi & Zaman Çizelgesi: index.html içinde id="hakkimda" bölümünü düzenle.
2. Yetenekler & Güncel Odak: index.html içinde id="yetenekler" bölümünü düzenle.
3. Özgeçmiş (CV): index.html sonundaki id="cv-modal" penceresini düzenle (Tarayıcıda "PDF Olarak İndir / Yazdır" butonuyla doğrudan A4 PDF çıktısı verir).
4. İletişim: index.html içinde id="iletisim" bölümündeki e-posta ve LinkedIn bağlantılarını güncelle.
5. Renkler & Gece Modu: style.css başındaki :root ve sonundaki html[data-theme="dark"] değişkenlerini değiştir.
3. Projeler: index.html içindeki repo-card kartlarını ve app.js başındaki projects listesini birlikte düzenle. data-project değeri listedeki proje sırasıdır; sıfırdan başlar.
4. Dil yüzdeleri: HTML'deki dil satırı ve --amount değerini birlikte değiştir. Yüzdeler kod miktarını gösterir, beceri düzeyini değil.
5. Animasyonlar: style.css içindeki @keyframes kurallarını düzenle. Hareketi azaltma tercihi desteklenir.

GitHub bilgileri 12 Ekim 2026 tarihinde alınmıştır. Yeni depolar otomatik eklenmez.
Kaydettikten sonra tarayıcıda Ctrl+F5 ile yenile.
