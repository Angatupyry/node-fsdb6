const db = require("../db/index");

const get = async (req, res) => {
  try {
    const tareas = await db.query("select * from tareas");

    return res
      .status(200)
      .json({ data: tareas.rows, success: true, message: "Lista de tareas" });
  } catch (error) {
    console.error(error);
  }
};

const create = async (req, res) => {
  try {
    const { titulo, prioridad } = req.body;

    await db.query(
      `insert into tareas (titulo, prioridad) 
       values($1, $2)`,
      [titulo, prioridad]
    );

    return res.status(200).json({
      data: req.body,
      success: true,
      message: "Se insertó una nueva tarea",
    });
  } catch (error) {
    console.error(error);
  }
};

const actualizar = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { titulo, prioridad } = req.body;

    await db.query(
      "update tareas set titulo = $1, prioridad = $2 where id = $3",

      [titulo, prioridad, id]
    );

    return res.status(204);
  } catch (error) {
    return next(error);
  }
};

module.exports = { get, create, actualizar };
