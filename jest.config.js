module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { rootMode: 'upward' }],
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
}