const mongoose = require("mongoose");

const MemeimageSchema = new mongoose.Schema(
    {
          imgURL: {
            type: String,
           require: true,
          },
        },
    { timeStamps: true }
)

module.exports = mongoose.model("MemeImage",MemeimageSchema);