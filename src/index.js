const htmlparser = require('htmlparser2');

function parse(HTMLString, isPartial) {
  let results;
  let hasTitle = false;

  const handler = new htmlparser.DomHandler((error, dom) => {
    if (error) throw new Error('Invalid HTML passed to a11y-string');
    else results = dom;
  });

  const parser = new htmlparser.Parser(handler);
  parser.write(HTMLString);
  parser.end();

  // Run all tests here for now
  results.forEach(node => {
    if (node.name === 'img' && node.attribs.alt === undefined)
      throw new Error('All images must have an alt attribute');
    if (node.name === 'title') hasTitle = true;
  });

  // DOM should contain a title tag only if not a partial
  if (!hasTitle && !isPartial)
    throw new Error(
      'The web page should have a title that describes topic or purpose'
    );
  return results;
}

module.exports = parse;
