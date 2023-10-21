// Script Start //

// Membuat Event listener untuk tombol "Ambil Berita Luar Angkasa"
document.getElementById("fetch-news").addEventListener("click", function () {
  fetchNews();
});

// Buat fungsi untuk mengambil berita
function fetchNews() {
  // Definisikan API URL Nasa
  const apiUrl =
    "https://api.nasa.gov/planetary/apod?api_key=SKgS9wIeZb57wOjY4m0ze2vuuADLg9LAcFBKTVfw";

  // Kirim permintaan GET ke API NASA
  fetch(apiUrl)
    .then((response) => response.json()) // Ubah response ke bentuk JSON, Tangkap respon resolve (.then)
    .then((data) => {
      const newsData = data; // Data yang didapatkan, jadikan variabel newsData
      const newsHTML = `
        <div class = "news-card">
          <h2>${newsData.title}</h2>
          <p>${newsData.date}</p>
          <img src="${newsData.hdurl}" alt="${newsData.title}" width="400">
          <p>${newsData.explanation}</p>
          </div>
          `; // Mendefinisikan newsHTML yang berisi elemen HTML yang akan ditambahkan nantinya

      document.getElementById("news-list").innerHTML = newsHTML; // Identifikasi ID di HTML, dan tambahkan elemen HTML yang didefinisikan di newsHTML
      const newsCard = document.getElementById("news-list"); // Deklarasikan variabel newsCard, yang akan dijadikan agar bisa auto scroll
      newsCard.scrollIntoView({ behavior: "smooth" }); // Buat Autoscroll
    })
    .catch((error) => {
      console.error("Gagal mengambil Data: ", error); // Tangkap response Error, selain resolve
    });
}
