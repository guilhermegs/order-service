import { Employee } from "../../../dataprovider/employee/entity/Employee";

export abstract class BaseDTO {

    constructor() {
        this.validate();
    }

    abstract validate(): void;
    abstract toEntity(): Employee;
}
