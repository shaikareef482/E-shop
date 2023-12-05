const app = require("./app");
const connectDatabase = require("./db/Database");
const cors = require("cors");
const path = require("path");
const express = require("express");
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server for handlig uncaught error");
});

if (process.env.NODE_ENV === "production") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

app.use(
  cors({
    origin: "*",
    methods: ["GET","POST","PUT","PATCH","DELETE"],
  })
);

connectDatabase();

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is Running Successfully");
  });
}

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting dowm the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
