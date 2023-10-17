module.exports = (connection, DataTypes) => {
  const User = connection.define("User", {
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    adress: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    zip: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    },
  });
  return User;
};
