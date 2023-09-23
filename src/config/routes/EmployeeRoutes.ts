import { Router, Request, Response } from "express"
import { EmployeeControlerCompose } from "../compose/EmployeeControlerCompose"

const employeeController = EmployeeControlerCompose()

const employeeRoutes = (router: Router) : void => {
    router.post(
        '/employee', 
        (req: Request, res: Response) =>  employeeController.create(req, res)
    )
    
    router.get(
        '/employee', 
        (req: Request, res: Response) =>  employeeController.getAll(req, res)
    )
    
    router.get(
        '/employee/:id', 
        (req: Request, res: Response) =>  employeeController.getById(req, res)
    )
    
    router.put(
        '/employee', 
        (req: Request, res: Response) =>  employeeController.update(req, res)
    )
    
    router.delete(
        '/employee', 
        (req: Request, res: Response) =>  employeeController.delete(req, res)
    )
}

export { employeeRoutes}