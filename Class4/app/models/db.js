import dbConfig from "../config/db.config.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: dbConfig.host,
  username: dbConfig.username, 
  password: dbConfig.password,  
  database: dbConfig.db,
});

sequelize.authenticate()
  .then(() => {
    console.log("Congratulations, you have connected to the database!");
  })
  .catch(err => {
    console.error("Oops! Unable to connect to the database:", err);
  });

// making sequelize accessible through export
export default sequelize;
