import express from 'express';
import tasksRoutes from '../routes/tasksRoutes.js';

const app = express();
app.use(express.json()); // Para recibir JSON

app.use('/tasks', tasksRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

export default app;