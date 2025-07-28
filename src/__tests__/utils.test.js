const { pointsForWord } = require('../utils');

describe('pointsForWord', () => {
  it('calculates points for a simple word', () => {
    expect(pointsForWord('test')).toBe(7);
  });

  it('handles uppercase letters', () => {
    expect(pointsForWord('Test')).toBe(7);
    expect(pointsForWord('TEST')).toBe(7);
  });
});
