const tareas = [
  {
    id: 1,
    nombre: "Ir al banco",
    descripcion: "",
    prioridad: "alta",
    completado: false,
  },
  {
    id: 2,
    nombre: "Preparar mate",
    descripcion: "",
    prioridad: "media",
    completado: false,
  },
  {
    id: 3,
    nombre: "Caminar",
    descripcion: "Dar la vuelta por el parque",
    prioridad: "media",
    completado: false,
  },
  {
    id: 4,
    nombre: "Leer un libro",
    descripcion: "Continuar leyendo...",
    prioridad: "media",
    completado: true,
  },
  {
    id: 5,
    nombre: "Ser un crack",
    descripcion: "Parecerle al Ronal",
    prioridad: "alta",
    completado: false,
  },
];

const get = (req, res) => {
  return res
    .status(200)
    .json({ data: tareas, success: true, message: "Lista de tareas" });
};

const create = (req, res) => {
  const { id, nombre, descripcion, prioridad, completado } = req.body;

  const nuevaTarea = {
    id,
    nombre,
    descripcion,
    prioridad,
    completado,
  };

  tareas.push(nuevaTarea);

  return res.status(200).json({
    data: tareas,
    success: true,
    message: "Se insertó una nueva tarea",
  });
};

module.exports = { get, create };
