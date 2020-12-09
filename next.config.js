const path = require('path');

module.exports = {
    webpack: (config, { defaultLoaders }) => {
      config.module.rules.push({
        test: /\.css$|\.scss$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: (fileName, options) => options.query.type || 'scoped'
            }
          },
          { 
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, './styles')]
              }
            }
          }
        ]
      })
      return config
    }
  }