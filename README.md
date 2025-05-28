
# 🎟️ Ticketworld - Event Discovery App

Ticketworld, kullanıcıların spor, konser ve sinema etkinliklerini kolayca keşfedip detaylarını görüntüleyebileceği bir mobil uygulamadır. Uygulama React Native ile geliştirilmiş olup, Ticketmaster API’sinden canlı etkinlik verileri çekmektedir.

---

## 🚀 Özellikler

- 🔍 **Popüler Etkinlikler**: Ana sayfada güncel ve öne çıkan etkinlikler listelenir.
- 🎭 **Kategoriye Göre Keşif**: Sport, Concert ve Cinema kategorilerinde filtrelenmiş etkinlikler.
- 📅 **Tarihe Göre Filtreleme**: Tüm etkinlikler `Today`, `Tomorrow`, `This Week`, `This Month` gibi filtrelerle listelenebilir.
- 📄 **Etkinlik Detay Sayfası**: Seçilen etkinlik hakkında detaylı bilgiler ve görseller.
- 🔙 **Navigasyon Sistemi**: Kullanıcılar rahatlıkla geri dönebilir ve uygulama içinde akıcı şekilde gezebilir.
- 🧭 **Alt Navigasyon Barı**: Ana sayfa, biletler, QR kod, profil ve destek gibi kısayollar.

---

## 🧱 Sayfa Yapısı

- **HomeScreen.js**  
  Ana sayfa. Popüler etkinlikleri ve kategori kartlarını gösterir.

- **Categories.js**  
  Sport, Concert ve Cinema kategorilerini kart formatında sunar.

- **CategoryDetails.js**  
  Seçilen kategoriye ait etkinlikleri listeler. Tarih filtresi uygulanabilir.

- **EventDetails.js**  
  Etkinliğe tıklandığında açılan detay sayfası. Etkinlik adı, tarih, konum ve görsel yer alır.

- **PopularOnes.js**  
  Ana sayfadaki popüler etkinlikleri gösteren özel bileşen.

- **FilterSection.js**  
  CategoryDetails sayfasında tarih bazlı filtreleme sağlayan bileşen.

- **NavBar.js**  
  Alt navigasyon çubuğu.

- **Header.js**  
  Sayfa üst kısmında logo ve sepet ikonu bulunan header.

---

## 🔌 API Kullanımı

Uygulama, [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) üzerinden etkinlik verisi çeker.  

---

## 📱 Kullanılan Teknolojiler

- React Native
- React Navigation
- Axios
- Ticketmaster API
- Expo

---

## 📬 İletişim

Proje sahibi: **[Furkan Cerk]**  
Mail: [cerkfurkan14@gmail.com]  
LinkedIn: [linkedin.com/in/furkancerk)
