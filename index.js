const app = require("./app");
require("dotenv").config();
const port = process.env.RUNNING_PORT;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
