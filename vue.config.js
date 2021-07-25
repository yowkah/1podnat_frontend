module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "192.168.178.54:3000",
        ws: true,
        changeOrigin: true,
      },
    },
    allowedHosts: ["home.yowkah.nl"],
  },
};
