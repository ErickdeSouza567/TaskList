import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Task from '../app/models/Task';

const models = [User];

class DataBase {
  constructor(){
    this.init();
  }

  init(){
    //Conexão do banco de dados com nossos models
    this.connection = new Sequelize(databaseConfig);
    
  
    models.map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();