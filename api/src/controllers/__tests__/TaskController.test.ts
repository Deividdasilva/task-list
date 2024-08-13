import request from 'supertest';
import app from '../../app';
import sequelize from '../../config/database';

describe('TaskController', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Reseta o banco de dados antes dos testes
  });

  afterAll(async () => {
    await sequelize.close(); // Fecha a conexão com o banco após os testes
  });

  it('should create a task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task',
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Task');
  });

  it('should get all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should update a task', async () => {
    const task = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Task to Update',
        description: 'Update this task',
      });

    const response = await request(app)
      .put(`/api/tasks/${task.body.id}`)
      .send({
        title: 'Updated Task',
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Updated Task');
  });

  it('should delete a task', async () => {
    const task = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Task to Delete',
      });

    const response = await request(app).delete(`/api/tasks/${task.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Task deleted');
  });
});
