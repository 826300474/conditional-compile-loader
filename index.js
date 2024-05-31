const replace = require("./replacer");

module.exports = function (content) {
  return replace(content, this.query);
};
