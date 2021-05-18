import {Router} from 'express'
import {getTasks} from '../controllers/task.controller'

const router = Router()

router.get("/tasks", getTasks);

router.get('/tasks/count', (req, res) => res.send('Hello Wold!'))

router.post('/tasks', (req, res) => res.send('Hello Wold!'))

router.get('/tasks/:id', (req, res) => res.send('Hello Wold!'))

router.delete('/tasks/:id', (req, res) => res.send('Hello Wold!'))

router.put('/tasks/:id', (req, res) => res.send('Hello Wold!'))

export default router