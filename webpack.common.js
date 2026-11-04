import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "node:url";

export default {
  entry: {
    app: "./src/index.js",
  },
  //   experiments: {
  //     html: true,
  //   },
  output: {
    filename: "main.js",
    htmlFilename: "index.html",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
    html: {
      meta: {
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1",
      },
      title: "Production",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
