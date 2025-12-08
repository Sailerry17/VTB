document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk memuat konten footer dari file footer.html
    function loadFooter() {
        // PERHATIAN: Pastikan path ini benar relatif terhadap file HTML Anda
        // Di sini diasumsikan file HTML dan folder 'includes' berada di level yang sama.
        const footerPath = 'includes/footer.html'; 
        
        fetch(footerPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Gagal memuat file footer. Status: ' + response.status);
                }
                return response.text();
            })
            .then(html => {
                const footerPlaceholder = document.getElementById('footer-placeholder');
                if (footerPlaceholder) {
                    // Masukkan konten HTML footer ke placeholder
                    footerPlaceholder.innerHTML = html;
                }
            })
            .catch(error => {
                console.error('Error memuat footer:', error);
                const footerPlaceholder = document.getElementById('footer-placeholder');
                if (footerPlaceholder) {
                    footerPlaceholder.innerHTML = '<footer class="footer" style="background-color: red; color: white; padding: 15px;">Error: Gagal memuat footer. Lihat console untuk detail.</footer>';
                }
            });
    }

    // Panggil fungsi loadFooter saat halaman dimuat
    loadFooter(); 
});