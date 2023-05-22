const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3002,
  },

  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "staff",
          filename: "staffEntry.js",
          exposes: {
            "./Button": "./src/Button.tsx",
            "./Report": "./src/Report.tsx",
          },
          shared: ["react", "react-dom"],
        }),
      ],
    },
  },
};
