import {extractIetfCode} from './index';

test('Dummy', () => {
  expect(extractIetfCode('en-US').toEqual({
    something: 'data'
  }));
});