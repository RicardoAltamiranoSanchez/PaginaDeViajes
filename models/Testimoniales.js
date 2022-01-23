import Sequelize from 'sequelize';
import db from '../config/db.js';
// definimos nuestra bae de datos de ponemos el nombre que vamos a utilizar con define y los parametros 
// debe coincidir con la base de atos que tenemos en mysql si no lo va traer ese campo
export const Testimonio=db.define('testimoniales',{
nombre:{
  type:Sequelize.STRING,
},
correo:{
type:Sequelize.STRING,
},
mensaje:{
type:Sequelize.STRING,
},
});