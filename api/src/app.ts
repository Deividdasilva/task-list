// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import apiRoutes from './routes/indexRoutes';
// import sequelize from './config/database';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // Isolando a função de inicialização do banco de dados e servidor para controlar via Jest
// function initializeDatabase() {
//   return sequelize.sync();
// }

// function startServer() {
//   return app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

// // Exportando funções para permitir controle nos testes
// export { app, initializeDatabase, startServer };

// // Verificando se o arquivo é executado diretamente e não importado (isso evita que o servidor inicie durante os testes automaticamente)
// if (require.main === module) {
//   initializeDatabase()
//     .then(() => {
//       console.log('Database & tables created!');
//       startServer();
//     })
//     .catch(error => {
//       console.error('Failed to create database & tables:', error);
//     });
// }

// export default app; 

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/indexRoutes';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear o corpo da requisição em JSON
app.use(bodyParser.json());

// Definindo a rota principal da API
app.use('/api', apiRoutes);

// Rota raiz para verificar o status da API
app.get('/', (req, res) => {
  res.send('API is running...');
});

/**
 * Inicializa e sincroniza o banco de dados.
 * 
 * @returns {Promise} - Retorna uma promessa que é resolvida quando o banco de dados está sincronizado.
 */
function initializeDatabaseAndSync() {
  return sequelize.sync();
}

/**
 * Inicia o servidor na porta definida.
 * 
 * @returns {Server} - Retorna a instância do servidor.
 */
function startServer() {
  return app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Exportando funções e a aplicação para permitir controle nos testes
export { app, initializeDatabaseAndSync, startServer };

// Verifica se o arquivo está sendo executado diretamente ou importado em outro módulo
if (require.main === module) {
  initializeDatabaseAndSync()
    .then(() => {
      console.log('Database & tables created successfully!');
      startServer();
    })
    .catch(error => {
      console.error('Failed to initialize database & create tables:', error);
    });
}

export default app; 






