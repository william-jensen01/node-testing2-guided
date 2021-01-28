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
      const res = await request(server).get('/hobbits')
      expect(res.status).toBe(200)
    })
    it('returns the right num of hobbits', async () => {
      let res
      await db('hobbits').insert(frodo)
      res = await request(server).get('/hobbits')
      expect(res.body).toHaveLength(1)

      await db('hobbits').insert(sam)
      res = await request(server).get('/hobbits')
      expect(res.body).toHaveLength(2)
    })
    it('returns the right hobbits', async () => {
      await db('hobbits').insert(frodo)
      await db('hobbits').insert(sam)
      const res = await request(server).get('/hobbits')
      expect(res.body[0]).toMatchObject({ id: 1, ...frodo })
      expect(res.body[1]).toMatchObject({ id: 2, ...sam })
    })
  })
  describe('[POST] /hobbits', () => {
    it('responds with the newly created hobbit', async () => {
      // request(server).post('/hobbits').send({})
      const req = await request(server).post("/hobbits").send({name:"name"})
      expect(res.body[0]).toMatchObject({id:1, name:"name"})
    })
  })
})
