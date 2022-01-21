import express from 'express';
import {PaginaInicio,
PaginaViajes,
PaginaNosotros,
PaginaTestimoniales} from '../controllers/controladorPaginas.js';
const router = express.Router();





router.get('/',PaginaInicio);
router.get('/Viajes',PaginaViajes)
router.get('/Nosotros',PaginaNosotros);
router.get('/Testimoniales',PaginaTestimoniales);

export default router;

