function contains(str, substring) {
  return str.indexOf(substring) !== -1;
}

function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

function replace(content, options) {
  var codes = content.split("\n");

  var res = "";
  var start = "";
  var string = "";

  for (var index = 0; index < codes.length; index++) {
    var cur = codes[index];
    if (
      contains(cur, "/* #ifdef") ||
      contains(cur, "// #ifdef") ||
      contains(cur, "{/* #ifdef")
    ) {
      start = trim(cur);
      continue;
    }

    if (
      contains(cur, "/* #end") ||
      contains(cur, "// #end") ||
      contains(cur, "{/* #end */}")
    ) {
      var keys = [];
      if (contains(start, "/* #ifdef")) {
        keys = start.slice(10, -2).split("|");
      }
      if (contains(start, "// #ifdef")) {
        keys = start.slice(10).split("|");
      }
      if (contains(start, "{/* #ifdef")) {
        keys = start.slice(11, -3).split("|");
      }
      for (let j = 0; j < keys.length; j++) {
        if (options[trim(keys[j])]) {
          res += string;
          break;
        }
      }
      start = "";
      string = "";
      continue;
    }
    if (start.length) {
      string += cur + "\n";
    } else {
      res += cur + "\n";
    }
  }
  return res;
}

module.exports = replace;
