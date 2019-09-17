import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import data from '../data'
import { cloneDeep } from 'lodash'

const Array = { 
  data: [{
    month: 'Jan', mean: -5.2, high: -0.8, low: -9.7 
  }]
};

describe('Check function getAllData', () => {
  test('should return array', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(data))

    expect(store.getters.getAllData(Array)).toBe(Array);
  });
});
