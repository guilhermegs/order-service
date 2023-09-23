import { EmployeeDTO } from '../dto/EmployeeDTO';
import { GetEmployeeDTO } from '../dto/GetEmployeeDTO';
import { EmployeeRepository } from '../repository/EmployeeRepository';
import { UpdateEmployeeDTO } from '../dto/UpdateEmployeeDTO';

export class EmployeeUseCase {

    constructor(
        private readonly employeeRepository: EmployeeRepository
    ) {}

    async getAll(): Promise<GetEmployeeDTO[]> {
        return await this.employeeRepository.getAll()
    }

    async getById(employeeId: string): Promise<GetEmployeeDTO | undefined> {
        return await this.employeeRepository.getById(employeeId)
    }

    async create(input: EmployeeDTO) : Promise<void> {
        await this.employeeRepository.save(input)
    }

    async update(input: UpdateEmployeeDTO): Promise<void> {
        await this.employeeRepository.update(input)
    }

    async delete(id: string): Promise<void> {
        await this.employeeRepository.delete(id)
    }
}
