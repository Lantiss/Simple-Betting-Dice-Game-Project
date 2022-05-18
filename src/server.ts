import { app } from "./app";
import { sequelize } from "./services/db/connection";

app.listen(3000, async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log(`Server on port 3000`);
  } catch (error) {
    console.log(error);
  }
});
