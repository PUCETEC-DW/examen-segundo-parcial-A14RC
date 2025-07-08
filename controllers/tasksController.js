import {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
  getSummary
} from '../models/tasksModel.js';

export const listarTareas = (req, res) => {
  res.json(getAllTasks());
};

export const crearTarea = (req, res) => {
  const { id, title, description, completed, priority } = req.body;

  // Validaciones
  if (!id || !title || !description || typeof completed !== 'boolean' || typeof priority !== 'number') {
    return res.status(400).json({ error: 'Datos incompletos o incorrectos.' });
  }

  if (priority < 1 || priority > 5) {
    return res.status(400).json({ error: 'La prioridad debe estar entre 1 y 5.' });
  }

  if (getTaskById(id)) {
    return res.status(400).json({ error: 'ID duplicado. Ya existe una tarea con ese ID.' });
  }

  addTask({ id, title, description, completed, priority });
  res.status(201).json({ message: 'Tarea creada exitosamente.' });
};

export const actualizarTarea = (req, res) => {
  const id = parseInt(req.params.id);
  const { completed } = req.body;

  updateTask(id, { completed });
  res.json({ message: 'Tarea actualizada.' });
};

export const eliminarTarea = (req, res) => {
  const id = parseInt(req.params.id);
  deleteTask(id);
  res.json({ message: 'Tarea eliminada.' });
};

export const resumenTareas = (req, res) => {
  res.json(getSummary());
};