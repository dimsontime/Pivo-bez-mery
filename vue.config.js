const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    setupMiddlewares(middlewares, devServer) {
      let meraState = null;

      devServer.app.use("/mera-state", (req, res) => {
        res.setHeader("Cache-Control", "no-store");
        res.setHeader("Content-Type", "application/json");

        if (req.method === "GET") {
          res.end(JSON.stringify({ hasState: meraState !== null, state: meraState }));
          return;
        }

        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", () => {
            try {
              meraState = JSON.parse(body);
              res.end(JSON.stringify({ ok: true }));
            } catch (error) {
              res.statusCode = 400;
              res.end(JSON.stringify({ ok: false }));
            }
          });
          return;
        }

        res.statusCode = 405;
        res.end(JSON.stringify({ ok: false }));
      });

      return middlewares;
    },
  },
  pwa: {
    name: 'Mera Project',
    themeColor: '#0d7e86',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    displayMode: 'fullscreen',
  },
});
