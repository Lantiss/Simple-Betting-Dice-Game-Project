import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "kesavan.db.elephantsql.com",
  database: "jnnvohlx",
  username: "jnnvohlx",
  password: "5rXww8NZcyavN1QAyh6mC84YdLD7Q-6I",
  logging: true,
  models: [__dirname + "/models"],
});

export { sequelize };
