const app = require("./app");
const config = require("./app/config");

const { port } = config.server;

app.listen(port, function () {
  console.log(`Server running on port ${port}...`);
});
