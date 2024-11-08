const express = require("express");
const app = express();
const morgan = require("morgan");
const parser = require("body-parser");
const path = require("path");

const { createServer } = require("vite");

const port = process.env.PORT || 4005;

app.use(morgan("dev"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "dist")));

//virtual path for assets
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));

const v = async function () {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);
};

//api routes
app.use("/api", require("./api/api.js"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/dist/index.html"));
});

app.listen(port, () => console.log("listening on port" + port));
v();
