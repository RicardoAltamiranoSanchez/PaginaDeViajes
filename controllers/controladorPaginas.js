const PaginaInicio=(req,res)=>{//req lo que enviamos y res lo que nos responde
 //res.json es para enviar un json 
//res.send es para enviar un mensaje en concreto
//res.render es para enviar una pagina 
  res.render('inicio');
}

const PaginaViajes=(req,res)=>{

render('viajes',{
pagina:"Viajes",
})

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
export{
PaginaInicio,
PaginaViajes,
PaginaNosotros,
PaginaTestimoniales
}