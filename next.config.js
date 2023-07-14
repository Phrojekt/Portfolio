const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/files/'
          }
        }
      ]
    });

    return config;
  }
}

module.exports = nextConfig;
