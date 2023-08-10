const path = require("path");
const fs = require("fs-extra");

module.exports = {
  outputDir: "dist",
  chainWebpack: (config) => {
    config.plugin("copy").tap((args) => {
      // Copy server files to the dist directory
      args[0].push({
        from: path.resolve(__dirname, "src/server/"),
        to: path.resolve(__dirname, "dist"),
        toType: "dir",
      });
      return args;
    });
  },
};
