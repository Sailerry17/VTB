// === Ambil data beranda saat halaman dibuka ===
async function loadContent() {
    try {
        let res = await api.get("/halaman/beranda");
        document.getElementById("content").value = res.content;
    } catch (e) {
        document.getElementById("msg").innerText = "Gagal memuat konten!";
    }
}

loadContent();

// === Simpan Perubahan ===
document.getElementById("editForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let updated = document.getElementById("content").value;

    try {
        await api.post("/halaman/beranda/update", { content: updated });
        document.getElementById("msg").innerText = "Berhasil disimpan!";
    } catch (e) {
        document.getElementById("msg").innerText = "Gagal menyimpan!";
    }
});
