const replace = require("../replacer");
const fs = require("fs");

fs.readFile("./test/template.css", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const res = replace(data, {
    aaa: true,
  });
  console.log(res);
});

fs.readFile("./test/template.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const res = replace(data, {
    aaa: true,
  });
  console.log(res);
});

fs.readFile("./test/template.jsx", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const res = replace(data, {
    aaa: true,
  });
  console.log(res);
});
