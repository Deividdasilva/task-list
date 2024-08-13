// // src/routes/indexRoutes.ts
// import express from 'express';
// import { TaskController } from '../controllers/TaskController';

// const router = express.Router();
// const taskController = new TaskController();

// // Rotas para operações com tarefas
// router.post('/tasks', taskController.createTask);
// router.get('/tasks', taskController.getAllTasks.bind(taskController));
// router.put('/tasks/:id', taskController.updateTask);
// router.delete('/tasks/:id', taskController.deleteTask);

// export default router;

import express from 'express';
import { TaskController } from '../controllers/TaskController';

const router = express.Router();
const taskController = new TaskController();

// Rotas para operações com tarefas
router.post('/tasks', taskController.createTask.bind(taskController));
router.get('/tasks', taskController.getAllTasks.bind(taskController));
router.put('/tasks/:id', taskController.updateTask.bind(taskController));
router.delete('/tasks/:id', taskController.deleteTask.bind(taskController));

export default router;

