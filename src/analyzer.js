const analyzer = {
  getWordCount: (text) => {
    if (text === '') {
      return 0;
    }

    const texto = text.trim().split(/\s+/).length; //Quita los espacios del inicio y del final. Split (como tijera)

    return texto // Retornar la cantidad de palabras ingresadas por el usuario

  },
  getCharacterCount: (text) => {
    if (text === '') {
      return 0;
    }
    return text.length


  },
  getCharacterCountExcludingSpaces: (text) => {
    if (text === '') {
      return 0;
    }
    const caracterSinEspacio = text.replace(/[\s.,/#!$%^&*;:{}=\-_~()]/g, '').length

    return caracterSinEspacio
  },

  getAverageWordLength: (text) => {
    if (text === '') {
      return 0;
    }
    const array = text.trim().split(' ');
    let contador = 0

    for (let i = 0; i < array.length; i++) {
      // n += i;
      contador = contador + array[i].length
    }
    const convertir = contador / array.length
    return Number(convertir.toFixed(2))
  },

  getNumberCount: (text) => {
    if (text === '') {
      return 0;
    }
    const numero = text.match(/(?<!\w)\d+(\.\d+)?(?!\w)/g)
    return numero ? numero.length : 0;
  },
  getNumberSum: (text) => {
    if (text === '') {
      return 0;
    }
    const suma = text.match(/(?<!\w)\d+(\.\d+)?(?!\w)/g)
    if (suma === null) {
      return 0;
    }
    return suma.reduce((anterior, actual) => anterior + parseFloat(actual), 0);
  },
};

export default analyzer;
