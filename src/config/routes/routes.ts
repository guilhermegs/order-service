import { Router } from 'express'
import { employeeRoutes } from './EmployeeRoutes'

const router = Router()
employeeRoutes(router)

export { router }