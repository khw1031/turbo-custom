const withTM = require("next-transpile-modules")(["@superkitchen/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
