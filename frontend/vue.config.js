const BundleTracker = require("webpack-bundle-tracker");

const pages = {
  monster_view: {
    entry: "./src/ui/pages/monster_view/main.js",
    chunks: ["chunk-vendors"],
  },
};

module.exports = {
  pages: pages,
  filenameHashing: false,
  productionSourceMap: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "" : "http://localhost:8080/",
  outputDir: "../static/frontend/",

  configureWebpack: {
    devtool: "source-map",
  },

  chainWebpack: config => {
    config.optimization.splitChunks({
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "chunk-vendors",
          chunks: "all",
          priority: 1,
        },
      },
    });

    Object.keys(pages).forEach(page => {
      config.plugins.delete(`html-${page}`);
      config.plugins.delete(`preload-${page}`);
      config.plugins.delete(`prefetch-${page}`);
    });

    if (process.env.NODE_ENV === "production") {
      config
        .plugin("BundleTracker")
        .use(BundleTracker, [
          { filename: "../static/frontend/webpack-stats-prod.json" },
        ]);
    } else {
      config
        .plugin("BundleTracker")
        .use(BundleTracker, [{ filename: "../frontend/webpack-stats.json" }]);
    }

    config.devServer
      .public("http://localhost:8080")
      .host("localhost")
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["*"] });
  },
};