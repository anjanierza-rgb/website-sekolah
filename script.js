// Ambil tombol
const backToTopBtn = document.getElementById("backToTop");

// Saat user scroll 100px kebawah, tampilkan tombol
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

// Cek mode yang tersimpan di localStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️"; // ikon matahari untuk mode terang
}

// Event toggle klik
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  const now = new Date();
  
  // Format tanggal: Senin, 14 Agustus 2025
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('id-ID', options);

  // Format jam: 14:30:15
  const timeString = now.toLocaleTimeString('id-ID');

  clock.textContent = `${dateString} — ${timeString}`;
}

// Jalankan pertama kali dan set interval update tiap detik
updateClock();
setInterval(updateClock, 1000);
