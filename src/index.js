const htmlparser = require('htmlparser2');

function parse (HTMLString) {
  let tags = []

  var parser = new htmlparser.Parser({
    onopentag: function(name, attributes){
      tags.push({name: name, attributes: attributes})
    }
  }, {decodeEntities: true});

  parser.write(HTMLString);
  parser.end();

  return tags
}

module.exports = parse;