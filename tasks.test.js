const request = require('supertest');
const { app } = require('./index');

describe('GET /tasks', () => {
  test('returns list of tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });
});

describe('POST /tasks', () => {
  test('creates a new task when title is provided', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'New Task' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title', 'New Task');
    expect(res.body).toHaveProperty('done', false);
  });

  test('returns 400 when title is missing', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Title is required');
  });
});
