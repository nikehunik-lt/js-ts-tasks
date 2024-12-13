class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string') {
      throw new Error('The type entered is currently invalid. firstName must be a string!');
    }
    if (typeof secondName !== 'string') {
      throw new Error('The type entered is currently invalid. secondName must be a string!');
    }
    if (typeof age !== 'number') {
      throw new Error('The type entered is currently invalid. age must be a number!');
    }

    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
  set age(anotherAge) {
    if (typeof anotherAge !== 'number') {
      throw new Error('The type entered is currently invalid. anotherAge must be a number!');
    } else {
      this.#age = anotherAge;
    }
  }

  set firstName(anotherFirstName) {
    if (typeof anotherFirstName !== 'string') {
      throw new Error('The type entered is currently invalid. anotherFirstName must be a string!');
    } else {
      this.#firstName = anotherFirstName;
    }
  }

  set secondName(anotherSecondName) {
    if (typeof anotherSecondName !== 'string') {
      throw new Error('The type entered is currently invalid. anotherSecondName must be a string!');
    }
    this.#secondName = anotherSecondName;
  }

  get name() {
    return this.#firstName + ' ' + this.#secondName;
  }

  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  const users = [];
  for (let i = 0; i < data.length; i++) {
    const firstName = data[i].firstName;
    const secondName = data[i].secondName;
    const age = data[i].age;
    users.push(new User(firstName, secondName, age));
  }
  return users;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => {
    return user.age == age;
  });
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return array => {
    return array.sort(TestUtils.sortComparatorByAge);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for (let i = 0; i < users.length; i++) {
    if (i % 2 == 0) {
      users[i].celebrateBirthday();
    }
  }
  return users;
};
