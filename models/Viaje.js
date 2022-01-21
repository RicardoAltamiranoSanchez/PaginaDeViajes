import Sequelize from 'sequelize';
import db from '../config/db.js';
// definimos nuestra bae de datos de ponemos el nombre que vamos a utilizar con define y los parametros 
// debe coincidir con la base de atos que tenemos en mysql si no lo va traer ese campo
export const Viajes=db.define('viajes',{
titulo:{
  type:Sequelize.STRING,
},
precio:{
type:Sequelize.STRING,
},
fecha_ida:{
type:Sequelize.DATE,
},
fecha_vuelta:{
type:Sequelize.DATE,
},
imagen:{
type:Sequelize.STRING,
},
descripcion:{
type:Sequelize.STRING,
},
disponibles:{
type:Sequelize.STRING,
},
slug:{
type:Sequelize.STRING,
},

});