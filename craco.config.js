const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#e5696b ",
              "@layout-header-height": "110px",
              "@card-head-font-size": "25px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
