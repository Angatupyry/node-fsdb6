const hola = (req, res, next) => {
  try {
    return res.status(200).json({
      data: [],
      message: "Hola, mundo :D",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { hola };
