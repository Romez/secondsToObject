import convert from '../src';

/* eslint-disable object-curly-newline */
const dataSet = [
  [1, { seconds: 1, minutes: 0, hours: 0, days: 0 }],
  [61, { seconds: 1, minutes: 1, hours: 0, days: 0 }],
  [120, { seconds: 0, minutes: 2, hours: 0, days: 0 }],
  [121, { seconds: 1, minutes: 2, hours: 0, days: 0 }],
  [3600, { seconds: 0, minutes: 0, hours: 1, days: 0 }],
  [3661, { seconds: 1, minutes: 1, hours: 1, days: 0 }],
  [86400, { seconds: 0, minutes: 0, hours: 0, days: 1 }],
  [86461, { seconds: 1, minutes: 1, hours: 0, days: 1 }],
  [279927, { seconds: 27, minutes: 45, hours: 5, days: 3 }],
];

test.each(dataSet)('convert(%d) -> %o', (seconds, expected) => {
  expect(convert(seconds)).toEqual(expected);
});
