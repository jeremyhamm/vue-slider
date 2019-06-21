const path = require("path");

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: { 
    extract: false 
  }
}