const express = require("express");
const app = express();
const port = 3001; // Using 3001 to avoid conflict with the React dev server
const { pathToFileURL } = require("url");
const path = require("path");

const getCommuteHubServer = async () => {
  const filePath = "../.output/server/index.mjs";
  const fileURL = pathToFileURL(filePath).href;

  const nitroModule = await import(fileURL);

  return nitroModule;
};

async function start() {
  const nitroModule = await getCommuteHubServer();

  /**
   * This workaround should not be needed. Ideally TSS and TSR can be configured
   * for this use case
   */
  //   app.all("/hub/_build/assets/:filename", (req, res, next) => {
  //     const filename = req.params.filename;
  //     console.log(`Serving asset: ${filename}`);
  //     res.sendFile(
  //       path.join(__dirname, "../.output/public/_build/assets", filename)
  //     );
  //   });

  app.all(["/hub", "/hub/*"], (req, res, next) => {
    nitroModule.handler(req, res, (err) => {
      console.log("Nitro handler callback executed");
      if (err) {
        console.error("Nitro handler error:", err);
        return next(err);
      }
      if (!res.writableEnded) {
        console.log(
          "Nitro did not end response, restoring URL and passing to next"
        );
        return next();
      }
      console.log("Response ended by Nitro handler");
    });
  });

  // Basic route that sends "Hello World"
  app.get("/", (req, res) => {
    res.send("Hello World from express");
  });

  // Add a catch-all route for debugging
  app.use((req, res) => {
    console.log("404 - Route not found:", req.url);
    res.status(404).send(`Route not found: ${req.url}`);
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

start();
