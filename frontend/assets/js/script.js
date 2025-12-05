document.addEventListener('DOMContentLoaded', function () {
    // Dapatkan elemen-elemen yang diperlukan
    const menuToggle = document.getElementById('menuToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    // const body = document.body; // Tidak diperlukan lagi untuk efek overlay

    // Tambahkan event listener untuk tombol menu
    menuToggle.addEventListener('click', function () {
        // Toggle (menambahkan/menghapus) kelas 'open' pada sidebar
        sidebarMenu.classList.toggle('open');
    });

    // Opsional: Menutup menu ketika salah satu link diklik (untuk navigasi)
    const sidebarLinks = sidebarMenu.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Tutup sidebar saat link diklik
            sidebarMenu.classList.remove('open');
        });
    });
});