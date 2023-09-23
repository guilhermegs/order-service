import { EmployeeRepository } from "../../dataprovider/employee/repository/EmployeeRepository"
import { 
    EmployeeUseCase
} from "../../domain/employee/usecase/EmployeeUseCase"
import { EmployeeController } from "../../entrypoint/employee/EmployeeController"

export const EmployeeControlerCompose = () => {
    return new EmployeeController(
        new EmployeeUseCase(new EmployeeRepository())
    )
}
