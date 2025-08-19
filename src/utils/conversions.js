function toCelsius(f) {
  if (typeof f !== 'number' || !Number.isFinite(f)) {
    throw new TypeError('Input must be a finite number');
  }
  return Number(((f - 32) * 5 / 9).toFixed(1));
}
function toFahrenheit(c) {
  if (typeof c !== 'number' || !Number.isFinite(c)) {
    throw new TypeError('Input must be a finite number');
  }
  return Number(((c * 9 / 5) + 32).toFixed(1));
}

module.exports = { toCelsius, toFahrenheit };