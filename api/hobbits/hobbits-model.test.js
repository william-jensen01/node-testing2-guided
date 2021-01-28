it('is the correct env', () => {
  expect(process.env.DB_ENV)
    .toBe('testing')
})

const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
})
