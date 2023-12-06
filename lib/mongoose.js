const { default: mongoose } = require("mongoose");

function mongooseConnect() {
  // check if we are already connected to the database
  if (mongoose.connection.readyState == 1) {
    return mongoose.connection.asPromise();
  } else {
    // connect to the database if we are not already connected
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri);
  }
}

export default mongooseConnect;
