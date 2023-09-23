import { EmployeeRepository } from "../../dataprovider/employee/repository/EmployeeRepository"
import { 
    CreateEmployeeUseCase,
    DeleteEmployeeUseCase,
    GetAllEmployeesUseCase,
    GetEmployeeByIdUseCase,
    UpdateEmployeeUseCase
} from "../../domain/employee/usecase/EmployeeUseCases"
import { EmployeeController } from "../../entrypoint/employee/EmployeeController"

export const EmployeeControlerCompose = () => {
    return new EmployeeController(
        new CreateEmployeeUseCase(new EmployeeRepository()),
        new UpdateEmployeeUseCase(new EmployeeRepository()),
        new GetEmployeeByIdUseCase(new EmployeeRepository()),
        new GetAllEmployeesUseCase(new EmployeeRepository()),
        new DeleteEmployeeUseCase(new EmployeeRepository()),
    )
}
