const a11y = require(__dirname + '/../src/index');

test('returns html as open tag', () => {
  expect(a11y('<html></html>')).toEqual([{"attributes": {}, "name": "html"}]);
});