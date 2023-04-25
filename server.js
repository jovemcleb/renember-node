require("dotenv").config();
const { connectToDataBase } = require("./src/model/connect");
const { app } = require("./api");

connectToDataBase();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
