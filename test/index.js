const replace = require("../replacer");
const fs = require("fs");

fs.readFile("./test/template.css", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const res = replace(data, {
    aaa: true,
    // bbb: true,
  });
  console.log(res);
});
