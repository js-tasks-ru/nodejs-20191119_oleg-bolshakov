function sum(a, b) {
  /* ваш код */
  function isNumber (value) {
    if ( typeof value !== 'number' || !isFinite(value) ) {
      throw new TypeError(`Value: "${value}" is not a number.`);
    };
  }
  isNumber(a);
  isNumber(b);
  return a + b;
}

module.exports = sum;
