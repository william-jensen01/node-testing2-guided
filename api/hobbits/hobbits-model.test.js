it('is the correct env', () => {
  expect(process.env.DB_ENV)
    .toBe('testing')
})

const Hobbit = require('./hobbits-model')

