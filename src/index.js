const htmlparser = require('htmlparser2');

module.exports = function parse (HTMLString) {
  var parser = new htmlparser.Parser({
    onopentag: function(name, attributes){
      console.log('Open Tag: ', name, attributes)
    },
    ontext: function(text){
      console.log('Text: ', text);
    },
    onclosetag: function(tagname){
      console.log('Closing Tag: ', tagname);
    }
  }, {decodeEntities: true});
  parser.write(HTMLString);
  parser.end();
}