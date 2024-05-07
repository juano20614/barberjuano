import db from '../config/config-db';
import User from '../Dto/UserDto';
import bcrypt from 'bcryptjs';
import Auth from '../Dto/AuthDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, apellidos,nombrebarber,horario, direccion, telefono, password) VALUES (?,?,?,?,?,?,?,?)';
        const values = [user.email, user.nombres,user.apellidos,user.nombrebarber,user.horario, user.direccion,  user.telefono, user.password];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
      const sql = 'SELECT password FROM users WHERE nombrebarber=?';
      const values = [auth.nombrebarber];
      const result: any = await db.execute(sql, values);
      if (result[0].length > 0){
        const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
        if (isPasswordValid){
          return {logged: true, status: "inicio de sesion exitosa"}
        }
        return {logged: false, status: "Invalid username or password" };
      }
      return {logged: false, status: "Invalid username or password" };
  }

          static async verytoken(user: User){
            const sql = 'SELECT * FROM users WHERE nombrebarber =?'
            const values = [user.nombrebarber];
            return db.execute(sql, values);
        }
    }



export default UserRepository;