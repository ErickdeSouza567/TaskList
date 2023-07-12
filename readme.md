Portfolio TaskList - Project Description

This is the project README for the Tasklist portfolio project, written in JavaScript using Node.js and Yarn. The project consists of an application with the following functionalities:

UserController
store
Method responsible for registering a new user. The function performs the following steps:

Validates the input data using the Yup package to ensure that the name, email, and password meet the necessary requirements.
Checks if the user already exists in the database based on the provided email. If it exists, returns an error indicating that the user already exists.
Creates the user in the database using the User model with the properties name, email, and password.
Returns the data of the created user, including the id, name, and email.
update
Method responsible for updating a user's data. The function performs the following steps:

Validates the input data using the Yup package to ensure they meet the necessary requirements, including validation of the old password, new password, and password confirmation.
Checks if the provided email is already being used by another user. If it is, returns an error indicating that the user already exists.
Verifies if the provided old password corresponds to the user's current password. If it doesn't correspond, returns an error indicating that the password is incorrect.
Updates the user's data with the provided information.
Returns the updated user's data, including the id, name, and email.
TaskController
index
Method responsible for retrieving all tasks associated with a specific user. The function performs the following steps:

Fetches all tasks from the database that are associated with the provided user_id.
Returns the found tasks.
store
Method responsible for creating a new task for a user. The function performs the following steps:

Validates the input data using the Yup package to ensure that the task property is provided.
Creates the task in the database, associating it with the provided user_id.
Returns the created task.
update
Method responsible for updating task data. The function performs the following steps:

Fetches the task based on the provided task_id.
Checks if the task exists. If it doesn't exist, returns an error indicating that the task doesn't exist.
Updates the task data with the provided information.
Returns the updated task data.
delete
Method responsible for deleting a task. The function performs the following steps:

Fetches the task based on the provided task_id.
Checks if the task exists. If it doesn't exist, returns an error indicating that the task doesn't exist.
Checks if the task's user_id corresponds to the provided req.UserId. If it doesn't correspond, returns an error indicating that the request is not authorized.
Deletes the task from the database.
Returns a success response.
SessionController
store
Method responsible for authenticating a user and generating an access token. The function performs the following steps:

Retrieves the provided email and password.
Checks if the user exists in the database based on the provided email. If it doesn't exist, returns an error indicating that the user doesn't exist.
Checks if the provided password corresponds to the user's password. If it doesn't correspond, returns an error indicating that the password is incorrect.
Returns the authenticated user's data, including the id, name, and email, along with an access token generated using the jsonwebtoken package.
Authentication Middleware
Middleware responsible for verifying if an access token is valid. The function performs the following steps:

Checks if the access token exists in the request header. If it doesn't exist, returns an error indicating that the token doesn't exist.
Extracts the token from the provided string in the header.
Verifies if the token is valid and decodes the information contained within it using the jsonwebtoken package.
Stores the decoded user id in the req.userId property for later use.
Calls the next middleware function or route.
Authentication Configuration File (auth.js)
File that contains the configuration used for generating the access token. Defines the secret key (secret) used to sign the token and the token's expiration time (expiresIn).

Database Configuration File (database.js)
File that contains the configuration used for connecting to the PostgreSQL database. Defines the dialect, host, username, password, database name, and additional table definition options.

Database Connection File (database.js)
File responsible for establishing the connection to the database and initializing the models. Performs the following steps:

Creates an instance of Sequelize and establishes the connection to the database using the configuration defined in the database.js file.
Initializes the models using the init method of each model and associates the relationships between them if any.
Routes File (routes.js)
File that defines the application routes. Contains the following routes:

/users: Route for registering a new user. Uses the store method of the UserController.
/sessions: Route for authenticating a user and generating an access token. Uses the store method of the SessionController.
/users: Route for updating a user's data. Uses the update method of the UserController. Requires authentication.
/tasks: Route for creating a new task for a user. Uses the store method of the TaskController. Requires authentication.
/tasks: Route for retrieving all tasks of a user. Uses the index method of the TaskController. Requires authentication.
/tasks/:task_id: Route for updating task data. Uses the update method of the TaskController. Requires authentication.
/tasks/:task_id: Route for deleting a task. Uses the delete method of the TaskController. Requires authentication.
Main File (index.js)
Main file of the application. Creates an instance of the Express server, applies the middlewares, and defines the routes. Exports the server instance to be used in other modules.

I hope this description is useful for understanding the project's functionalities. If you have any questions, feel free to ask.




-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





Portfólio TaskList - Descrição do Projeto
Este é o README do projeto para o portfólio do Tasklist, projeto em JavaScript, utilizando Node.js e Yarn . O projeto consiste em uma aplicação que possui as seguintes funcionalidades:

UserController
store
Método responsável por cadastrar um novo usuário. A função realiza as seguintes etapas:

Valida os dados de entrada, utilizando o pacote Yup, para garantir que o nome, email e senha atendam aos requisitos necessários.
Verifica se o usuário já existe no banco de dados pelo email fornecido. Caso exista, retorna um erro informando que o usuário já existe.
Cria o usuário no banco de dados, utilizando o modelo User, com as propriedades name, email e password.
Retorna os dados do usuário criado, incluindo o id, name e email.
update
Método responsável por atualizar os dados de um usuário. A função realiza as seguintes etapas:

