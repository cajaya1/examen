const { toCelsius, toFahrenheit} = require('./src/utils/conversions');
describe('Temperature conversions', () => {
  test('32°F → 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });

  test('0°C → 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });

  test('100°C → 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });

  test('−40°C ↔ −40°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
    expect(toCelsius(-40)).toBe(-40.0);
  });

  test('throws if not finite number', () => {
    expect(() => toCelsius('abc')).toThrow(TypeError);
    expect(() => toFahrenheit(NaN)).toThrow(TypeError);
  });
});