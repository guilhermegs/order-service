import { EmployeeDTO } from '../../../domain/employee/dto/EmployeeDTO';
import { GetEmployeeDTO } from '../../../domain/employee/dto/GetEmployeeDTO';
import { UpdateEmployeeDTO } from '../../../domain/employee/dto/UpdateEmployeeDTO';
import { EmployeeRepository } from '../../../domain/employee/repository/EmployeeRepository';
import { Employee } from '../entity/Employee';

export class EmployeeRepositoryImpl implements EmployeeRepository {
    
    private _employees: Employee[];

    async getAll(): Promise<GetEmployeeDTO[]> {
        return this._employees.map(employee => employee.toGetEmployeeDTO());
    }

    async getById(employeeId: string): Promise<GetEmployeeDTO | undefined> {
        const employee = this._employees.find(employee => employee.id == employeeId);

        if(employee) {
            return employee.toGetEmployeeDTO();
        }

        throw new Error('Employee not found.');
    }

    async save(employee: EmployeeDTO): Promise<void> {
        this._employees.push(Employee.fromDto(employee));
    }

    async update(updateEmployee: UpdateEmployeeDTO): Promise<void> {
        const employeeIndex = this._employees.findIndex(employee => employee.id == updateEmployee.id)

        if(employeeIndex != -1){
            this._employees[employeeIndex] = Employee.fromUpdateDto(updateEmployee);
        }

        throw new Error('Employee not found.');
    }

    async delete(employeeId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
