module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
};
