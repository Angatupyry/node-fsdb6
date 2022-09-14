//1 Llamando al paquete para utilizarlo
const express = require("express");
// - 2 Inicializar o instanciar express en una variable. (Por convención llamada app)
const app = express();

// - 3 Definir un puerto a utilizar para que nuestro servidor pueda escuchar
// en localhost
const PORT = 3000;

// 4 - Crear rutas o endpoints
app.get("/ronaldinho", (req, res) => {
  res.send("¡Fui un crack en barcelona!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 5 - Levantar el servidor
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
