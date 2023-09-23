import { EmployeeRepository } from '../../../dataprovider/employee/repository/EmployeeRepository';
import { EmployeeDTO } from '../../../domain/dto/EmployeeDTO';
import { UseCase } from '../../../domain/usecase/UseCase';

export class UpdateEmployeeUseCase implements UseCase<EmployeeDTO, void> {

    constructor(
        private readonly employeeRepository: EmployeeRepository
    ) {}

    async execute(input: EmployeeDTO): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
