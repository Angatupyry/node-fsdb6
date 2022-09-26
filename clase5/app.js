const express = require("express");
const hola = require("./routes/hola");

const app = express();

const PORT = 3500;

app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

app.use("/hola", hola);

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
