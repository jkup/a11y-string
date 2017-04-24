const a11y = require(__dirname + '/../src/index');

test('returns html as open tag', () => {
  expect(a11y('<html></html>')).toEqual([{"attributes": {}, "name": "html"}]);
});

test('throws error if an image is missing an alt attribute', () => {
  expect(() => {
    a11y('<img src="foo.jpg" />')
  }).toThrow('All images must have an alt attribute');
})