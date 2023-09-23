import { UseCase } from '../../UseCase';
import { EmployeeDTO } from '../dto/EmployeeDTO';
import { EmployeeRepository } from '../../../dataprovider/employee/repository/EmployeeRepository';

export class CreateEmployeeUseCase implements UseCase<EmployeeDTO, void> {

    constructor(
        private readonly employeeRepository: EmployeeRepository
    ) {}

    async execute(input: EmployeeDTO) : Promise<void> {
        return await this.employeeRepository.save(input.toEntity())
    }
}
