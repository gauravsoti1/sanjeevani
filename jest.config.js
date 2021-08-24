/*
  This file tells jest that we want to ignore files in our node_modules
  directory, and also the .next (this is where Next compiles our application) directory.
  We want jest to run our setupTests file before running our tests, 
  and we want it to transform our JavaScript using babel-jest.
*/
module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
