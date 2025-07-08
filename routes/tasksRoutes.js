import express from 'express';
import {
  listarTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
  resumenTareas
} from '../controllers/tasksController.js';

const router = express.Router();

router.get('/', listarTareas);
router.post('/', crearTarea);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);
router.get('/summary', resumenTareas);

export default router;