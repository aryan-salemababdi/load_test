import app from "./app.js";
import { sequelize } from "./db.js";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection successful.");

    await sequelize.sync();
    console.log("📦 Models have been synced with the database.");

    app.listen(PORT,() => {
      console.log(`🚀 Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
  }
})();