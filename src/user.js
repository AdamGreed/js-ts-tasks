class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string' || typeof age !== 'number') {
      throw new Error('Invalid data types for User fields');
    }

    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (typeof value !== 'number') {
      throw new Error('Age must be a number');
    }
    this.#age = value;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('First name must be a string');
    }
    this.#firstName = value;
  }

  set secondName(value) {
    if (typeof value !== 'string') {
      throw new Error('Second name must be a string');
    }
    this.#secondName = value;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age += 1;
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
//testGitPushComment
/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(({ firstName, secondName, age }) => new User(firstName, secondName, age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 === 0) {
      user.celebrateBirthday();
    }
  });
  return users;
};
