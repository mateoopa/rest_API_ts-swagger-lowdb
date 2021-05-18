import { Router } from 'express'
import {
    getTasks,
    createTask,
    count,
    deleteTask,
    getTask,
    updateTask,
  } from "../controllers/tasks.controller";

const router = Router()

router.get("/tasks", getTasks);

router.get('/tasks/count', count)

router.post('/tasks', createTask);

router.get('/tasks/:id', getTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

export default router