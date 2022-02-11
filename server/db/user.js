const Sequelize = require("sequelize");
const db = require("./database");
const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Must be a valid email address",
      },
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://fortmyersradon.com/wp-content/uploads/2019/12/dummy-user-img-1.png",
  },
  password: {
    type: Sequelize.STRING,
  },
  googleId: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
