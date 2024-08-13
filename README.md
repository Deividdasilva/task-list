
## task-list
Este projeto consiste em uma API backend desenvolvida em Node.js, e um frontend em React. Utiliza PostgreSQL como sistema de banco de dados, com Docker e Docker Compose para simplificar a configuração e a execução do ambiente de desenvolvimento.

## Requisitos

- Docker
- Docker Compose

## Configuração do Ambiente

### Clonando o Repositório

```bash
git clone https://github.com/Deividdasilva/task-list.git
cd task-list/docker
```

### Iniciando os Containers

Utilize o Docker Compose para iniciar os containers:

```bash
 cd task-list/docker 
 docker-compose up -d
```

Este comando deve ser executado dentro do diretório task-list/docker.

### Executando os Testes
Para rodar os testes automatizados da API, utilize o seguinte comando:

```bash
cd task-list/docker
docker-compose up api-test
```

Este comando deve ser executado dentro do diretório task-list/docker.

### Acessando a Aplicação

- **API Backend**: [http://localhost:3000](http://localhost:3000)
- **Frontend**: [http://localhost:3001](http://localhost:3001)

## Estrutura do Projeto

- `task-list/api`: Código-fonte da API backend Node.js.
- `task-list/front`: Código-fonte do frontend React.
- `task-list/docker`: Arquivos de configuração para Docker e Docker Compose.
