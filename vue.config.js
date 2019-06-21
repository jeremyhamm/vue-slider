const path = require("path");

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/sass/variables.scss")]
    }
  }
}