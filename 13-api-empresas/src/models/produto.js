const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    nome: {
      type:String,
      required:true
    }
  }
)

const produto = mongoose.model("produto", schema);


module.exports = produto