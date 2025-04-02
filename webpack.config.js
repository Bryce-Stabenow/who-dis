const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    popup: './src/popup.ts',
    background: './src/background.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}; 