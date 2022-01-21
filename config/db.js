//configuracion de la base de datos
import Sequelize from 'sequelize';
// primero ponemos el nombre de la baje de datos y depues el usuario y el password
const db=new Sequelize('PaginaDeViajes','root','',{
 host:'127.0.0.1',
port:'3306',
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