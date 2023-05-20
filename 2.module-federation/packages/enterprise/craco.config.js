const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3001,
  },

  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "enterprise",
          filename: "enterpriseEntry.js",
          remotes: {
            staff: "staff@http://localhost:3002/staffEntry.js",
          },
        }),
      ],
    },
  },
};
