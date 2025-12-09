const form = document.getElementById('editForm');
const emailInput = document.getElementById('email');
const teleponInput = document.getElementById('telepon');
const msg = document.getElementById('msg');

// Ambil data awal dari backend
fetch('http://localhost:3000/api/section/kontak')
    .then(res => res.json())
    .then(data => {
        emailInput.value = data.email || '';
        teleponInput.value = data.telepon || '';
    });

// Update data ke backend
form.addEventListener('submit', e => {
    e.preventDefault();

    const payload = {
        email: emailInput.value,
        telepon: teleponInput.value
    };

    fetch('http://localhost:3000/api/section/kontak', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => msg.textContent = data.message)
    .catch(err => msg.textContent = "Terjadi kesalahan");
});
