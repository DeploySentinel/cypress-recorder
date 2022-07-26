const path = require("path");
module.exports = (on, config) => {
  const moduleDir = path.resolve(__dirname);

  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.family === "firefox") {
      // Firefox needs to load firefox mv2 extension
      launchOptions.extensions.push(path.join(moduleDir, "builds", "firefox"));
    } else if (browser.name !== "electron" && browser.family === "chromium") {
      // Electron does not support extensions
      launchOptions.extensions.push(path.join(moduleDir, "builds", "chrome"));
    }

    return launchOptions;
  });
};
