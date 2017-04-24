const a11y = require(__dirname + '/../src/index');

test('returns html as open tag', () => {
  expect(a11y('<html></html>', true)).toEqual(
    [{
      type: 'tag',
      name: 'html',
      attribs: {},
      children: [],
      next: null,
      prev: null,
      parent: null }
    ]);
});

test('throws error if an image is missing an alt attribute', () => {
  expect(() => {
    a11y('<img src="foo.jpg" />', true)
  }).toThrow('All images must have an alt attribute');
})

test('throws error if a full page is missing a title', () => {
  expect(() => {
    a11y('<html><head></head><body><div>No title here</div></body></html>')
  }).toThrow('The web page should have a title that describes topic or purpose');
})