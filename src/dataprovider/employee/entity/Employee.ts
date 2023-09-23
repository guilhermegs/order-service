import { EmployeeDTO } from "../../../domain/employee/dto/EmployeeDTO";
import { GetEmployeeDTO } from "../../../domain/employee/dto/GetEmployeeDTO";
import { UpdateEmployeeDTO } from "../../../domain/employee/dto/UpdateEmployeeDTO";

export class Employee {

    private _id: string

    constructor(
        private _name: string, 
        private _user: string, 
        private _department: string,
        private _password: string
    ) { 
    }

    get id(): string {
        return this._id
    }

    toGetEmployeeDTO(): GetEmployeeDTO {
        return new GetEmployeeDTO(
            this._id,
            this._name,
            this._user,
            this._department
        )
    }

    static fromDto(employee: EmployeeDTO): Employee {
        return new Employee(
            employee.name,
            employee.user,
            employee.department,
            employee.password
        )
    }

    static fromUpdateDto(updateEmployee: UpdateEmployeeDTO): Employee {
        return new Employee(
            updateEmployee.name,
            updateEmployee.user,
            updateEmployee.department,
            updateEmployee.password
        )
    }
}
