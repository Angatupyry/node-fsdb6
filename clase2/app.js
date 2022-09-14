//1 Llamando al paquete para utilizarlo
const express = require("express");
const axios = require("axios");
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

app.get("/swapi", async (req, res) => {
  try {
    const characters = await axios("https://swapi.dev/api/people/");

    return res.status(200).json(characters.data.results);
  } catch (error) {
    console.error(error);
  }
});

app.get("/swapi/:personaje_id", async (req, res) => {
  try {
    const data = {
      personaje: {},
      planeta: {},
    };

    const personaje_id = req.params.personaje_id;

    const characterAxios = await axios(
      `https://swapi.dev/api/people/${personaje_id}`
    );

    const character = characterAxios.data;

    const planet = await axios(character.homeworld);

    data.personaje = {
      nombre: character.name,
      altura: character.height,
      color_ojo: character.eye_color,
    };

    data.planeta = {
      nombre: planet.data.name,
      gravedad: planet.data.gravity,
      terreno: planet.data.terrain,
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

// 5 - Levantar el servidor
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
