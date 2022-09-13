const multiplicarPositivos = (numeroUno, numeroDos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numeroUno > 0 && numeroDos > 0) {
        const resultado = numeroUno * numeroDos;
        resolve(resultado);
      } else {
        reject("Deben ser positivos");
      }
    }, 1000);
  });
};

const consumirPromesa = async () => {
  try {
    const resultado = await multiplicarPositivos(-10, 2);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
};

consumirPromesa();
