var postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  browsers: 'last 2 versions',
                  stage: 3,
                  features: {
                    'nesting-rules': true,
                  },
                }),
              ],
            },
          },
        ],
      },
    ],
  },
};
