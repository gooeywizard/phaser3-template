const merge = require("webpack-merge");
const path = require("path");
const base = require("./webpack-base");

module.exports = merge(base, {
	entry: path.join(__dirname, '../src/js/main.js'),
  output: {
    filename: "[name].bundle.js"
  }
});