const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/renember");
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.error("Erro na conexão com o banco de dados:", error);
  }
};

module.exports = { connectToDataBase };
