import { Router, request, response, Request, Response} from 'express'

import { getTasks } from './controller/TasksController';
import { saveTask } from './controller/TasksController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Boa Noite Alunos!' })
})

routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
 
export default routes