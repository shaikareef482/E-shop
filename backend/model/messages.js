const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    conversionId: {
      type: String,
    },
    text: {
      type: String,
    },
    sender: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);


module.exports = mongoose.model("Message",messageSchema);