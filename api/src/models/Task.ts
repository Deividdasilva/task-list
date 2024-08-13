// // src/models/Task.ts
// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database';

// const Task = sequelize.define('Task', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   favorite: {
//     type: DataTypes.BOOLEAN,
//     allowNull: true,
//     defaultValue: false,
//   },
//   color: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   }
// });

// export default Task;


import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Define os atributos necessários para a criação de uma nova tarefa
interface TaskAttributes {
  id?: number;
  title?: string;
  description?: string;
  favorite?: boolean;
  color?: string;
}

// Define os atributos opcionais durante a criação da tarefa
interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

// Define a classe Task estendendo o modelo Sequelize com os atributos definidos
class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public favorite!: boolean;
  public color!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializa o modelo Task com seus respectivos campos e tipos de dados
Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Tasks',
  }
);

export default Task;
