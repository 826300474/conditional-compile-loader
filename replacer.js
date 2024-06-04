function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

var patternList = [
  /\{\s*\/\* #ifdef\s+([\w|\|\&\(\)\s]+)\s*\*\/\s*\}([\s\S]*?)\{\s*\/\* #endif \*\/\s*\}/g,
  /\/\* #ifdef\s+([\w|\|\&\(\)\s]+)\s*\*\/([\s\S]*?)\/\* #endif \*\//g,
  /\/\/ #ifdef\s+([\w|\|\&\(\)\s]+)\s*\n([\s\S]*?)\n\/\/ #endif/g,
];

function replace(content, options) {
  if (!options.target) {
    return content;
  }
  var res = content;
  for (let index = 0; index < patternList.length; index++) {
    res = res.replace(patternList[index], (_, $1, $2) => {
      const keys = $1.split("||");
      for (let j = 0; j < keys.length; j++) {
        if (trim(keys[j]) === options.target) {
          return $2;
        }
      }
      return "";
    });
  }
  return res;
}

module.exports = replace;
