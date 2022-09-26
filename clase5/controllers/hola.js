const hola = (req, res, next) => {
  try {
    res.send("Hola, mundo");
  } catch (error) {
    return next(error);
  }
};

module.exports = { hola };
