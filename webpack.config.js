const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'APP_VERSION': JSON.stringify('1.3.7'),
      'AIRBNB_ROOM1': JSON.stringify('https://airbnb.com/h/abiza'),
      'AIRBNB_ROOM2': JSON.stringify('https://airbnb.com/h/abiza2'),
      'AGODA_ROOM1': JSON.stringify('https://www.agoda.com/abiza-homestay/hotel/matnog-ph.html?hotel_id=35077109'),
      'AGODA_ROOM2': JSON.stringify('https://www.agoda.com/en-us/pages/agoda/default/page_hotel.aspx?hotel_id=42077085'),
      'BOOKING_DOT_COM_ROOMS': JSON.stringify('https://www.booking.com/hotel/ph/abiza-homestay.en-gb.html?aid=304142'),
      'GMAP_LOCATION': JSON.stringify('https://maps.google.com/?q=Abiza+Homestay'),
      'OPEN_WEATHER_RESOURCE_URL': JSON.stringify('https://api-weather-forecast.john-raymond-blando.workers.dev'),
      'OPEN_WEATHER_IMG_URL': JSON.stringify('https://openweathermap.org/img'),
    })
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        // exclude: /node_modules/,
        type: 'asset/resource',
        // use: 'file-loader'
      }
    ]
  }
}
