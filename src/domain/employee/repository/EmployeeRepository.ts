import { GetEmployeeDTO } from '../../../domain/employee/dto/GetEmployeeDTO';
import { EmployeeDTO } from '../dto/EmployeeDTO';
import { UpdateEmployeeDTO } from '../dto/UpdateEmployeeDTO';

export interface EmployeeRepository {
    getAll(): Promise<GetEmployeeDTO[]>;
    getById(employeeId: string): Promise<GetEmployeeDTO | undefined>;
    save(employee: EmployeeDTO): Promise<void>;
    update(employee: UpdateEmployeeDTO): Promise<void>;
    delete(employeeId: string): Promise<void>;
}
