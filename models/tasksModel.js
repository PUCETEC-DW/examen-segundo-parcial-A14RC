let tasks = [];

export const getAllTasks = () => tasks;

export const getTaskById = (id) => tasks.find(t => t.id === id);

export const addTask = (task) => {
  tasks.push(task);
};

export const updateTask = (id, updates) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updates };
  }
};

export const deleteTask = (id) => {
  tasks = tasks.filter(t => t.id !== id);
};

export const getSummary = () => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.filter(t => !t.completed);
  const avgPriority = pending.length > 0
    ? pending.reduce((sum, t) => sum + t.priority, 0) / pending.length
    : 0;

  return { total, completed, avgPriority };
};