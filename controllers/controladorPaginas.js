import { Viajes } from "../models/Viaje.js";
import { Testimonio } from "../models/Testimoniales.js";

const PaginaInicio = async (req, res) => {
//hacemos un arreglo para poder meter las peticiones en la base de datos
//ya que en cada await se bloquea el codigo hasta que termien la peticion
  const promesaDb=[];
  promesaDb.push(Viajes.findAll({limit:3}));
  promesaDb.push(Testimonio.findAll({limit:3}));
  try {
//solo nos trae los tres primeros
    // const viajes = await Viajes.findAll({limit:3});
    // const testimoniales=await Testimonio.findAll({limit:3})
//con Promise.all()Ejecutamos todas las peticiones ala base de datos
   const resultado = await Promise.all(promesaDb);
  //req lo que enviamos y res lo que nos responde
  //res.json es para enviar un json
  //res.send es para enviar un mensaje en concreto
  //res.render es para enviar una pagina
  res.render("inicio",{
   clase:"home",
   viajes:resultado[0],
   testimoniales:resultado[1]
});

    
  } catch (error) {
    
  }



};

const PaginaViajes = async (req, res) => {
  //consulta ala base de datos con findAll() mandamos a llamar toda la base de datos
  const viajes = await Viajes.findAll();

  res.render("viajes", {
    pagina: "Viajes",
    viajes,
  });
};

const PaginaNosotros = (req, res) => {
  //busca la pagina en vista (views) y muestra la paginacon render
  //para enviar una variable a una hoja html es igula con render y ponemos parentensis
  res.render("nosotros", {
    pagina: "Nosotros",
  });
  //en el html para llamar la variable es con #{} o igual ejemplo  p#{viaje} p=viaje
};

const PaginaTestimoniales =async (req, res) => {

 try {
   const testimoniales= await Testimonio.findAll();
  res.render("testimoniales", {
    pagina: "Testimoniales",
    testimoniales,
  });

 } catch (error) {
  console.log(error);
   
 }




};




const PaginaInformacion = async (req, res) => {
  const { slug } = req.params;
  console.log(req.params.slug);
  try {
    // con el findOne buscamos solo un elemento y con where de decimos cual es el que queremos bucar
    const viaje = await Viajes.findOne({ where: { slug } });

    res.render("Informacion", {
      pagina: "Informacion del Viaje",
      viaje,
    });
  } catch (error) {
    console.log(`Hubo un error ${error}`);
  }
};
const GuardandoTestimoniales = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  console.log(req.body);
  const errores = [];
  // trim es par cortar un palabra que quite los epacion en blanco de incio y al afinal
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El campo nombre esta vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El campo correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El campo mensaje esta vacio " });
  }
  // si hay un error o un campo vacio y si el arreglo no esta vacio lo volvemos a redirigir ala pagina con los errores
  if (errores.length > 0) {
const testimoniales=await Testimonio.findAll();//pedimos la informacion de testimonio  cuando vuelva a recargar la pagina y no nos marque el error ya aue la peticion es otra y cuando hay un error nos redirige en la misma pagina
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
// guardanlo la informacion en la base de datos
    try {
    await  Testimonio.create({
        nombre,
        correo,
        mensaje,
      });
// redirigimos cuando este bien el formulario con res.redirect
res.redirect('/testimoniales');
    
    } catch (error) {
     console.log(`hubo un errro en la peticion post ${error}`)

}
  }
};

export {
  PaginaInicio,
  PaginaViajes,
  PaginaNosotros,
  PaginaTestimoniales,
  PaginaInformacion,
  GuardandoTestimoniales,
};
