const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const isDev = process.env.NODE_ENV !== "production";

module.exports = withPlugins([withSass, withCSS], {
  env: {
    SERVER_URL: isDev
      ? "http://localhost:1337"
      : "http://api.parafia.adrian-domanski.pl",
  },
});
