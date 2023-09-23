import { EmployeeRepository } from '../../../../dataprovider/employee/repository/EmployeeRepository';
import { EmployeeDTO } from '../../../dto/EmployeeDTO';
import { UseCase } from '../../UseCase';

export class DeleteEmployeeUseCase implements UseCase<EmployeeDTO, void> {

    constructor(
        private readonly employeeRepository: EmployeeRepository
    ) {}

    async execute(input: EmployeeDTO): Promise<void> {
        throw new Error('Method not implemented.');
    }
}