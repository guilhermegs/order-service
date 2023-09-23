import { Request, Response } from 'express';
import { CreateEmployeeUseCase } from '../../domain/employee/usecase/CreateEmployeeUseCase';
import { EmployeeDTO } from '../../domain/employee/dto/EmployeeDTO';
import {
    UpdateEmployeeUseCase,
    DeleteEmployeeUseCase,
    GetEmployeeByIdUseCase,
    GetAllEmployeesUseCase,
} from '../../domain/employee/usecase/EmployeeUseCases';

export class EmployeeController {

    constructor(
        private createEmployeeUseCase: CreateEmployeeUseCase,
        private updateEmployeeUseCase: UpdateEmployeeUseCase,
        private getEmployeeByIdUseCase: GetEmployeeByIdUseCase,
        private getAllEmployeesUseCase: GetAllEmployeesUseCase,
        private deleteEmployeeUseCase: DeleteEmployeeUseCase,
    ) { }

    async create(request: Request, response: Response): Promise<Response<void>> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.createEmployeeUseCase.execute(employeeDto);
        return response.status(201).send()
    }

    async update(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.updateEmployeeUseCase.execute(employeeDto);
    }

    async delete(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.deleteEmployeeUseCase.execute(employeeDto);
    }

    async getById(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.getEmployeeByIdUseCase.execute(employeeDto);
    }

    async getAll(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.getAllEmployeesUseCase.execute(employeeDto);
    }
}
