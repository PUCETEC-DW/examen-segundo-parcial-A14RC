[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GFpDxrMP)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19912376&assignment_repo_type=AssignmentRepo)
# Desarrollo Web 2025
# 🗂️ Examen Parcial Backend - Node.js + Express + MVC

## Funcionalidades 

Deberás desarrollar un backend para una API de Tareas Avanzadas con Express.js aplicando el patrón MVC. La aplicación debe exponer endpoints RESTful para administrar tareas, con algunas validaciones y lógica de negocio que pongan a prueba tu dominio de JavaScript, promesas, callbacks y estructura de código limpio

Requisitos básicos:

- Usar Express.js y Node.js.
- Organizar en carpetas: controllers, models, routes.
- Usar un archivo app.js principal.
- Implementar almacenamiento en memoria (no base de datos).

Crear endpoints:

1. GET /tasks → lista todas las tareas.
2. POST /tasks → crea una tarea (con validación).
3. PUT /tasks/:id → actualiza el estado de una tarea.
4. DELETE /tasks/:id → elimina una tarea.
5. GET /tasks/summary → muestra estadísticas avanzadas.

Restricciones:

- Cada tarea debe tener: id, title, description, completed (true/false), priority (1-5).
- No se permiten IDs duplicados.
- Debes validar que priority esté entre 1 y 5.
- GET /tasks/summary debe retornar:
   - Número total de tareas.
   - Número de tareas completadas.
   - Promedio de prioridad de tareas pendientes.

## 📌 Instrucciones

1. Clona este repositorio.
2. Ejecuta `npm install`.
3. Desarrolla el proyecto siguiendo la estructura MVC:
   - `controllers/` para la lógica de los endpoints.
   - `models/` para la lógica de datos (almacenamiento en memoria).
   - `routes/` para definir rutas de Express.
4. Asegúrate de que `npm test` pase todos los tests.
5. Haz commit de tu solución y push.

## 🧪 Ejecutar tests
```bash
npm run test
