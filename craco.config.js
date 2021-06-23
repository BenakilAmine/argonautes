const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@layout-header-height": "110px",
              "@card-background": "#ec6c6d",
              "@card-head-font-size": "25px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
