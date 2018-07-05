// @format
const path = require("path");

module.exports = {
  title: "nteract components",
  sections: [
    {
      name: "Presentational Components",
      components: "packages/presentational-components/src/components/*.js"
    },
    {
      name: "Directory Listing",
      components: "packages/directory-listing/src/components/*.js"
    }
  ],
  // For overriding the components styleguidist uses
  styleguideComponents: {
    LogoRenderer: path.join(
      __dirname,
      "packages",
      "styleguide-components",
      "logo.js"
    )
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
};
