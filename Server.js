const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//tell app what to use

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//setup static assets

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//connect to Mongo

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/books",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
);

//server start & listen

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);