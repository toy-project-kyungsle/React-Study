const webpack = require("webpack");

module.exports = {
  webpack: function (config, env) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        IScroll: "iscroll",
      }),
    );
    return config;
  },
};
