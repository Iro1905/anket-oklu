// app.js
const express = require("express");
const app = express();
const port = 3000;

// 6 farklı anket linki
const surveys = [
  "https://forms.gle/cXthdoB5L96wcLT46",
  "https://forms.gle/KMxQD2spJHhom5s2A",
  "https://forms.gle/LegKwjHU6jgXRKxr6",
  "https://forms.gle/mWsPyAzvZWa2TnY26",
  "https://forms.gle/PsaqKt2S38dW4UrJA",
  "https://forms.gle/K7tV84JnY6ZYJmTq6"
];

// Her anketin kaç kez gösterildiğini tutmak için sayaç
let counters = new Array(surveys.length).fill(0);

app.get("/anket", (req, res) => {
  // En az kullanılan anketi bul
  const minCount = Math.min(...counters);
  const index = counters.findIndex(c => c === minCount);

  // Sayaç artır
  counters[index]++;

  // Kullanıcıyı yönlendir
  res.redirect(surveys[index]);
});

app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}/anket`);
});
