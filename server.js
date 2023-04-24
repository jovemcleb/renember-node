require("dotenv").config();
const { app } = require("./api");

const port = process.env.PORT;

app.get("/", (_req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
