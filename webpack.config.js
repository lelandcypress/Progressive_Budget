const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./public/index.js",
    transactions: "./models/transaction.js",
    db: "./public/db.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: "Progressive Budget App",
      short_name: "Progressive Bugdet",
      description: "Keep track of your expensese both online and offline",
      background_color: "#dddddd",
      theme_color: "#dddddd",
      "theme-color": "#dddddd",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/icons/icon-192x192.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
};

module.exports = config;
