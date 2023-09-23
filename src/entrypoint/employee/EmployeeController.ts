import { Request, Response } from 'express';
import { EmployeeDTO } from '../../domain/employee/dto/EmployeeDTO';
import { EmployeeUseCase } from '../../domain/employee/usecase/EmployeeUseCase';

export class EmployeeController {

    constructor(
        private employeeUseCase: EmployeeUseCase,
    ) { }

    async create(request: Request, response: Response): Promise<Response<void>> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.employeeUseCase.create(employeeDto);
        return response.status(201).send()
    }

    async update(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.employeeUseCase.update(employeeDto);
    }

    async delete(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.employeeUseCase.delete(employeeDto);
    }

    async getById(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.employeeUseCase.getById(employeeDto);
    }

    async getAll(request: Request, response: Response): Promise<void> {
        const employeeDto = EmployeeDTO.fromRequest(request.body);
        await this.employeeUseCase.getAll();
    }
}
