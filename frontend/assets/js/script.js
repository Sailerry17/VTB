document.addEventListener('DOMContentLoaded', function() {
    // Kode ini akan dieksekusi HANYA setelah seluruh DOM (HTML) siap.

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');

    // Cek apakah kedua elemen ditemukan, untuk menghindari error jika ID salah.
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.onclick = function() {
            mainNav.classList.toggle('open');
        };
    } else {
        // Jika Anda melihat pesan ini di Console (F12),
        // berarti ada kesalahan ID atau elemen tidak ada di HTML.
        console.error("Elemen Hamburger atau Navigasi (main-nav/hamburger-btn) tidak ditemukan di DOM.");
    }
});