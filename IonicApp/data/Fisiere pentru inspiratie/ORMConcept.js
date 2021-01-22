const User = require("./models/User");

User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });