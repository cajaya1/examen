function movingAverage(series, window) {
  if (!Array.isArray(series) || series.some(v => typeof v !== 'number' || !Number.isFinite(v))) {
    throw new TypeError('Series must be an array of finite numbers');
  }
  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('Window must be an integer ≥ 2 and ≤ series length');
  }

  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const slice = series.slice(i, i + window);
    const avg = slice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }
  return result;
}

module.exports = { movingAverage };