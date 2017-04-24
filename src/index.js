const htmlparser = require('htmlparser2');

function parse (HTMLString) {
  let tags = []

  var parser = new htmlparser.Parser({
    onopentag: function(name, attributes){
      if (name === 'img' && attributes.alt === undefined)
        throw new Error('All images must have an alt attribute')

      tags.push({name: name, attributes: attributes})
    }
  }, {decodeEntities: true});

  parser.write(HTMLString);
  parser.end();

  return tags
}

module.exports = parse;