import express from 'express';
import {PaginaInicio,
PaginaViajes,
PaginaNosotros,
PaginaTestimoniales,
PaginaInformacion,
GuardandoTestimoniales} from '../controllers/controladorPaginas.js';
const router = express.Router();





router.get('/',PaginaInicio);
router.get('/Viajes',PaginaViajes);
router.get('/Nosotros',PaginaNosotros);
router.get('/ViajeInformacion/:slug',PaginaInformacion);
router.get('/Testimoniales',PaginaTestimoniales);
router.post('/Testimoniales',GuardandoTestimoniales);


export default router;

