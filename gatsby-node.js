exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.jpg$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
              },
            },
          ],
        },
      ],
    },
  });
};
