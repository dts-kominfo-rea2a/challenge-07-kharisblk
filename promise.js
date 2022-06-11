const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let dataIXX = await promiseTheaterIXX();
    let dataVGC = await promiseTheaterVGC();

    let emosiIXX = dataIXX.filter((film) => film.hasil === emosi);
    let emosiVGC = dataVGC.filter((film) => film.hasil === emosi);

    return emosiIXX.length + emosiVGC.length;
  } catch (error) {
    return 'Error ${error}';
  }
};

module.exports = {
  promiseOutput,
};
