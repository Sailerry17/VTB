// 1️⃣ Cek API dari backend
document.addEventListener("DOMContentLoaded", () => {
  const btnApi = document.createElement("button");
  btnApi.innerText = "Cek API";
  btnApi.style.padding = "10px 20px";
  btnApi.style.margin = "10px 0";
  document.body.prepend(btnApi);

  const resultDiv = document.createElement("div");
  document.body.prepend(resultDiv);

  btnApi.addEventListener("click", () => {
    fetch("/api/upload/hello")
      .then(res => res.json())
      .then(data => {
        resultDiv.innerText = "Backend says: " + data.message;
      })
      .catch(err => console.error(err));
  });
});

// 2️⃣ Upload file ke backend (opsional)
const fileUploadBtn = document.createElement("input");
fileUploadBtn.type = "file";
fileUploadBtn.id = "file-input";
document.body.appendChild(fileUploadBtn);

const uploadBtn = document.createElement("button");
uploadBtn.innerText = "Upload File";
uploadBtn.style.margin = "5px";
document.body.appendChild(uploadBtn);

uploadBtn.addEventListener("click", () => {
  const fileInput = document.getElementById("file-input");
  if (!fileInput.files.length) {
    alert("Pilih file dulu!");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  fetch("/api/upload", {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      alert("File berhasil diupload: " + data.filename);
      console.log(data);
    })
    .catch(err => console.error(err));
});
