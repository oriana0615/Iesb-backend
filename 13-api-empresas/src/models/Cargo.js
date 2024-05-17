const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    nome: {
      type:String,
      required:true
    }
  }
)

const Cargo = mongoose.model("cargo", schema);


module.exports = Cargo