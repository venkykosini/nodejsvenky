const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',  // Adjust this to your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
