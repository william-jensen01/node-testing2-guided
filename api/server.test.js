const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('./server')

const frodo = { name: 'frodo' }
const sam = { name: 'sam' }

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('hobbits').truncate()
})
afterAll(async () => {
  await db.destroy()
})

describe('server', () => {
  describe('[GET] /hobbits', () => {
    it('responds with 200 OK', async () => {
      const res = await 
    })
  })
})
