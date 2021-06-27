const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}/${process.env.DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDb connected"));
