const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("veritabanı bağlantısı yapıldı");
  })
  .catch((err) => {
    console.log("veritabanı bağlantı hatası:" + err);
  });


