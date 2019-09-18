import data from '../data';

const state = {
  data: [{
    month: 'Jan', mean: -5.2, high: -0.8, low: -9.7,
  }],
};

describe('Check function getAllData', () => {
  test('should return an array of data', () => {
    expect(data.getters.getAllData(state)).toEqual(state.data);
  });
});
