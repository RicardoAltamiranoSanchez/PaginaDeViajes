import {Viajes} from '../models/Viaje.js';




const PaginaInicio=(req,res)=>{//req lo que enviamos y res lo que nos responde
 //res.json es para enviar un json 
//res.send es para enviar un mensaje en concreto
//res.render es para enviar una pagina 
  res.render('inicio');
}





const PaginaViajes=async (req,res)=>{
//consulta ala base de datos con findAll() mandamos a llamar toda la base de datos
const viajes= await Viajes.findAll();

res.render('viajes',{
pagina:"Viajes",
viajes,})

}



const PaginaNosotros=(req,res)=>{    
   //busca la pagina en vista (views) y muestra la paginacon render 
   //para enviar una variable a una hoja html es igula con render y ponemos parentensis
    res.render('nosotros',{
    pagina:"Nosotros",
    })
 //en el html para llamar la variable es con #{} o igual ejemplo  p#{viaje} p=viaje
}




const PaginaTestimoniales=(req,res)=>{
  res.render('testimoniales',{
     pagina: "Testimoniales",
});
}

const PaginaInformacion= async (req ,res) =>{
const {slug}=req.params;
console.log(req.params.slug);
try{

// con el findOne buscamos solo un elemento y con where de decimos cual es el que queremos bucar
 const viaje= await Viajes.findOne({where:{slug}});

res.render('Informacion',{
  pagina: "Informacion del Viaje",
  viaje,

});


}
catch(error){
console.log(`Hubo un error ${error}`)
}

}



export{
PaginaInicio,
PaginaViajes,
PaginaNosotros,
PaginaTestimoniales,
PaginaInformacion,

}