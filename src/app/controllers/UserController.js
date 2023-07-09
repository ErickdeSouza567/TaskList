import User from '../models/User';
import * as Yup from 'yup';

class UserController {
  async store(req, res) {

    const schema= Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
      .email()
      .required(),
      password: Yup.string()
      .required()
      .min(6),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Falha na validação.' });
    }

    const { name, email, password } = req.body; // Incluir a propriedade "password"

    try {
      const createdUser = await User.sequelize.transaction(async (transaction) => {
        const userExists = await User.findOne({
          where: { email },
          transaction
        });

        if (userExists) {
          throw new Error('Usuário já existe.');
        }

        const user = await User.create({ name, email, password }, { transaction }); // Incluir a propriedade "password"

        return user;
      });

      const { id } = createdUser;

      return res.json({ 
        id,
        name,
        email,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6).when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required() : field
      ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password
          ? field.required().oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
          : field
      ),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({error: 'Falha na validação. '});
      
    }

    const { email, oldPassword } =  req.body;

    const user = await User.findByPk(req.userId);

    if(email !== user.email){
      const userExists = await User.findOne({
        where: { email: req.body.email},
      });

      if (userExists){
        return res.status(400).json({ error: 'Usuario já existe'});
      }
    }

    if(oldPassword && !(await user.checkPassword(oldPassword))){
      return res.status(401).json({error: 'Senha incorreta.'});
    }

    const {id, name} = await user.update(req.body);

    return res.json ({ 
      id,
      name,
      email
     });
  }



}

export default new UserController();
