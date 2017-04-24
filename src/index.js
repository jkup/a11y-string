const htmlparser = require('htmlparser2');

function parse (HTMLString) {
  let results

  const handler = new htmlparser.DomHandler((error, dom) => {
    if (error)
      throw new Error('Invalid HTML passed to a11y-string')
    else
      results = dom
  })

  const parser = new htmlparser.Parser(handler)
  parser.write(HTMLString);
  parser.end();

  // Run all tests here for now
  results.forEach((node) => {
    if (node.name === 'img' && node.attribs.alt === undefined)
      throw new Error('All images must have an alt attribute')
  });

  return results
}

module.exports = parse;