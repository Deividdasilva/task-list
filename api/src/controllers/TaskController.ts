// // src/controllers/TaskController.ts
// import { Request, Response } from 'express';
// import Task from '../models/Task';

// export class TaskController {
//   // Método para criar uma tarefa
//   async createTask(req: Request, res: Response) {
//     try {
//       const task = await Task.create(req.body);
//       res.status(201).send(task);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   }

//   async getAllTasks(req: Request, res: Response) {
//     try {
//       const tasks = await Task.findAll();
//       res.send(tasks);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   }

//   // Método para atualizar uma tarefa
//   async updateTask(req: Request, res: Response) {
//     try {
//       const task = await Task.findByPk(req.params.id);
//       if (task) {
//         await task.update(req.body);
//         res.send(task);
//       } else {
//         res.status(404).send({ message: 'Task not found' });
//       }
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   }

//   // Método para deletar uma tarefa
//   async deleteTask(req: Request, res: Response) {
//     try {
//       const task = await Task.findByPk(req.params.id);
//       if (task) {
//         await task.destroy();
//         res.send({ message: 'Task deleted' });
//       } else {
//         res.status(404).send({ message: 'Task not found' });
//       }
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   }
// }


import { Request, Response } from 'express';
import Task from '../models/Task';

export class TaskController {
  /**
   * Cria uma nova tarefa.
   * 
   * @param req - Objeto de requisição contendo os dados da nova tarefa.
   * @param res - Objeto de resposta para retornar a nova tarefa criada ou um erro.
   * 
   * @returns Retorna a tarefa criada com status 201 ou um erro com status 400.
   */
  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar a tarefa', error });
    }
  }

  /**
   * Obtém todas as tarefas.
   * 
   * @param req - Objeto de requisição.
   * @param res - Objeto de resposta para retornar a lista de tarefas ou um erro.
   * 
   * @returns Retorna uma lista de tarefas com status 200 ou um erro com status 500.
   */
  async getAllTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar as tarefas', error });
    }
  }

  /**
   * Atualiza uma tarefa existente.
   * 
   * @param req - Objeto de requisição contendo o ID da tarefa nos parâmetros e os dados a serem atualizados no corpo.
   * @param res - Objeto de resposta para retornar a tarefa atualizada ou um erro.
   * 
   * @returns Retorna a tarefa atualizada com status 200 ou um erro com status 404/400.
   */
  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        res.status(404).json({ message: 'Tarefa não encontrada' });
        return;
      }
      await task.update(req.body);
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar a tarefa', error });
    }
  }

  /**
   * Deleta uma tarefa existente.
   * 
   * @param req - Objeto de requisição contendo o ID da tarefa nos parâmetros.
   * @param res - Objeto de resposta para confirmar a exclusão ou retornar um erro.
   * 
   * @returns Retorna uma mensagem de sucesso com status 200 ou um erro com status 404/500.
   */
  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        res.status(404).json({ message: 'Tarefa não encontrada' });
        return;
      }
      await task.destroy();
      res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar a tarefa', error });
    }
  }
}
