import { Employee } from '../entity/Employee';

export class EmployeeRepository {
    private _employees: Employee[];

    async save(employee: Employee): Promise<void> {
        this._employees.push(employee);
    }
}
