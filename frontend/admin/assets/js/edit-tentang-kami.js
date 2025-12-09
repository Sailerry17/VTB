const form = document.getElementById('editForm');
const textarea = document.getElementById('content');
const msg = document.getElementById('msg');

// Ambil konten awal dari backend
fetch('http://localhost:3000/api/section/tentang') // ganti URL sesuai backend temanmu
    .then(res => res.json())
    .then(data => {
        // Jika backend mengirim objek, sesuaikan di sini
        textarea.value = data.content || data;
    })
    .catch(err => {
        msg.textContent = "Gagal mengambil konten sebelumnya";
        console.error(err);
    });

// Update konten ke backend
form.addEventListener('submit', e => {
    e.preventDefault();

    const payload = { content: textarea.value };

    fetch('http://localhost:3000/api/section/tentang', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        msg.textContent = data.message || "Konten berhasil disimpan";
    })
    .catch(err => {
        msg.textContent = "Terjadi kesalahan saat menyimpan konten";
        console.error(err);
    });
});