Valida os dados de entrada, utilizando o pacote Yup, para garantir que atendam aos requisitos necessários, incluindo a validação de senha antiga, nova senha e confirmação de senha.
Verifica se o email fornecido já está sendo utilizado por outro usuário. Caso esteja, retorna um erro informando que o usuário já existe.
Verifica se a senha antiga fornecida corresponde à senha atual do usuário. Caso não corresponda, retorna um erro informando que a senha está incorreta.
Atualiza os dados do usuário com as informações fornecidas.
Retorna os dados atualizados do usuário, incluindo o id, name e email.
TaskController
index
Método responsável por retornar todas as tarefas associadas a um usuário específico. A função realiza as seguintes etapas:

Obtém todas as tarefas do banco de dados que estão associadas ao user_id fornecido.
Retorna as tarefas encontradas.
store
Método responsável por cadastrar uma nova tarefa para um usuário. A função realiza as seguintes etapas:

Valida os dados de entrada, utilizando o pacote Yup, para garantir que a propriedade task seja fornecida.
Cria a tarefa no banco de dados, associando-a ao user_id fornecido.
Retorna a tarefa criada.
update
Método responsável por atualizar os dados de uma tarefa. A função realiza as seguintes etapas:

Obtém a tarefa com base no task_id fornecido.
Verifica se a tarefa existe. Caso não exista, retorna um erro informando que a tarefa não existe.
Atualiza os dados da tarefa com as informações fornecidas.
Retorna os dados atualizados da tarefa.
delete
Método responsável por excluir uma tarefa. A função realiza as seguintes etapas:

Obtém a tarefa com base no task_id fornecido.
Verifica se a tarefa existe. Caso não exista, retorna um erro informando que a tarefa não existe.
Verifica se o user_id da tarefa corresponde ao req.UserId fornecido. Caso não corresponda, retorna um erro informando que a requisição não está autorizada.
Exclui a tarefa do banco de dados.
Retorna uma resposta de sucesso.
SessionController
store
Método responsável por autenticar um usuário e gerar um token de acesso. A função realiza as seguintes etapas:

Obtém o email e password fornecidos.
Verifica se o usuário existe no banco de dados com base no email fornecido. Caso não exista, retorna um erro informando que o usuário não existe.
Verifica se a senha fornecida corresponde à senha do usuário. Caso não corresponda, retorna um erro informando que a senha está incorreta.
Retorna os dados do usuário autenticado, incluindo o id, name e email, juntamente com um token de acesso gerado utilizando o pacote jsonwebtoken.
Middleware de Autenticação
Middleware responsável por verificar se um token de acesso é válido. A função realiza as seguintes etapas:

Verifica se o token de acesso existe no cabeçalho da requisição. Caso não exista, retorna um erro informando que o token não existe.
Extrai o token da string fornecida no cabeçalho.
Verifica se o token é válido e decodifica as informações contidas nele, utilizando o pacote jsonwebtoken.
Armazena o id do usuário decodificado na propriedade req.userId para uso posterior.
Chama a próxima função de middleware ou rota.
Arquivo de Configuração de Autenticação (auth.js)
Arquivo que contém a configuração utilizada para a geração do token de acesso. Define a chave secreta (secret) utilizada para assinar o token e o tempo de expiração (expiresIn) do token.

Arquivo de Configuração do Banco de Dados (database.js)
Arquivo que contém a configuração utilizada para a conexão com o banco de dados PostgreSQL. Define o dialeto (dialect), o host (host), o nome de usuário (username), a senha (password), o nome do banco de dados (database) e algumas opções adicionais de definição de tabelas.

Arquivo de Conexão com o Banco de Dados (database.js)
Arquivo responsável por estabelecer a conexão com o banco de dados e inicializar os modelos. Realiza as seguintes etapas:

Cria uma instância do Sequelize e estabelece a conexão com o banco de dados, utilizando a configuração definida no arquivo database.js.
Inicializa os modelos, utilizando o método init de cada modelo e associa as relações entre eles, se houver.
Arquivo de Rotas (routes.js)
Arquivo que define as rotas da aplicação. Contém as seguintes rotas:

/users: Rota para cadastrar um novo usuário. Utiliza o método store do UserController.
/sessions: Rota para autenticar um usuário e gerar um token de acesso. Utiliza o método store do SessionController.
/users: Rota para atualizar os dados de um usuário. Utiliza o método update do UserController. Requer autenticação.
/tasks: Rota para cadastrar uma nova tarefa para um usuário. Utiliza o método store do TaskController. Requer autenticação.
/tasks: Rota para obter todas as tarefas de um usuário. Utiliza o método index do TaskController. Requer autenticação.
/tasks/:task_id: Rota para atualizar os dados de uma tarefa. Utiliza o método update do TaskController. Requer autenticação.
/tasks/:task_id: Rota para excluir uma tarefa. Utiliza o método delete do TaskController. Requer autenticação.
Arquivo Principal (index.js)
Arquivo principal da aplicação. Cria uma instância do servidor Express, aplica os middlewares e define as rotas. Exporta a instância do servidor para ser utilizada em outros módulos.

Espero que essa descrição seja útil para entender as funcionalidades do projeto. Se tiver alguma dúvida, fique à vontade para perguntar.
