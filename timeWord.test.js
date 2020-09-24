const timeWord = require('./Timeword');

describe('#timeword', () => {
  test('for typical output', () => {
    let result = timeWord('06:10');
    expect(result).toBe('six ten am');
  });
  test('for typical output', () => {
    let result = timeWord('09:11');
    expect(result).toBe('nine eleven am');
  });
  test('for typical output', () => {
    let result = timeWord('04:20');
    expect(result).toBe('four twenty am');
  });
  test('for typical output', () => {
    let result = timeWord('20:50');
    expect(result).toBe('eight fifty pm');
  });
  test('for midnight output', () => {
    let result = timeWord('00:00');
    expect(result).toBe('midnight, the witching hour');
  });
  test('for noon output', () => {
    let result = timeWord('12:00');
    expect(result).toBe('high noon');
  });
  test('for on the hour output', () => {
    let result = timeWord('22:00');
    expect(result).toBe('ten o\'clock pm');
  });
});