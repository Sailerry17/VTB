const { MongoClient, GridFSBucket } = require("mongodb");
const fs = require("fs");

async function uploadFile() {
  try {
    // Connection URI ke MongoDB Atlas
    const uri = "mongodb+srv://adminVTB:Vtbnsp25@vtb.trbxkwj.mongodb.net/VTB?retryWrites=true&w=majority";

    // Koneksi
    const client = new MongoClient(uri);
    await client.connect();
    console.log("✔ Connected to MongoDB Atlas!");

    const db = client.db("VTB");

    // Buat bucket GridFS khusus
    const bucket = new GridFSBucket(db, { bucketName: "uploads" });

    // Nama file yang mau diupload
    const filePath = "./VTB.rar";

    // Cek apakah file ada
    if (!fs.existsSync(filePath)) {
      console.log("❗ File tidak ditemukan:", filePath);
      return;
    }

    console.log("⏳ Uploading file...");

    const uploadStream = bucket.openUploadStream("VTB.rar");

    fs.createReadStream(filePath).pipe(uploadStream);

    uploadStream.on("finish", () => {
      console.log("🎉 File berhasil di-upload ke MongoDB GridFS!");
      console.log("ID File:", uploadStream.id.toString());
      client.close();
    });

    uploadStream.on("error", (err) => {
      console.error("❗ ERROR upload:", err);
      client.close();
    });

  } catch (err) {
    console.error("❗ ERROR:", err);
  }
}

uploadFile();
