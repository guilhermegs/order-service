import { Employee } from "../../../dataprovider/employee/entity/Employee";
import { BaseDTO } from "./BaseDTO";

export class EmployeeDTO extends BaseDTO {
    
    constructor(
        private name: string, 
        private user: string, 
        private password: string, 
        private department: string
    ) {
        super();
    }

    override validate() {
        if (!this.name || this.name == '') {
            throw new Error("The name is required.");
        }

        if (this.name.length < 3) {
            throw new Error("The name should have at least 3 characters.");
        }

        if (!this.user || this.user == '') {
            throw new Error("The user is required.");
        }
    }

    override toEntity(): Employee {
        return new Employee(
            this.name,
            this.user,
            this.password,
            this.department
        );
    }

    static fromRequest({ name, user, password, department }): EmployeeDTO {
        return new EmployeeDTO(
            name,
            user,
            password,
            department
        );
    }
}
