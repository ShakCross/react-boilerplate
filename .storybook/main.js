const custom = require('../webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: (config) => {
    // do mutation to the config
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
        ...config.plugins
      ]
    };
  },
};
