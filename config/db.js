//configuracion de la base de datos
import Sequelize from 'sequelize';
//Pasamos la variables para produccion
import dotenv from'dotenv';
dotenv.config({path:'variable.env'});
// primero ponemos el nombre de la baje de datos y depues el usuario y el password

const db=new Sequelize(process.env.DB_BASEDATOS,process.env.DB_USUARIO,process.env.DB_PASSWORD,{
 host:process.env.DB_HOST,
 port:process.env.DB_PUERTO,
dialect:'mysql',
define:{

   timestamps:false
},
pool:{
     max:5,
    min:0,
   acquires:30000,
    idle:10000
},
operatorAliases:false

});

export default db;