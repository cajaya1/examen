const {movingAverage} = require('./src/utils/stats');
describe('movingAverage', () => {
  test('[10,20,30,40] w=2 → [15.00,25.00,35.00]', () => {
    expect(movingAverage([10,20,30,40], 2)).toEqual([15.00, 25.00, 35.00]);
  });

  test('[1,2,3] w=3 → [2.00]', () => {
    expect(movingAverage([1,2,3], 3)).toEqual([2.00]);
  });

  test('window out of range → RangeError', () => {
    expect(() => movingAverage([1,2], 5)).toThrow(RangeError);
    expect(() => movingAverage([1,2], 1)).toThrow(RangeError);
  });

  test('non-numeric values → TypeError', () => {
    expect(() => movingAverage([1,'a',3], 2)).toThrow(TypeError);
  });
});