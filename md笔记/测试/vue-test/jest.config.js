module.exports = {
  "collectCoverage": true,
  "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"],
  "moduleFileExtensions": [
    "js",
    "json",
    // tell Jest to handle *.vue files
    "vue"
  ],
  testPathIgnorePatterns:[
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/config/"
  ],
  "transform": {
    // process js with babel-jest
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    // process *.vue files with vue-jest
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  // support the same @ -> src alias mapping in source code
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "vue", "json"],
  // serializer for snapshots
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}
