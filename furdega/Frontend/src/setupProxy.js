const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://deganov-mebel.ru",
      changeOrigin: true,
      secure: false,
    })
  )
}
